<script lang="ts">
	import { base } from '$app/paths';

	interface Event {
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
		featured?: boolean;
	}

	interface Props {
		event: Event;
		onPreviewPoster?: (event: Event) => void;
	}

	let { event, onPreviewPoster }: Props = $props();
</script>

<div class="card-surface overflow-hidden flex flex-col h-full group border-t-4 border-t-seal-red">
	{#if event.image}
		<div class="relative h-60 bg-dark-cream overflow-hidden flex items-center justify-center">
			<!-- Blurred backdrop for portrait flyers -->
			<img
				src="{base}{event.image}"
				alt=""
				aria-hidden="true"
				class="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-40"
			/>
			<img
				src="{base}{event.image}"
				alt={event.title}
				class="relative z-10 h-full w-auto max-w-full object-contain py-2 drop-shadow-md group-hover:scale-105 transition-transform duration-300"
			/>
			{#if event.recurringBadge}
				<span class="absolute top-3 right-3 z-20 rounded-full bg-ink/80 backdrop-blur-xs text-cream text-[11px] font-semibold px-3 py-1">
					{event.recurringBadge}
				</span>
			{/if}
			{#if onPreviewPoster}
				<button
					type="button"
					onclick={() => onPreviewPoster(event)}
					class="absolute bottom-3 right-3 z-20 rounded-lg bg-white/90 hover:bg-white text-ink text-xs font-semibold px-3 py-1.5 shadow-sm transition opacity-95 group-hover:opacity-100 cursor-pointer"
				>
					View Flyer
				</button>
			{/if}
		</div>
	{:else}
		<div class="h-48 bg-gradient-to-br from-dark-cream to-sage/40 flex items-center justify-center">
			<div class="text-center text-tea-green">
				<span class="text-4xl font-chinese font-bold opacity-60">茶</span>
				<p class="text-xs font-semibold mt-1 uppercase tracking-wider">CTC Event</p>
			</div>
		</div>
	{/if}

	<div class="p-6 flex flex-col flex-grow">
		<div class="flex flex-wrap items-center gap-2 mb-3">
			{#if event.category}
				<span class="card-label">{event.category}</span>
			{/if}
		</div>

		<h3 class="text-xl font-serif font-bold text-ink group-hover:text-seal-red transition-colors mb-3 leading-snug">
			<a href="{base}/events/{event.id}">{event.title}</a>
		</h3>

		<div class="space-y-2 text-xs sm:text-sm text-stone-600 mb-4">
			<div class="flex items-center gap-2">
				<svg class="w-4 h-4 text-seal-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h12a1 1 0 100-2H6z"
						clip-rule="evenodd"
					/>
				</svg>
				<span class="font-medium text-stone-800">{event.date}</span>
			</div>

			<div class="flex items-center gap-2">
				<svg class="w-4 h-4 text-tea-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.447.894l1.006 3.018a1 1 0 001.894-.894l-1.005-3.018A1 1 0 0011 11V6z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>{event.time}</span>
			</div>

			<div class="flex items-start gap-2">
				<svg class="w-4 h-4 mt-0.5 text-tea-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>{event.location}</span>
			</div>
		</div>

		<p class="text-sm text-stone-600 line-clamp-3 mb-6 flex-grow">{event.description}</p>

		<div class="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
			<a
				href="{base}/events/{event.id}"
				class="inline-flex items-center gap-1.5 text-sm font-semibold text-seal-red hover:text-seal-red-dark transition"
			>
				<span>Event Details</span>
				<span aria-hidden="true">→</span>
			</a>
			{#if onPreviewPoster && event.image}
				<button
					type="button"
					onclick={() => onPreviewPoster(event)}
					class="text-xs font-medium text-stone-500 hover:text-tea-green transition cursor-pointer"
				>
					Inspect Poster
				</button>
			{/if}
		</div>
	</div>
</div>
