import defaultEvents from '$lib/data/events.js';
import { clubInfo } from '$lib/data/clubInfo';

export interface ClubEvent {
	id: string;
	title: string;
	category?: string;
	date: string;
	recurringBadge?: string;
	time: string;
	location: string;
	description: string;
	highlights?: string[];
	image?: string | null;
	featured?: boolean;
}

/**
 * Converts a Google Sheets share link or "Publish to web" link into a direct CSV URL.
 */
export function normalizeSheetCsvUrl(rawUrl: string): string {
	const trimmed = rawUrl.trim();
	if (!trimmed) return '';

	// Already a published CSV URL
	if (trimmed.includes('output=csv') || trimmed.endsWith('.csv')) {
		return trimmed;
	}

	// Published HTML URL -> swap to output=csv
	if (trimmed.includes('/pubhtml')) {
		return trimmed.replace('/pubhtml', '/pub?output=csv');
	}
	if (trimmed.includes('/pub?')) {
		return `${trimmed}&output=csv`;
	}

	// Standard Google Sheet /d/<ID>/edit link -> use /gviz/tq?tqx=out:csv
	const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
	if (match) {
		const sheetId = match[1];
		const gidMatch = trimmed.match(/[#&?]gid=([0-9]+)/);
		const gidParam = gidMatch ? `&gid=${gidMatch[1]}` : '';
		return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv${gidParam}`;
	}

	return trimmed;
}

/**
 * Converts Google Drive shared image links into direct embeddable image URLs.
 */
export function normalizeImageUrl(rawImage?: string | null): string | null {
	if (!rawImage) return null;
	const trimmed = rawImage.trim();
	if (!trimmed) return null;

	// Match https://drive.google.com/file/d/<ID>/view or /open?id=<ID>
	const fileIdMatch =
		trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
		trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);

	if (fileIdMatch && trimmed.includes('google.com')) {
		return `https://lh3.googleusercontent.com/d/${fileIdMatch[1]}`;
	}

	return trimmed;
}

/**
 * RFC-4180 compliant CSV parser that handles quoted fields, commas, and multi-line descriptions.
 */
export function parseCsvRows(csvText: string): string[][] {
	const rows: string[][] = [];
	let currentRow: string[] = [];
	let currentCell = '';
	let inQuotes = false;

	for (let i = 0; i < csvText.length; i++) {
		const ch = csvText[i];
		const next = csvText[i + 1];

		if (inQuotes) {
			if (ch === '"' && next === '"') {
				currentCell += '"';
				i++;
			} else if (ch === '"') {
				inQuotes = false;
			} else {
				currentCell += ch;
			}
		} else {
			if (ch === '"') {
				inQuotes = true;
			} else if (ch === ',') {
				currentRow.push(currentCell.trim());
				currentCell = '';
			} else if (ch === '\r' && next === '\n') {
				currentRow.push(currentCell.trim());
				rows.push(currentRow);
				currentRow = [];
				currentCell = '';
				i++;
			} else if (ch === '\n' || ch === '\r') {
				currentRow.push(currentCell.trim());
				rows.push(currentRow);
				currentRow = [];
				currentCell = '';
			} else {
				currentCell += ch;
			}
		}
	}

	if (currentCell.length > 0 || currentRow.length > 0) {
		currentRow.push(currentCell.trim());
		rows.push(currentRow);
	}

	return rows.filter((row) => row.some((cell) => cell.length > 0));
}

function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/**
 * Converts CSV text from Google Sheets / Google Forms into ClubEvent objects.
 */
export function parseEventsFromCsv(csvText: string): ClubEvent[] {
	const rows = parseCsvRows(csvText);
	if (rows.length < 2) return [];

	const headers = rows[0].map((h) => h.toLowerCase().trim());

	const findCol = (keywords: string[]) =>
		headers.findIndex((h) => keywords.some((k) => h.includes(k)));

	const titleIdx = findCol(['title', 'event name', 'name']);
	const categoryIdx = findCol(['category', 'type']);
	const dateIdx = findCol(['date', 'day']);
	const timeIdx = findCol(['time', 'hours']);
	const locationIdx = findCol(['location', 'place', 'room', 'venue']);
	const descIdx = findCol(['description', 'details', 'about', 'summary']);
	const imageIdx = findCol(['image', 'poster', 'flyer', 'photo']);
	const idIdx = findCol(['id', 'slug']);

	if (titleIdx === -1) return [];

	const parsed: ClubEvent[] = [];

	for (let r = 1; r < rows.length; r++) {
		const row = rows[r];
		const title = row[titleIdx]?.trim();
		if (!title) continue;

		const date = (dateIdx !== -1 ? row[dateIdx] : '') || 'TBA';
		const time = (timeIdx !== -1 ? row[timeIdx] : '') || '1:00 PM - 3:00 PM';
		const location = (locationIdx !== -1 ? row[locationIdx] : '') || 'SU Green, UT Dallas';
		const category = (categoryIdx !== -1 ? row[categoryIdx] : '') || 'Event';
		const description = (descIdx !== -1 ? row[descIdx] : '') || '';
		const rawImage = imageIdx !== -1 ? row[imageIdx] : null;
		const customId = idIdx !== -1 ? row[idIdx] : '';

		const id = customId ? slugify(customId) : slugify(`${title}-${date}`);

		parsed.push({
			id: id || `event-${r}`,
			title,
			category,
			date,
			time,
			location,
			description,
			image: normalizeImageUrl(rawImage)
		});
	}

	return parsed;
}

export function resolveEventImage(image: string | null | undefined, basePath: string): string | null {
	if (!image) return null;
	if (image.startsWith('http://') || image.startsWith('https://')) {
		return normalizeImageUrl(image);
	}
	return `${basePath}${image.startsWith('/') ? image : `/${image}`}`;
}

/**
 * Fetches live events from the configured Google Sheet CSV URL, falling back to defaultEvents.
 */
export async function fetchLiveEvents(overrideUrl?: string): Promise<ClubEvent[]> {
	const rawUrl = overrideUrl ?? clubInfo.googleSheetCsvUrl;
	const csvUrl = normalizeSheetCsvUrl(rawUrl);

	if (!csvUrl) {
		return defaultEvents as ClubEvent[];
	}

	try {
		const response = await fetch(csvUrl, { cache: 'no-store' });
		if (!response.ok) {
			return defaultEvents as ClubEvent[];
		}
		const csvText = await response.text();
		const sheetEvents = parseEventsFromCsv(csvText);
		return sheetEvents.length > 0 ? sheetEvents : (defaultEvents as ClubEvent[]);
	} catch {
		return defaultEvents as ClubEvent[];
	}
}
