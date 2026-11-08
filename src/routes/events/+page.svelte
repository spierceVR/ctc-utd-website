<script lang="ts">
	import { base } from '$app/paths';
	import Hero from '$lib/components/Hero.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import PosterModal from '$lib/components/PosterModal.svelte';
	import events from '$lib/data/events.js';
	import { clubInfo } from '$lib/data/clubInfo';

	let filter = $state('all');
	let viewMode = $state<'cards' | 'posters'>('cards');
	let activePosterEvent = $state<{
		id: string;
		title: string;
		date: string;
		recurringBadge?: string;
		time: string;
		location: string;
		description: string;
		highlights?: string[];
		image?: string | null;
		category?: string;
	} | null>(null);

	const categories = ['all', ...new Set(events.map((e) => e.category).filter(Boolean))];

	const filteredEvents = $derived(
		filter === 'all'
			? events
			: events.filter((event) => event.category?.toLowerCase() === filter.toLowerCase())
	);
</script>

<svelte:head>
	<title>Events & Flyer Archive | Chinese Tea Club at UT Dallas</title>
	<meta
		name="description"
		content="Explore upcoming weekly Wednesday tea gatherings, Gongfu tea ceremonies, Matcha Meetups, Feng Cha fundraisers, and cultural festivals hosted by the Chinese Tea Club at UT Dallas."
	/>
</svelte:head>

<Hero
	title="Events & Flyer Archive"
	subtitle="Discover our weekly Wednesday tea sessions on the SU Green, Gongfu ceremonies, Matcha Meetups, and cultural festival collaborations."
	badge="Wednesdays 1:00–3:00 PM · @teaclub.utd"
	chineseWatermark="禮"
	cta={{ text: 'View Monthly Calendar', href: `${base}/calendar` }}
	secondaryCta={{ text: 'Follow @teaclub.utd', href: clubInfo.links.instagram, external: true }}
/>

<!-- Filter & View Mode Toolbar -->
<section class="container pt-12 pb-6">
	<div class="flex flex-col lg:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-xs">
		<!-- Category Pills -->
		<div class="flex flex-wrap gap-2 justify-center lg:justify-start">
			{#each categories as category (category)}
				<button
					type="button"
					onclick={() => (filter = category)}
					class={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
						filter === category
							? 'bg-seal-red text-white shadow-xs'
							: 'bg-dark-cream text-stone-700 hover:bg-seal-red/15'
					}`}
				>
					{category === 'all' ? 'All Events (12)' : category}
				</button>
			{/each}
		</div>

		<!-- View Toggle -->
		<div class="flex items-center gap-2 bg-dark-cream p-1 rounded-xl border border-stone-200 flex-shrink-0">
			<button
				type="button"
				onclick={() => (viewMode = 'cards')}
				class={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
					viewMode === 'cards' ? 'bg-white text-seal-red shadow-xs' : 'text-stone-600 hover:text-ink'
				}`}
			>
				Detailed Cards
			</button>
			<button
				type="button"
				onclick={() => (viewMode = 'posters')}
				class={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
					viewMode === 'posters' ? 'bg-white text-seal-red shadow-xs' : 'text-stone-600 hover:text-ink'
				}`}
			>
				Poster Wall
			</button>
		</div>
	</div>
</section>

<!-- Events Display -->
<section class="container py-10">
	{#if filteredEvents.length > 0}
		{#if viewMode === 'cards'}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each filteredEvents as event (event.id)}
					<EventCard {event} onPreviewPoster={(ev) => (activePosterEvent = ev)} />
				{/each}
			</div>
		{:else}
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
				{#each filteredEvents as event (event.id)}
					<div class="group rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all flex flex-col">
						<button
							type="button"
							onclick={() => (activePosterEvent = event)}
							class="relative aspect-[4/5] bg-ink overflow-hidden cursor-pointer"
						>
							<img
								src="{base}{event.image}"
								alt={event.title}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							/>
							<span class="absolute top-3 left-3 rounded-full bg-seal-red/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
								{event.category}
							</span>
						</button>
						<div class="p-4 flex items-center justify-between gap-2">
							<div>
								<h3 class="text-sm font-serif font-bold text-ink line-clamp-1">
									<a href="{base}/events/{event.id}" class="hover:text-seal-red">{event.title}</a>
								</h3>
								<p class="text-xs text-stone-500">{event.date} · {event.time}</p>
							</div>
							<button
								type="button"
								onclick={() => (activePosterEvent = event)}
								class="text-xs font-semibold text-seal-red hover:underline flex-shrink-0 cursor-pointer"
							>
								Zoom
							</button>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	{:else}
		<div class="text-center py-12 bg-white rounded-2xl border border-stone-200">
			<p class="text-lg text-stone-600">No events found in this category.</p>
		</div>
	{/if}
</section>

<!-- CTA Section -->
<section class="container py-12">
	<div class="rounded-3xl bg-gradient-to-r from-seal-red-dark via-seal-red to-tea-green text-white p-8 sm:p-12 text-center shadow-xl">
		<h2 class="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
			Never Miss a Tea Session!
		</h2>
		<p class="text-base sm:text-lg text-stone-100 max-w-2xl mx-auto mb-7">
			Our Secretary posts digital flyers and room updates in Discord `#announcements` and on `@teaclub.utd` Instagram stories before every meeting.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href={clubInfo.links.discord}
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center justify-center rounded-xl bg-white text-seal-red font-bold px-7 py-3.5 hover:bg-cream transition shadow-md"
			>
				Join Our Discord
			</a>
			<a
				href={clubInfo.links.instagram}
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center justify-center rounded-xl border-2 border-white text-white font-bold px-7 py-3.5 hover:bg-white hover:text-ink transition"
			>
				Follow @teaclub.utd
			</a>
			<a
				href={clubInfo.links.linktree}
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center justify-center rounded-xl border-2 border-white/60 text-white font-bold px-7 py-3.5 hover:bg-white/15 transition"
			>
				linktr.ee/ctcutd
			</a>
		</div>
	</div>
</section>

<PosterModal event={activePosterEvent} onClose={() => (activePosterEvent = null)} />
