<script lang="ts">
	interface Props {
		title: string;
		subtitle: string;
		badge?: string;
		chineseWatermark?: string;
		image?: string;
		cta?: {
			text: string;
			href: string;
		};
		secondaryCta?: {
			text: string;
			href: string;
			external?: boolean;
		};
	}

	let {
		title,
		subtitle,
		badge = 'Chinese Tea Club at UT Dallas · @teaclub.utd',
		chineseWatermark = '茶',
		image,
		cta,
		secondaryCta
	}: Props = $props();
</script>

<div
	class="relative overflow-hidden border-b border-seal-red/15 bg-gradient-to-br from-[#2B1212] via-[#4A1818] to-[#233829] text-cream py-16 md:py-24"
	style={image ? `background-image: linear-gradient(135deg, rgba(43, 18, 18, 0.88), rgba(35, 56, 41, 0.85)), url('${image}'); background-size: cover; background-position: center;` : ''}
>
	<!-- Subtle Calligraphic Watermark -->
	<div
		class="pointer-events-none select-none absolute -right-8 -bottom-16 text-[16rem] md:text-[22rem] font-chinese font-bold text-white/[0.04] leading-none"
		aria-hidden="true"
	>
		{chineseWatermark}
	</div>

	<div class="relative z-10 container text-center max-w-4xl">
		{#if badge}
			<div class="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-medium text-cream mb-6">
				<span class="w-2 h-2 rounded-full bg-gold"></span>
				<span>{badge}</span>
			</div>
		{/if}

		<h1 class="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-5 tracking-tight leading-tight">
			{title}
		</h1>
		<p class="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-200 leading-relaxed mb-8">
			{subtitle}
		</p>

		{#if cta || secondaryCta}
			<div class="flex flex-wrap items-center justify-center gap-4">
				{#if cta}
					<a href={cta.href} class="btn-seal text-sm sm:text-base px-7 py-3.5">
						{cta.text}
					</a>
				{/if}
				{#if secondaryCta}
					<a
						href={secondaryCta.href}
						target={secondaryCta.external ? '_blank' : undefined}
						rel={secondaryCta.external ? 'noreferrer' : undefined}
						class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-xs px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white hover:text-ink transition"
					>
						{secondaryCta.text}
					</a>
				{/if}
			</div>
		{/if}
	</div>
</div>
