<script lang="ts">
	import { base } from '$app/paths';
	import Hero from '$lib/components/Hero.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import { clubInfo } from '$lib/data/clubInfo';
	import {
		fetchLiveEvents,
		normalizeSheetCsvUrl,
		type ClubEvent
	} from '$lib/utils/googleSheets';

	let testSheetUrl = $state(clubInfo.googleSheetCsvUrl || '');
	let previewEvents = $state<ClubEvent[]>([]);
	let statusMessage = $state('');
	let loading = $state(false);

	const normalizedUrl = $derived(normalizeSheetCsvUrl(testSheetUrl));

	async function handleTestSheet() {
		if (!testSheetUrl.trim()) {
			statusMessage = 'Paste a Google Sheet link above first.';
			return;
		}
		loading = true;
		statusMessage = 'Fetching events from Google Sheet...';
		try {
			const res = await fetch(normalizedUrl, { cache: 'no-store' });
			if (!res.ok) {
				statusMessage = `Could not fetch sheet (HTTP ${res.status}). Make sure the sheet is shared ("Anyone with the link can view") or Published to the web as CSV.`;
				previewEvents = [];
			} else {
				const events = await fetchLiveEvents(testSheetUrl);
				previewEvents = events;
				statusMessage = `Loaded ${events.length} event(s) from Google Sheet!`;
			}
		} catch {
			statusMessage =
				'Could not connect to that URL. Make sure you used File → Share → Publish to web → CSV in Google Sheets.';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Officer Event Guide - Chinese Tea Club at UT Dallas</title>
</svelte:head>

<Hero
	title="Officer Guide: Managing Events"
	subtitle="Add or edit club events using Google Sheets or a Google Form — no coding or GitHub required."
/>

<section class="container py-14 max-w-4xl space-y-10">
	<!-- How Officers Add Events -->
	<div class="card-surface p-6 sm:p-8 space-y-4">
		<h2 class="text-2xl font-serif font-bold text-ink">How Officers Add New Events</h2>
		<p class="text-sm text-stone-600 leading-relaxed">
			Once our club Google Sheet is connected, any officer can add or update events on the website in two ways:
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
			<div class="rounded-xl bg-cream p-5 border border-stone-200">
				<h3 class="text-lg font-serif font-bold text-seal-red mb-1.5">
					Option A: Edit the Google Sheet
				</h3>
				<p class="text-xs sm:text-sm text-stone-600">
					Open the shared club Google Sheet and add a new row with the <strong>Title</strong>, <strong>Category</strong>, <strong>Date</strong>, <strong>Time</strong>, <strong>Location</strong>, <strong>Description</strong>, and optional <strong>Image URL</strong> (even a Google Drive share link works!).
				</p>
			</div>

			<div class="rounded-xl bg-cream p-5 border border-stone-200">
				<h3 class="text-lg font-serif font-bold text-tea-green mb-1.5">
					Option B: Fill Out a Google Form
				</h3>
				<p class="text-xs sm:text-sm text-stone-600">
					In Google Sheets, click <strong>Tools → Create a new form</strong> with those same fields. Officers can submit new events from their phone in 30 seconds!
				</p>
			</div>
		</div>
	</div>

	<!-- One-Time Setup Instructions -->
	<div class="card-surface p-6 sm:p-8 space-y-5">
		<div class="flex flex-wrap items-center justify-between gap-4">
			<h2 class="text-2xl font-serif font-bold text-ink">One-Time Google Sheet Setup (2 Minutes)</h2>
			<a
				href="{base}/events-template.csv"
				download="ctc-events-template.csv"
				class="btn-seal text-xs py-2.5 px-4"
			>
				Download Starter CSV Template
			</a>
		</div>

		<ol class="space-y-3 text-sm text-stone-700 list-decimal list-inside leading-relaxed">
			<li>
				Download the <strong>Starter CSV Template</strong> above (it already includes all 12 current CTC events and column headers).
			</li>
			<li>
				Create a new <a href="https://sheets.new" target="_blank" rel="noreferrer" class="text-seal-red underline font-medium">Google Sheet (sheets.new)</a> and go to <strong>File → Import → Upload</strong> to import `ctc-events-template.csv`.
			</li>
			<li>
				In Google Sheets, click <strong>File → Share → Publish to web</strong>, change <em>Web page</em> to <strong>Comma-separated values (.csv)</strong>, click <strong>Publish</strong>, and copy the link.
			</li>
			<li>
				Paste that link into `googleSheetCsvUrl` inside `src/lib/data/clubInfo.ts` (one line of config). From that moment on, every change in the Google Sheet appears on the website automatically!
			</li>
		</ol>

		<div class="rounded-xl bg-dark-cream/70 p-4 text-xs text-stone-600">
			<strong>Tip for Event Flyers:</strong> Officers can upload a flyer image to a shared Google Drive folder, right-click → <strong>Share → Anyone with the link</strong>, and paste that Google Drive link into the <code>Image URL</code> column. The website automatically converts Google Drive share links into embedded images!
		</div>
	</div>

	<!-- Live Sheet Tester -->
	<div class="card-surface p-6 sm:p-8 space-y-4">
		<h2 class="text-2xl font-serif font-bold text-ink">Test Your Google Sheet Link</h2>
		<p class="text-sm text-stone-600">
			Paste your Google Sheet link below to preview how the website will display your rows:
		</p>

		<div class="flex flex-col sm:flex-row gap-3">
			<input
				type="url"
				bind:value={testSheetUrl}
				placeholder="https://docs.google.com/spreadsheets/d/.../pub?output=csv"
				class="flex-grow rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-ink focus:border-seal-red focus:outline-none"
			/>
			<button
				type="button"
				onclick={handleTestSheet}
				disabled={loading}
				class="btn-tea text-xs sm:text-sm py-2.5 px-6 cursor-pointer"
			>
				{loading ? 'Loading...' : 'Preview Sheet'}
			</button>
		</div>

		{#if normalizedUrl}
			<p class="text-xs text-stone-500 break-all">
				<strong>Normalized CSV URL for <code>clubInfo.ts</code>:</strong> <code>{normalizedUrl}</code>
			</p>
		{/if}

		{#if statusMessage}
			<p class="text-sm font-medium text-seal-red">{statusMessage}</p>
		{/if}

		{#if previewEvents.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
				{#each previewEvents.slice(0, 6) as event (event.id)}
					<EventCard {event} />
				{/each}
			</div>
		{/if}
	</div>
</section>
