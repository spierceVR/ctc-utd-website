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
	}

	let { event }: Props = $props();
</script>

<a
	href="{base}/events/{event.id}"
	class="card-surface overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-all"
>
	{#if event.image}
		<div class="h-56 bg-dark-cream overflow-hidden flex items-center justify-center p-3">
			<img
				src="{base}{event.image}"
				alt={event.title}
				class="h-full w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
			/>
		</div>
	{/if}

	<div class="p-6 flex flex-col flex-grow">
		{#if event.category}
			<span class="text-xs font-semibold uppercase tracking-wider text-seal-red mb-1.5">
				{event.category}
			</span>
		{/if}

		<h3 class="text-xl font-serif font-bold text-ink group-hover:text-seal-red transition-colors mb-2 leading-snug">
			{event.title}
		</h3>

		<p class="text-xs text-stone-500 mb-3">
			{event.date} &middot; {event.time} &middot; {event.location}
		</p>

		<p class="text-sm text-stone-600 line-clamp-3 flex-grow">
			{event.description}
		</p>
	</div>
</a>
