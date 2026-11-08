<script lang="ts">
	interface Props {
		size?: 'sm' | 'md' | 'lg' | 'xl';
		variant?: 'red' | 'green' | 'cream';
	}

	let { size = 'md', variant = 'red' }: Props = $props();

	const sizeClasses = {
		sm: 'w-10 h-10',
		md: 'w-12 h-12',
		lg: 'w-20 h-20',
		xl: 'w-28 h-28'
	};

	const bgColors = {
		red: '#9B2322',
		green: '#4A6B53',
		cream: '#FBF8F3'
	};

	const fgColors = {
		red: '#FBF8F3',
		green: '#FBF8F3',
		cream: '#9B2322'
	};
</script>

<div class="inline-flex items-center justify-center flex-shrink-0 select-none {sizeClasses[size]}" aria-hidden="true">
	<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow-sm" role="img" aria-label="CTC Chinese Tea Club Seal">
		<!-- Outer Seal Circle -->
		<circle cx="60" cy="60" r="58" fill={bgColors[variant]} />
		<!-- Inner Carved Seal Ring -->
		<circle
			cx="60"
			cy="60"
			r="53"
			fill="none"
			stroke={fgColors[variant]}
			stroke-width="2.2"
			stroke-dasharray="120 4 80 3"
			opacity="0.92"
		/>
		<!-- Vertical C - T - C on Left (Carved Seal Style) -->
		<g fill={fgColors[variant]} font-family="'Cormorant Garamond', Georgia, serif" font-weight="700">
			<text x="23" y="42" font-size="27" letter-spacing="-1">C</text>
			<text x="24" y="68" font-size="26" letter-spacing="-1">T</text>
			<text x="23" y="95" font-size="27" letter-spacing="-1">C</text>
		</g>
		<!-- Large Calligraphic 茶 (Tea) on Top Right -->
		<text
			x="74"
			y="62"
			text-anchor="middle"
			fill={fgColors[variant]}
			font-family="'Noto Serif SC', 'Cormorant Garamond', Georgia, serif"
			font-weight="700"
			font-size="42"
		>
			茶
		</text>
		<!-- "Chinese TeaClub" Stacked Below 茶 -->
		<text
			x="74"
			y="79"
			text-anchor="middle"
			fill={fgColors[variant]}
			font-family="'Cormorant Garamond', Georgia, serif"
			font-weight="700"
			font-size="13.5"
			letter-spacing="0.3"
		>
			Chinese
		</text>
		<text
			x="74"
			y="93"
			text-anchor="middle"
			fill={fgColors[variant]}
			font-family="'Cormorant Garamond', Georgia, serif"
			font-weight="700"
			font-size="13.5"
			letter-spacing="0.3"
		>
			TeaClub
		</text>
	</svg>
</div>
