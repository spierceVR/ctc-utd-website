<script lang="ts">
	import { base } from '$app/paths';
	import events from '$lib/data/events.js';
	import { clubInfo } from '$lib/data/clubInfo';

	let { data } = $props();
	const event = $derived(data.event);
	const otherEvents = $derived(events.filter((e) => e.id !== event?.id).slice(0, 3));
</script>

<svelte:head>
	<title>{event.title} | Chinese Tea Club at UT Dallas</title>
	<meta name="description" content={event.description} />
</svelte:head>

<div class="bg-dark-cream py-4 border-b border-seal-red/15">
	<div class="container flex items-center justify-between text-sm">
		<a href="{base}/events" class="text-seal-red hover:text-seal-red-dark font-semibold inline-flex items-center gap-1.5">
			<span>←</span>
			<span>Back to Events & Flyers</span>
		</a>
		<a href="{base}/calendar" class="text-tea-green hover:underline font-medium">
			View Calendar →
		</a>
	</div>
</div>

<article class="container py-12 md:py-16">
	<div class="max-w-5xl mx-auto">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
			<!-- Poster Showcase Column -->
			<div class="lg:col-span-5">
				<div class="rounded-3xl overflow-hidden bg-ink border-2 border-seal-red/20 shadow-xl p-4 flex items-center justify-center">
					{#if event.image}
						<img
							src="{base}{event.image}"
							alt={event.title}
							class="w-full h-auto max-h-[520px] object-contain rounded-xl"
						/>
					{:else}
						<div class="py-24 text-center text-cream">
							<span class="text-7xl font-chinese font-bold opacity-50">茶</span>
						</div>
					{/if}
				</div>
				<p class="text-center text-xs text-stone-500 mt-3">
					Official event flyer from <a href={clubInfo.links.instagram} target="_blank" rel="noreferrer" class="text-seal-red underline">@teaclub.utd</a>
				</p>
			</div>

			<!-- Event Details Column -->
			<div class="lg:col-span-7">
				<div class="flex flex-wrap items-center gap-2 mb-4">
					{#if event.category}
						<span class="card-label">{event.category}</span>
					{/if}
					{#if event.recurringBadge}
						<span class="rounded-full bg-tea-green/15 text-tea-green text-xs font-bold px-3 py-1">
							{event.recurringBadge}
						</span>
					{/if}
				</div>

				<h1 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-6 leading-tight">
					{event.title}
				</h1>

				<!-- Key Logistics Card -->
				<div class="rounded-2xl bg-white border border-stone-200 p-6 shadow-xs mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
					<div>
						<span class="text-xs font-bold uppercase tracking-wider text-seal-red block">Date</span>
						<span class="text-sm sm:text-base font-semibold text-ink mt-0.5 block">{event.date}</span>
					</div>
					<div>
						<span class="text-xs font-bold uppercase tracking-wider text-tea-green block">Time</span>
						<span class="text-sm sm:text-base font-semibold text-ink mt-0.5 block">{event.time}</span>
					</div>
					<div>
						<span class="text-xs font-bold uppercase tracking-wider text-gold block">Location</span>
						<span class="text-sm sm:text-base font-semibold text-ink mt-0.5 block">{event.location}</span>
					</div>
				</div>

				<!-- Description -->
				<div class="mb-8">
					<h2 class="text-2xl font-serif font-bold text-ink mb-3">About This Gathering</h2>
					<p class="text-base sm:text-lg text-stone-700 leading-relaxed">{event.description}</p>
				</div>

				{#if event.highlights && event.highlights.length > 0}
					<div class="rounded-2xl bg-dark-cream/70 border border-stone-200 p-6 mb-8">
						<h3 class="text-lg font-serif font-bold text-seal-red mb-3">What to Expect</h3>
						<ul class="space-y-2 text-sm sm:text-base text-stone-700">
							{#each event.highlights as item}
								<li class="flex items-start gap-2.5">
									<span class="text-seal-red font-bold">✓</span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<!-- Join CTA -->
				<div class="rounded-2xl bg-gradient-to-r from-seal-red to-seal-red-dark text-white p-6 sm:p-7 shadow-md">
					<h3 class="text-xl font-serif font-bold text-white mb-2">Planning to Attend?</h3>
					<p class="text-sm text-stone-100 mb-5">
						Check our Discord `#announcements` channel or Instagram stories on the day of the event for any weather or room updates!
					</p>
					<div class="flex flex-wrap gap-3">
						<a
							href={clubInfo.links.discord}
							target="_blank"
							rel="noreferrer"
							class="rounded-xl bg-white text-seal-red font-bold text-xs sm:text-sm px-5 py-2.5 hover:bg-cream transition"
						>
							Join Discord Server
						</a>
						<a
							href={clubInfo.links.instagram}
							target="_blank"
							rel="noreferrer"
							class="rounded-xl border border-white/60 text-white font-bold text-xs sm:text-sm px-5 py-2.5 hover:bg-white/15 transition"
						>
							@teaclub.utd on Instagram
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Related Events -->
		{#if otherEvents.length > 0}
			<div class="border-t border-stone-200 pt-12">
				<h2 class="text-2xl sm:text-3xl font-serif font-bold text-ink mb-6">More CTC Events & Flyers</h2>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
					{#each otherEvents as relatedEvent (relatedEvent.id)}
						<a
							href="{base}/events/{relatedEvent.id}"
							class="card-surface p-4 flex items-center gap-4 group"
						>
							{#if relatedEvent.image}
								<img
									src="{base}{relatedEvent.image}"
									alt={relatedEvent.title}
									class="w-16 h-20 object-cover rounded-lg flex-shrink-0"
								/>
							{/if}
							<div>
								<span class="text-[10px] font-bold uppercase tracking-wider text-seal-red">
									{relatedEvent.category}
								</span>
								<h3 class="font-serif font-bold text-ink group-hover:text-seal-red transition-colors line-clamp-2 leading-snug">
									{relatedEvent.title}
								</h3>
								<p class="text-xs text-stone-500 mt-1">{relatedEvent.date}</p>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</article>
