<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import events from '$lib/data/events.js';
</script>

<svelte:head>
	<title>Events - Chinese Tea Club at UT Dallas</title>
</svelte:head>

<Hero
	title="Events"
	subtitle="Weekly Wednesday tea sessions, Gongfu ceremonies, and campus collaborations."
/>

<section class="container py-14 md:py-16">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each events as event (event.id)}
			<EventCard {event} />
		{/each}
	</div>
</section>
