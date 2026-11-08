<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import CtcSeal from './CtcSeal.svelte';
	import { clubInfo } from '$lib/data/clubInfo';

	let menuOpen = $state(false);

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};

	const closeMenu = () => {
		menuOpen = false;
	};
</script>

<!-- Top Meeting Announcement Ribbon -->
<div class="bg-seal-red text-cream text-xs sm:text-sm py-2 px-4 border-b border-seal-red-dark">
	<div class="container flex flex-wrap items-center justify-between gap-2">
		<div class="flex items-center gap-2 font-medium">
			<span class="inline-block w-2 h-2 rounded-full bg-gold animate-pulse"></span>
			<span>
				<strong>Weekly Tea Gatherings:</strong> Wednesdays 1:00–3:00 PM at the SU Green
			</span>
		</div>
		<div class="hidden sm:flex items-center gap-4 text-xs text-cream/90">
			<a
				href={clubInfo.links.linktree}
				target="_blank"
				rel="noreferrer"
				class="hover:text-white underline underline-offset-2"
			>
				linktr.ee/ctcutd
			</a>
			<span>·</span>
			<a
				href={clubInfo.links.instagram}
				target="_blank"
				rel="noreferrer"
				class="hover:text-white"
			>
				@teaclub.utd
			</a>
		</div>
	</div>
</div>

<header class="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-seal-red/15 shadow-xs">
	<nav class="container py-3.5 flex items-center justify-between gap-6">
		<a href="{base}/" class="flex items-center gap-3 group" onclick={closeMenu}>
			<img
				src="{base}/images/posters/ctc-logo.png"
				alt="Chinese Tea Club Seal Logo"
				class="w-11 h-11 rounded-full shadow-xs group-hover:scale-105 transition-transform"
			/>
			<div class="flex flex-col">
				<div class="flex items-center gap-2">
					<span class="text-xl sm:text-2xl font-serif font-bold text-seal-red tracking-tight leading-none">
						Chinese Tea Club
					</span>
					<span class="hidden sm:inline-block text-xs font-chinese text-tea-green bg-tea-green/10 px-2 py-0.5 rounded-full font-semibold">
						茶社 · UTD
					</span>
				</div>
				<span class="text-xs text-stone-600 mt-0.5">
					The University of Texas at Dallas
				</span>
			</div>
		</a>

		<button
			onclick={toggleMenu}
			aria-label="Toggle navigation menu"
			aria-expanded={menuOpen}
			class="lg:hidden p-2.5 rounded-xl bg-seal-red text-white hover:bg-seal-red-dark transition"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
				/>
			</svg>
		</button>

		<div class="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
			<a
				href="{base}/"
				class="hover:text-seal-red transition py-1"
				class:active={$page.url.pathname === `${base}/` || $page.url.pathname === '/'}
			>
				Home
			</a>
			<a
				href="{base}/about"
				class="hover:text-seal-red transition py-1"
				class:active={$page.url.pathname.startsWith(`${base}/about`)}
			>
				About & Officers
			</a>
			<a
				href="{base}/about#constitution"
				class="hover:text-seal-red transition py-1"
			>
				Constitution
			</a>
			<a
				href="{base}/events"
				class="hover:text-seal-red transition py-1"
				class:active={$page.url.pathname.startsWith(`${base}/events`)}
			>
				Events & Flyers
			</a>
			<a
				href="{base}/calendar"
				class="hover:text-seal-red transition py-1"
				class:active={$page.url.pathname.startsWith(`${base}/calendar`)}
			>
				Calendar
			</a>
			<a
				href={clubInfo.links.linktree}
				target="_blank"
				rel="noreferrer"
				class="hover:text-seal-red transition py-1 inline-flex items-center gap-1"
			>
				<span>Linktree</span>
				<svg class="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
				</svg>
			</a>
			<a
				href={clubInfo.links.discord}
				target="_blank"
				rel="noreferrer"
				class="btn-seal text-xs py-2.5 px-4 rounded-xl"
			>
				<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.975 14.975 0 0 0 1.293-2.1.074.074 0 0 0-.041-.104 13.091 13.091 0 0 1-1.86-.885.075.075.075 0 0 1-.008-.125c.125-.093.25-.19.37-.287a.075.075 0 0 1 .078-.01c3.9 1.783 8.12 1.783 12.002 0a.075.075 0 0 1 .079.009c.12.098.245.195.369.288a.075.075 0 0 1-.006.125c-.594.344-1.218.643-1.861.885a.075.075 0 0 0-.041.104c.36.687.776 1.343 1.293 2.1a.075.075 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-3.03.076.076 0 0 0 .032-.056c.5-4.506-.838-8.962-3.554-12.66a.061.061 0 0 0-.031-.03z"
					/>
				</svg>
				<span>Join Discord</span>
			</a>
		</div>
	</nav>

	{#if menuOpen}
		<div class="lg:hidden bg-cream border-t border-seal-red/15 shadow-lg">
			<nav class="container py-5 flex flex-col gap-3.5">
				<a href="{base}/" class="text-base font-semibold text-stone-800 hover:text-seal-red" onclick={closeMenu}>
					Home
				</a>
				<a href="{base}/about" class="text-base font-semibold text-stone-800 hover:text-seal-red" onclick={closeMenu}>
					About, Membership & Officers
				</a>
				<a href="{base}/about#constitution" class="text-base font-semibold text-stone-800 hover:text-seal-red" onclick={closeMenu}>
					Club Constitution
				</a>
				<a href="{base}/events" class="text-base font-semibold text-stone-800 hover:text-seal-red" onclick={closeMenu}>
					Events & Poster Archive
				</a>
				<a href="{base}/calendar" class="text-base font-semibold text-stone-800 hover:text-seal-red" onclick={closeMenu}>
					Calendar Schedule
				</a>
				<div class="pt-2 border-t border-stone-200 flex flex-wrap gap-3">
					<a
						href={clubInfo.links.discord}
						target="_blank"
						rel="noreferrer"
						class="btn-seal text-sm py-2.5 px-4 flex-1"
						onclick={closeMenu}
					>
						Join Discord
					</a>
					<a
						href={clubInfo.links.linktree}
						target="_blank"
						rel="noreferrer"
						class="btn-tea text-sm py-2.5 px-4 flex-1"
						onclick={closeMenu}
					>
						Linktree Hub
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>

<style>
	.active {
		color: var(--color-seal-red);
		font-weight: 700;
		border-bottom: 2px solid var(--color-seal-red);
	}
</style>
