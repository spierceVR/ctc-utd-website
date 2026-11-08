<script lang="ts">
	interface Props {
		title: string;
		subtitle: string;
		cta?: {
			text: string;
			href: string;
		};
	}

	let { title, subtitle, cta }: Props = $props();
</script>

<div class="border-b border-stone-200 bg-dark-cream/70 py-14 md:py-20 text-center">
	<div class="container max-w-3xl">
		<h1 class="text-4xl sm:text-5xl font-serif font-bold text-ink mb-4">
			{title}
		</h1>
		<p class="text-base sm:text-lg text-stone-600 leading-relaxed">
			{subtitle}
		</p>

		{#if cta}
			<div class="mt-7">
				<a href={cta.href} class="btn-seal text-sm px-6 py-3">
					{cta.text}
				</a>
			</div>
		{/if}
	</div>
</div>
