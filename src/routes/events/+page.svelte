<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Hero from '$lib/components/Hero.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import defaultEvents from '$lib/data/events.js';
	import { clubInfo } from '$lib/data/clubInfo';
	import { fetchLiveEvents, resolveEventImage, type ClubEvent } from '$lib/utils/googleSheets';

	let allEvents = $state<ClubEvent[]>(defaultEvents as ClubEvent[]);

	const selectedId = $derived(browser ? $page.url.searchParams.get('id') : null);
	const selectedEvent = $derived(
		selectedId ? allEvents.find((e) => e.id === selectedId) ?? null : null
	);

	onMount(async () => {
		allEvents = await fetchLiveEvents();
	});
</script>

<svelte:head>
	<title>{selectedEvent ? `${selectedEvent.title} - ` : ''}Events - Chinese Tea Club at UT Dallas</title>
</svelte:head>

{#if selectedEvent}
	{@const imageSrc = resolveEventImage(selectedEvent.image, base)}
	<article class="container py-12 md:py-16 max-w-3xl">
		<a href="{base}/events" class="text-sm font-semibold text-seal-red hover:underline inline-block mb-6">
			← Back to All Events
		</a>

		<div class="card-surface p-6 sm:p-10">
			{#if selectedEvent.category}
				<span class="text-xs font-semibold uppercase tracking-wider text-seal-red">
					{selectedEvent.category}
				</span>
			{/if}

			<h1 class="text-3xl sm:text-4xl font-serif font-bold text-ink mt-1 mb-4">
				{selectedEvent.title}
			</h1>

			<p class="text-sm text-stone-600 mb-6 pb-6 border-b border-stone-200">
				<strong>Date:</strong> {selectedEvent.date} &nbsp;&middot;&nbsp;
				<strong>Time:</strong> {selectedEvent.time} &nbsp;&middot;&nbsp;
				<strong>Location:</strong> {selectedEvent.location}
			</p>

			{#if imageSrc}
				<div class="mb-6 bg-dark-cream rounded-xl p-4 flex justify-center">
					<img
						src={imageSrc}
						alt={selectedEvent.title}
						class="max-h-96 w-auto object-contain rounded-lg"
					/>
				</div>
			{/if}

			<p class="text-base text-stone-700 leading-relaxed mb-8 whitespace-pre-line">
				{selectedEvent.description}
			</p>

			<div class="flex flex-wrap gap-3 pt-4 border-t border-stone-200">
				<a href={clubInfo.links.discord} target="_blank" rel="noreferrer" class="btn-seal text-xs py-2.5 px-5">
					Join Discord
				</a>
				<a href={clubInfo.links.instagram} target="_blank" rel="noreferrer" class="btn-tea text-xs py-2.5 px-5">
					Instagram (@teaclub.utd)
				</a>
			</div>
		</div>
	</article>
{:else}
	<Hero
		title="Events"
		subtitle="Weekly Wednesday tea sessions, Gongfu ceremonies, and campus collaborations."
	/>

	<section class="container py-14 md:py-16">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each allEvents as event (event.id)}
				<EventCard {event} />
			{/each}
		</div>
	</section>
{/if}
