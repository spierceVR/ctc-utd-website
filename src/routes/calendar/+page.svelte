<script lang="ts">
	import { base } from '$app/paths';
	import Hero from '$lib/components/Hero.svelte';
	import events from '$lib/data/events.js';
	import { clubInfo } from '$lib/data/clubInfo';

	type EventItem = {
		id: string;
		title: string;
		category?: string;
		date: string;
		recurringBadge?: string;
		time: string;
		location: string;
		description: string;
		image?: string | null;
		parsedDate: Date;
	};

	const parsedEvents: EventItem[] = events
		.map((event) => ({
			...event,
			parsedDate: new Date(event.date)
		}))
		.filter((event) => !Number.isNaN(event.parsedDate.getTime()))
		.sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());

	const monthGroups = new Map<
		string,
		{
			year: number;
			month: number;
			label: string;
			events: EventItem[];
		}
	>();

	for (const event of parsedEvents) {
		const year = event.parsedDate.getFullYear();
		const month = event.parsedDate.getMonth();
		const key = `${year}-${month}`;

		if (!monthGroups.has(key)) {
			monthGroups.set(key, {
				year,
				month,
				label: event.parsedDate.toLocaleString('en-US', { month: 'long', year: 'numeric' }),
				events: []
			});
		}

		monthGroups.get(key)!.events.push(event);
	}

	const months = Array.from(monthGroups.values()).sort(
		(a, b) => b.year * 12 + b.month - (a.year * 12 + a.month)
	);

	function getMonthGrid(year: number, month: number) {
		const firstDay = new Date(year, month, 1).getDay();
		const totalDays = new Date(year, month + 1, 0).getDate();
		const cells: (number | null)[] = Array(firstDay)
			.fill(null)
			.concat(Array.from({ length: totalDays }, (_, i) => i + 1));
		const rows: (number | null)[][] = [];

		for (let i = 0; i < cells.length; i += 7) {
			rows.push(cells.slice(i, i + 7));
		}

		return rows;
	}

	const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
</script>

<svelte:head>
	<title>Calendar & Weekly Schedule | Chinese Tea Club at UT Dallas</title>
</svelte:head>

<Hero
	title="Event Calendar & Weekly Schedule"
	subtitle="We meet every Wednesday from 1:00–3:00 PM on the SU Green, plus special monthly tastings, boba fundraisers, and cultural festivals."
	badge="Wednesdays 1:00 PM · SU Green & 2nd Floor Atrium"
	chineseWatermark="曆"
	cta={{ text: 'Browse All Flyers', href: `${base}/events` }}
	secondaryCta={{ text: 'Join Discord for Alerts', href: clubInfo.links.discord, external: true }}
/>

<!-- Standing Weekly Schedule Banner -->
<section class="container pt-12">
	<div class="rounded-3xl bg-white border-2 border-seal-red/25 p-6 sm:p-8 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
		<div class="lg:col-span-8">
			<span class="card-label mb-2">Standing Weekly Schedule</span>
			<h2 class="text-2xl sm:text-3xl font-serif font-bold text-ink">
				Every Wednesday · 1:00 PM – 3:00 PM
			</h2>
			<p class="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
				<strong>1:00–2:00 PM:</strong> Quiet Tea Session — Learn about Gongfu (功夫), the Traditional Chinese Tea Ceremony.<br />
				<strong>2:00–3:00 PM:</strong> Social Hour — Hang out with friends, drink tea, play games, or study.<br />
				<strong>Location:</strong> Usually on the <strong>SU Green</strong> (or <strong>Student Union 2nd Floor Atrium</strong> during inclement weather).
			</p>
		</div>
		<div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
			<a
				href={clubInfo.links.discord}
				target="_blank"
				rel="noreferrer"
				class="btn-seal text-sm py-3 px-5 text-center"
			>
				Check Discord #announcements
			</a>
			<a
				href={clubInfo.links.instagram}
				target="_blank"
				rel="noreferrer"
				class="btn-tea text-sm py-3 px-5 text-center"
			>
				Check @teaclub.utd Stories
			</a>
		</div>
	</div>
</section>

<section class="container py-14 md:py-20">
	{#each months as monthData}
		{@const rows = getMonthGrid(monthData.year, monthData.month)}
		<div class="mb-16">
			<div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
				<div>
					<p class="text-xs uppercase tracking-[0.25em] text-seal-red font-bold">{monthData.label}</p>
					<h3 class="text-2xl sm:text-3xl font-serif font-bold text-ink mt-1">
						{monthData.events.length} Featured Gathering{monthData.events.length === 1 ? '' : 's'}
					</h3>
				</div>
				<a href="{base}/events" class="text-sm font-semibold text-seal-red hover:underline">
					View flyer gallery →
				</a>
			</div>

			<div class="grid gap-6 lg:grid-cols-[1fr_360px]">
				<div class="rounded-3xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
					<div class="grid grid-cols-7 text-center text-xs uppercase tracking-widest text-stone-500 font-bold mb-3">
						{#each weekDays as day}
							<div class={day === 'Wed' ? 'text-seal-red' : ''}>{day}</div>
						{/each}
					</div>

					<div class="grid grid-cols-7 gap-2">
						{#each rows as week}
							{#each week as day, dayIdx}
								<div
									class={`min-h-[5.25rem] rounded-2xl border p-2 transition ${
										day
											? dayIdx === 3
												? 'border-seal-red/25 bg-seal-red/[0.03]'
												: 'border-stone-200/80 bg-cream/30'
											: 'border-transparent bg-transparent'
									}`}
								>
									{#if day}
										<div class="flex items-center justify-between">
											{#if dayIdx === 3}
												<span class="text-[10px] font-bold text-tea-green uppercase">Wed Tea</span>
											{:else}
												<span></span>
											{/if}
											<span class="text-xs font-bold text-stone-700">{day}</span>
										</div>
										{#each monthData.events.filter((ev) => ev.parsedDate.getDate() === day) as event}
											<a
												href="{base}/events/{event.id}"
												class="mt-1.5 block rounded-lg bg-seal-red text-white px-2 py-1 text-[11px] font-medium leading-tight hover:bg-seal-red-dark transition"
											>
												{event.title}
											</a>
										{/each}
									{/if}
								</div>
							{/each}
						{/each}
					</div>
				</div>

				<div class="rounded-3xl border border-stone-200 bg-dark-cream/80 p-6 shadow-xs">
					<h4 class="text-xl font-serif font-bold text-ink mb-4">Events in {monthData.label}</h4>
					<div class="space-y-3.5">
						{#each monthData.events as event}
							<a
								href="{base}/events/{event.id}"
								class="flex items-start gap-3.5 rounded-2xl bg-white p-4 border border-stone-200 hover:border-seal-red transition group"
							>
								{#if event.image}
									<img
										src="{base}{event.image}"
										alt={event.title}
										class="w-14 h-16 object-cover rounded-lg flex-shrink-0"
									/>
								{/if}
								<div>
									<p class="text-[11px] uppercase tracking-wider text-seal-red font-bold">
										{event.parsedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {event.time}
									</p>
									<p class="text-base font-serif font-bold text-ink group-hover:text-seal-red transition-colors leading-snug mt-0.5">
										{event.title}
									</p>
									<p class="text-xs text-stone-500 mt-1">{event.location}</p>
								</div>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/each}
</section>
