<script lang="ts">
	import { base } from '$app/paths';
	import Hero from '$lib/components/Hero.svelte';
	import events from '$lib/data/events.js';

	const sortedEvents = [...events].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
</script>

<svelte:head>
	<title>Calendar - Chinese Tea Club at UT Dallas</title>
</svelte:head>

<Hero
	title="Schedule &amp; Calendar"
	subtitle="We meet every Wednesday from 1:00–3:00 PM on the SU Green, plus special tastings and campus events."
/>

<section class="container py-14 md:py-16 max-w-3xl">
	<div class="card-surface p-6 mb-8 border-l-4 border-l-seal-red">
		<h2 class="text-xl font-serif font-bold text-ink">Weekly Tea Gatherings</h2>
		<p class="text-sm text-stone-600 mt-1">
			<strong>Every Wednesday · 1:00 PM – 3:00 PM</strong> at the SU Green (or Student Union 2nd Floor Atrium).
			1:00–2:00 PM Quiet Gongfu Tea Session · 2:00–3:00 PM Social Hour.
		</p>
	</div>

	<div class="space-y-4">
		{#each sortedEvents as event (event.id)}
			<a
				href="{base}/events/{event.id}"
				class="card-surface p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-seal-red transition group"
			>
				<div>
					<span class="text-xs font-semibold uppercase tracking-wider text-seal-red">
						{event.date} &middot; {event.time}
					</span>
					<h3 class="text-lg font-serif font-bold text-ink group-hover:text-seal-red transition-colors">
						{event.title}
					</h3>
					<p class="text-xs text-stone-500">{event.location}</p>
				</div>
				<span class="text-xs font-semibold text-seal-red flex-shrink-0">Details →</span>
			</a>
		{/each}
	</div>
</section>
