<script lang="ts">
	import { base } from '$app/paths';
	import { clubInfo } from '$lib/data/clubInfo';

	let { data } = $props();
	const event = $derived(data.event);
</script>

<svelte:head>
	<title>{event.title} - Chinese Tea Club at UT Dallas</title>
</svelte:head>

<article class="container py-12 md:py-16 max-w-3xl">
	<a href="{base}/events" class="text-sm font-semibold text-seal-red hover:underline inline-block mb-6">
		← Back to Events
	</a>

	<div class="card-surface p-6 sm:p-10">
		{#if event.category}
			<span class="text-xs font-semibold uppercase tracking-wider text-seal-red">
				{event.category}
			</span>
		{/if}

		<h1 class="text-3xl sm:text-4xl font-serif font-bold text-ink mt-1 mb-4">
			{event.title}
		</h1>

		<p class="text-sm text-stone-600 mb-6 pb-6 border-b border-stone-200">
			<strong>Date:</strong> {event.date} &nbsp;&middot;&nbsp;
			<strong>Time:</strong> {event.time} &nbsp;&middot;&nbsp;
			<strong>Location:</strong> {event.location}
		</p>

		{#if event.image}
			<div class="mb-6 bg-dark-cream rounded-xl p-4 flex justify-center">
				<img
					src="{base}{event.image}"
					alt={event.title}
					class="max-h-96 w-auto object-contain rounded-lg"
				/>
			</div>
		{/if}

		<p class="text-base text-stone-700 leading-relaxed mb-8">
			{event.description}
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
