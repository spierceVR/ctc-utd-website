<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { clubInfo } from '$lib/data/clubInfo';

	let menuOpen = $state(false);
	const closeMenu = () => (menuOpen = false);
</script>

<header class="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone-200/80">
	<nav class="container py-4 flex items-center justify-between gap-6">
		<a href="{base}/" class="flex items-center gap-3" onclick={closeMenu}>
			<img
				src="{base}/images/posters/ctc-logo.png"
				alt="Chinese Tea Club Logo"
				class="w-10 h-10 rounded-full"
			/>
			<div>
				<span class="text-xl font-serif font-bold text-seal-red tracking-tight block leading-none">
					Chinese Tea Club
				</span>
				<span class="text-xs text-stone-500">UT Dallas</span>
			</div>
		</a>

		<button
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Toggle navigation menu"
			aria-expanded={menuOpen}
			class="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200/50 transition"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
				/>
			</svg>
		</button>

		<div class="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
			<a
				href="{base}/"
				class="hover:text-seal-red transition"
				class:active={$page.url.pathname === `${base}/` || $page.url.pathname === '/'}
			>
				Home
			</a>
			<a
				href="{base}/about"
				class="hover:text-seal-red transition"
				class:active={$page.url.pathname.startsWith(`${base}/about`)}
			>
				About
			</a>
			<a
				href="{base}/events"
				class="hover:text-seal-red transition"
				class:active={$page.url.pathname.startsWith(`${base}/events`)}
			>
				Events
			</a>
			<a
				href="{base}/calendar"
				class="hover:text-seal-red transition"
				class:active={$page.url.pathname.startsWith(`${base}/calendar`)}
			>
				Calendar
			</a>
			<a
				href={clubInfo.links.discord}
				target="_blank"
				rel="noreferrer"
				class="btn-seal text-xs py-2 px-4 rounded-lg"
			>
				Join Discord
			</a>
		</div>
	</nav>

	{#if menuOpen}
		<div class="md:hidden bg-cream border-t border-stone-200">
			<nav class="container py-4 flex flex-col gap-3 text-sm font-medium">
				<a href="{base}/" class="py-1 text-stone-800 hover:text-seal-red" onclick={closeMenu}>Home</a>
				<a href="{base}/about" class="py-1 text-stone-800 hover:text-seal-red" onclick={closeMenu}>About</a>
				<a href="{base}/events" class="py-1 text-stone-800 hover:text-seal-red" onclick={closeMenu}>Events</a>
				<a href="{base}/calendar" class="py-1 text-stone-800 hover:text-seal-red" onclick={closeMenu}>Calendar</a>
				<a
					href={clubInfo.links.discord}
					target="_blank"
					rel="noreferrer"
					class="btn-seal text-xs py-2.5 px-4 text-center mt-1"
					onclick={closeMenu}
				>
					Join Discord
				</a>
			</nav>
		</div>
	{/if}
</header>

<style>
	.active {
		color: var(--color-seal-red);
		font-weight: 600;
	}
</style>
