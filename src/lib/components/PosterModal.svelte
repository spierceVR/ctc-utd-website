<script lang="ts">
	import { base } from '$app/paths';
	import { clubInfo } from '$lib/data/clubInfo';

	interface EventItem {
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
	}

	interface Props {
		event: EventItem | null;
		onClose: () => void;
	}

	let { event, onClose }: Props = $props();
</script>

{#if event}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 overflow-y-auto"
		role="dialog"
		aria-modal="true"
		aria-label={event.title}
		tabindex="-1"
		onclick={(e) => {
			if (e.target === e.currentTarget) onClose();
		}}
		onkeydown={(e) => {
			if (e.key === 'Escape') onClose();
		}}
	>
		<div class="relative w-full max-w-3xl rounded-2xl bg-cream border border-seal-red/20 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
			<button
				type="button"
				onclick={onClose}
				aria-label="Close modal"
				class="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-ink/80 text-white hover:bg-seal-red flex items-center justify-center transition cursor-pointer"
			>
				✕
			</button>

			<!-- Poster Column -->
			<div class="md:col-span-5 bg-ink flex items-center justify-center p-4 min-h-[280px]">
				{#if event.image}
					<img
						src="{base}{event.image}"
						alt={event.title}
						class="max-h-[420px] w-auto object-contain rounded-lg shadow-lg"
					/>
				{:else}
					<span class="text-6xl font-chinese text-cream/30">茶</span>
				{/if}
			</div>

			<!-- Details Column -->
			<div class="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
				<div>
					<div class="flex flex-wrap items-center gap-2 mb-3">
						{#if event.category}
							<span class="card-label">{event.category}</span>
						{/if}
						{#if event.recurringBadge}
							<span class="text-xs font-semibold text-tea-green bg-tea-green/10 px-2.5 py-1 rounded-full">
								{event.recurringBadge}
							</span>
						{/if}
					</div>

					<h3 class="text-2xl sm:text-3xl font-serif font-bold text-ink mb-3 leading-tight">
						{event.title}
					</h3>

					<div class="space-y-1.5 text-sm text-stone-700 mb-4 bg-dark-cream/70 p-3.5 rounded-xl border border-stone-200/80">
						<p><strong>Date:</strong> {event.date}</p>
						<p><strong>Time:</strong> {event.time}</p>
						<p><strong>Location:</strong> {event.location}</p>
					</div>

					<p class="text-sm text-stone-700 leading-relaxed mb-4">
						{event.description}
					</p>

					{#if event.highlights && event.highlights.length > 0}
						<ul class="space-y-1.5 text-xs sm:text-sm text-stone-600 mb-6">
							{#each event.highlights as item}
								<li class="flex items-start gap-2">
									<span class="text-seal-red font-bold">•</span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					{/if}
				</div>

				<div class="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-200">
					<a href="{base}/events/{event.id}" class="btn-seal text-xs sm:text-sm py-2.5 px-5" onclick={onClose}>
						Full Event Page
					</a>
					<a
						href={clubInfo.links.instagram}
						target="_blank"
						rel="noreferrer"
						class="btn-tea text-xs sm:text-sm py-2.5 px-5"
					>
						View on @teaclub.utd
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}
