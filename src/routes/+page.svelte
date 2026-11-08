<script lang="ts">
	import { base } from '$app/paths';
	import EventCard from '$lib/components/EventCard.svelte';
	import events from '$lib/data/events.js';
	import { clubInfo } from '$lib/data/clubInfo';

	const featuredEvents = events.slice(0, 3);
</script>

<svelte:head>
	<title>Chinese Tea Club at UT Dallas</title>
	<meta
		name="description"
		content="Official Chinese Tea Club at UT Dallas (@teaclub.utd). Join us Wednesdays 1–3 PM on the SU Green for tea and community."
	/>
</svelte:head>

<!-- Clean, Simple Hero -->
<section class="bg-dark-cream/70 border-b border-stone-200 py-16 md:py-24 text-center">
	<div class="container max-w-3xl">
		<img
			src="{base}/images/posters/ctc-logo.png"
			alt="Chinese Tea Club Seal"
			class="w-20 h-20 rounded-full mx-auto mb-6 shadow-sm"
		/>
		<h1 class="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-ink mb-4">
			Chinese Tea Club at UTD
		</h1>
		<p class="text-lg sm:text-xl text-stone-600 leading-relaxed mb-6">
			{clubInfo.purpose}
		</p>
		<p class="text-sm font-medium text-seal-red mb-8">
			Wednesdays · 1:00 PM – 3:00 PM · SU Green &amp; Student Union Atrium
		</p>

		<div class="flex flex-wrap justify-center gap-3.5">
			<a href={clubInfo.links.discord} target="_blank" rel="noreferrer" class="btn-seal text-sm px-6 py-3">
				Join Our Discord
			</a>
			<a
				href="{base}/events"
				class="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-seal-red hover:text-seal-red transition"
			>
				Browse Events
			</a>
		</div>
	</div>
</section>

<!-- Weekly Gatherings (Simple 3-Column Overview) -->
<section class="container py-16 md:py-20">
	<h2 class="text-3xl font-serif font-bold text-ink text-center mb-10">
		What We Do
	</h2>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="card-surface p-6">
			<span class="text-xs font-semibold uppercase tracking-wider text-seal-red">
				Wednesdays · 1:00–2:00 PM
			</span>
			<h3 class="text-xl font-serif font-bold text-ink mt-1 mb-2">
				Quiet Tea &amp; Gongfu Ceremony
			</h3>
			<p class="text-sm text-stone-600">
				Learn about traditional Gongfu Cha (功夫茶) tea brewing and explore loose-leaf oolong, Pu’er, green, white, and red teas.
			</p>
		</div>

		<div class="card-surface p-6">
			<span class="text-xs font-semibold uppercase tracking-wider text-tea-green">
				Wednesdays · 2:00–3:00 PM
			</span>
			<h3 class="text-xl font-serif font-bold text-ink mt-1 mb-2">
				Social Hour &amp; Study
			</h3>
			<p class="text-sm text-stone-600">
				Hang out with friends on the SU Green, keep steeping tea, play board games or mahjong, or study between classes.
			</p>
		</div>

		<div class="card-surface p-6">
			<span class="text-xs font-semibold uppercase tracking-wider text-stone-500">
				Campus Community
			</span>
			<h3 class="text-xl font-serif font-bold text-ink mt-1 mb-2">
				Festivals &amp; Collabs
			</h3>
			<p class="text-sm text-stone-600">
				Join us for Matcha Meetups, Mid-Autumn mooncake tastings, boba fundraisers, and collaborations with campus organizations.
			</p>
		</div>
	</div>
</section>

<!-- Featured Events -->
<section class="bg-dark-cream/50 border-y border-stone-200 py-16 md:py-20">
	<div class="container">
		<div class="flex items-baseline justify-between mb-8">
			<h2 class="text-3xl font-serif font-bold text-ink">Recent &amp; Upcoming Events</h2>
			<a href="{base}/events" class="text-sm font-semibold text-seal-red hover:underline">
				View all →
			</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each featuredEvents as event (event.id)}
				<EventCard {event} />
			{/each}
		</div>
	</div>
</section>

<!-- Simple Links Section -->
<section class="container py-16 text-center max-w-2xl">
	<h2 class="text-3xl font-serif font-bold text-ink mb-3">Stay Connected</h2>
	<p class="text-sm sm:text-base text-stone-600 mb-6">
		Official membership is $10 per academic year and open to all UTD students, faculty, and staff. Follow our socials for weekly meeting updates!
	</p>
	<div class="flex flex-wrap justify-center gap-3">
		<a href={clubInfo.links.discord} target="_blank" rel="noreferrer" class="btn-seal text-sm px-5 py-2.5">
			Discord Server
		</a>
		<a href={clubInfo.links.instagram} target="_blank" rel="noreferrer" class="btn-tea text-sm px-5 py-2.5">
			Instagram (@teaclub.utd)
		</a>
		<a
			href={clubInfo.links.linktree}
			target="_blank"
			rel="noreferrer"
			class="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-seal-red transition"
		>
			Linktree (linktr.ee/ctcutd)
		</a>
	</div>
</section>
