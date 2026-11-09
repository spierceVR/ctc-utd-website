<script lang="ts">
	import { base } from '$app/paths';
	import { resolveEventImage, type ClubEvent } from '$lib/utils/googleSheets';

	interface Props {
		event: ClubEvent;
	}

	let { event }: Props = $props();
	const imageSrc = $derived(resolveEventImage(event.image, base));
</script>

<a
	href="{base}/events?id={encodeURIComponent(event.id)}"
	class="card-surface overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-all"
>
	{#if imageSrc}
		<div class="h-56 bg-dark-cream overflow-hidden flex items-center justify-center p-3">
			<img
				src={imageSrc}
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
