<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/theme.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Chinese Tea Club - UT Dallas</title>
	<meta name="description" content="Experience tea culture at UT Dallas - Join the Chinese Tea Club for monthly tastings, tea ceremonies, and cultural events." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
