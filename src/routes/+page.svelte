<script lang="ts">
	import { base } from '$app/paths';
	import EventCard from '$lib/components/EventCard.svelte';
	import PosterModal from '$lib/components/PosterModal.svelte';
	import CtcSeal from '$lib/components/CtcSeal.svelte';
	import events from '$lib/data/events.js';
	import { clubInfo } from '$lib/data/clubInfo';

	const featuredEvents = events.slice(0, 6);
	let selectedTeaIndex = $state(0);
	let activePosterEvent = $state<{
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
	} | null>(null);

	const selectedTea = $derived(clubInfo.teaVarieties[selectedTeaIndex]);
</script>

<svelte:head>
	<title>Chinese Tea Club at UT Dallas (@teaclub.utd) | Official Website</title>
	<meta
		name="description"
		content="Hi, we are the official Chinese Tea Club at UTD! Join us Wednesdays at 1:00 PM on the SU Green for Gongfu tea ceremonies, matcha meetups, and a welcoming third place on campus."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-[#2B1111] via-[#541919] to-[#23392A] text-cream py-16 md:py-24 border-b-4 border-gold/40">
	<!-- Large Background Calligraphy Watermark -->
	<div
		class="pointer-events-none select-none absolute right-4 -bottom-16 text-[18rem] lg:text-[26rem] font-chinese font-bold text-white/[0.04] leading-none"
		aria-hidden="true"
	>
		茶
	</div>

	<div class="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
		<!-- Left Column: Brand & Pitch -->
		<div class="lg:col-span-7 text-left">
			<div class="inline-flex flex-wrap items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-medium text-cream mb-6">
				<span class="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></span>
				<span>Official Student Organization at UT Dallas · <strong>@teaclub.utd</strong></span>
			</div>

			<div class="flex items-center gap-4 mb-5">
				<img
					src="{base}/images/posters/ctc-logo.png"
					alt="CTC Seal Logo"
					class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gold/60 shadow-lg flex-shrink-0"
				/>
				<div>
					<p class="text-gold font-chinese text-sm sm:text-base tracking-widest uppercase">
						德州大学达拉斯分校 · 中国茶社
					</p>
					<h1 class="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold text-white tracking-tight leading-none mt-1">
						Chinese Tea Club
					</h1>
				</div>
			</div>

			<p class="text-lg sm:text-xl text-stone-100 font-serif italic mb-4">
				“{clubInfo.bio}”
			</p>

			<p class="text-base sm:text-lg text-stone-200/95 leading-relaxed mb-8 max-w-2xl">
				{clubInfo.purpose}
			</p>

			<!-- Quick Meeting Pill Box -->
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-2xl">
				<div class="rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 p-3.5">
					<p class="text-[11px] uppercase tracking-wider text-gold font-semibold">When We Meet</p>
					<p class="text-sm sm:text-base font-bold text-white mt-0.5">Wednesdays · 1–3 PM</p>
					<p class="text-xs text-stone-300">Weekly Campus Sessions</p>
				</div>
				<div class="rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 p-3.5">
					<p class="text-[11px] uppercase tracking-wider text-gold font-semibold">Where to Find Us</p>
					<p class="text-sm sm:text-base font-bold text-white mt-0.5">SU Green & Atrium</p>
					<p class="text-xs text-stone-300">Student Union · UT Dallas</p>
				</div>
				<div class="rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 p-3.5">
					<p class="text-[11px] uppercase tracking-wider text-gold font-semibold">Annual Membership</p>
					<p class="text-sm sm:text-base font-bold text-white mt-0.5">$10 / Academic Year</p>
					<p class="text-xs text-stone-300">Students, Faculty & Staff</p>
				</div>
			</div>

			<!-- Hero CTA Buttons -->
			<div class="flex flex-wrap items-center gap-3.5">
				<a
					href={clubInfo.links.discord}
					target="_blank"
					rel="noreferrer"
					class="btn-seal text-sm sm:text-base px-6 py-3.5"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.975 14.975 0 0 0 1.293-2.1.074.074 0 0 0-.041-.104 13.091 13.091 0 0 1-1.86-.885.075.075 0 0 1-.008-.125c.125-.093.25-.19.37-.287a.075.075 0 0 1 .078-.01c3.9 1.783 8.12 1.783 12.002 0a.075.075 0 0 1 .079.009c.12.098.245.195.369.288a.075.075 0 0 1-.006.125c-.594.344-1.218.643-1.861.885a.075.075 0 0 0-.041.104c.36.687.776 1.343 1.293 2.1a.075.075 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-3.03.076.076 0 0 0 .032-.056c.5-4.506-.838-8.962-3.554-12.66a.061.061 0 0 0-.031-.03z"
						/>
					</svg>
					<span>Join Our Discord</span>
				</a>
				<a
					href="{base}/events"
					class="inline-flex items-center justify-center gap-2 rounded-xl bg-cream text-ink hover:bg-gold hover:text-ink font-semibold text-sm sm:text-base px-6 py-3.5 transition shadow-md"
				>
					<span>Explore Events & Flyers</span>
					<span aria-hidden="true">→</span>
				</a>
				<a
					href={clubInfo.links.linktree}
					target="_blank"
					rel="noreferrer"
					class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-5 py-3.5 transition"
				>
					<span>linktr.ee/ctcutd</span>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
				</a>
			</div>
		</div>

		<!-- Right Column: Interactive 2x2 Poster Showcase from @teaclub.utd -->
		<div class="lg:col-span-5">
			<div class="relative mx-auto max-w-md">
				<div class="grid grid-cols-2 gap-3.5 p-3.5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
					{#each events.slice(0, 4) as item}
						<button
							type="button"
							onclick={() => (activePosterEvent = item)}
							class="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-ink/60 border border-white/15 shadow-md text-left cursor-pointer"
						>
							<img
								src="{base}{item.image}"
								alt={item.title}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
								<span class="text-[10px] uppercase tracking-wider font-semibold text-gold">
									{item.category}
								</span>
								<p class="text-xs font-serif font-bold text-white leading-tight line-clamp-2 mt-0.5">
									{item.title}
								</p>
							</div>
						</button>
					{/each}
				</div>
				<p class="text-center text-xs text-stone-300 mt-3">
					Click any flyer above to inspect details · <a href="{base}/events" class="text-gold underline">View all 12 club posters →</a>
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Weekly Rhythm: How Our Wednesdays Work -->
<section class="py-16 md:py-24 bg-paper-pattern border-b border-stone-200/80">
	<div class="container">
		<div class="max-w-3xl mx-auto text-center mb-14">
			<span class="card-label mb-3">A “Third Place” Apart From Home & School</span>
			<h2 class="section-heading text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink">
				How Our Weekly Tea Gatherings Work
			</h2>
			<p class="text-base sm:text-lg text-stone-600 mt-4">
				Every Wednesday from <strong>1:00 PM to 3:00 PM</strong> (usually on the <strong>SU Green</strong> or <strong>Student Union 2nd Floor Atrium</strong>), we set up our tea tables, kettles, and gaiwans for two back-to-back hours of tea and community.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Hour 1: Quiet Tea & Gongfu Cha -->
			<div class="feature-card border-t-4 border-t-seal-red relative overflow-hidden">
				<div class="flex items-center justify-between mb-4">
					<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-seal-red text-white">
						1:00 PM – 2:00 PM
					</span>
					<span class="text-2xl font-chinese font-bold text-seal-red/25">功夫茶</span>
				</div>
				<h3 class="text-2xl font-serif font-bold text-ink mb-3">
					Quiet Tea Session & Gongfu Ceremony
				</h3>
				<p class="text-sm sm:text-base text-stone-600 leading-relaxed mb-4">
					Our first hour is a calm, mindful session dedicated to <strong>Gongfu Cha (功夫茶)</strong>, the traditional Chinese tea ceremony. Learn how water temperature, porcelain gaiwans, and short consecutive steeps unlock evolving layers of aroma.
				</p>
				<ul class="space-y-1.5 text-xs sm:text-sm text-stone-700 font-medium">
					<li>• Guided by our club Tea Guru & Vice President</li>
					<li>• Taste rotating oolongs, Pu’er, white, green & red teas</li>
					<li>• Try pouring with authentic teaware yourself</li>
				</ul>
			</div>

			<!-- Hour 2: Social Hour & Sip-and-Study -->
			<div class="feature-card border-t-4 border-t-tea-green relative overflow-hidden">
				<div class="flex items-center justify-between mb-4">
					<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-tea-green text-white">
						2:00 PM – 3:00 PM
					</span>
					<span class="text-2xl font-chinese font-bold text-tea-green/25">茶叙</span>
				</div>
				<h3 class="text-2xl font-serif font-bold text-ink mb-3">
					Social Hour, Games & Sip-and-Study
				</h3>
				<p class="text-sm sm:text-base text-stone-600 leading-relaxed mb-4">
					From 2:00 to 3:00 PM, we open up into a relaxed social hour! Hang out with friends on the grass, keep steeping tea, play board games or mahjong, or bring your laptop and notes to study with warm tea in hand.
				</p>
				<ul class="space-y-1.5 text-xs sm:text-sm text-stone-700 font-medium">
					<li>• Casual come-and-go between your Wednesday classes</li>
					<li>• Board games, card games, and Mahjong collabs</li>
					<li>• Welcoming, budget-friendly “third place” on campus</li>
				</ul>
			</div>

			<!-- Membership & Cultural Festivals -->
			<div class="feature-card border-t-4 border-t-gold relative overflow-hidden">
				<div class="flex items-center justify-between mb-4">
					<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-ink text-gold">
						$10 / Academic Year
					</span>
					<span class="text-2xl font-chinese font-bold text-gold/30">会员</span>
				</div>
				<h3 class="text-2xl font-serif font-bold text-ink mb-3">
					Membership, Collabs & Festivals
				</h3>
				<p class="text-sm sm:text-base text-stone-600 leading-relaxed mb-4">
					Official voting membership is just <strong>$10 per academic year</strong> and is open to all UT Dallas students, faculty, and staff. Beyond Wednesdays, we host Matcha Meetups, Feng Cha fundraisers, and Mid-Autumn celebrations!
				</p>
				<ul class="space-y-1.5 text-xs sm:text-sm text-stone-700 font-medium">
					<li>• Advised by <strong>Professor Chen</strong></li>
					<li>• Supported by the <strong>UTD Center for Asian Studies</strong></li>
					<li>• Annual Fall officer elections & leadership opportunities</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Interactive Tea & Gongfu Cha Guide -->
<section class="py-16 md:py-24 bg-dark-cream/70 border-b border-stone-200/80">
	<div class="container">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<span class="card-label mb-3">Interactive Tea Guide · 六大茶类</span>
			<h2 class="section-heading text-3xl sm:text-4xl font-serif font-bold text-ink">
				Explore the Teas We Brew
			</h2>
			<p class="text-stone-600 mt-4">
				From fragrant high-mountain Oolongs and aged Yunnan Pu’er cakes to freshly whisked ceremonial Matcha, click any tea family below to see how we prepare it at CTC.
			</p>
		</div>

		<!-- Tea Category Selector Pills -->
		<div class="flex flex-wrap justify-center gap-2.5 mb-10">
			{#each clubInfo.teaVarieties as tea, idx}
				<button
					type="button"
					onclick={() => (selectedTeaIndex = idx)}
					class={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
						selectedTeaIndex === idx
							? 'bg-seal-red text-white shadow-md scale-[1.02]'
							: 'bg-white text-stone-700 hover:bg-seal-red/10 border border-stone-200'
					}`}
				>
					<span>{tea.name}</span>
					<span class="text-xs opacity-80 font-chinese">({tea.chinese.split(' · ')[0]})</span>
				</button>
			{/each}
		</div>

		<!-- Active Tea Showcase Card -->
		<div class="max-w-4xl mx-auto rounded-3xl bg-white border border-seal-red/15 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
			<div
				class="md:col-span-5 p-8 text-white flex flex-col justify-between relative overflow-hidden"
				style={`background: linear-gradient(135deg, ${selectedTea.color}, #1E1B18);`}
			>
				<div class="pointer-events-none select-none absolute -right-4 -bottom-8 text-9xl font-chinese font-bold text-white/10">
					{selectedTea.chinese.slice(0, 2)}
				</div>
				<div>
					<span class="inline-block text-xs uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full mb-3">
						CTC Tea Sommelier Notes
					</span>
					<h3 class="text-3xl font-serif font-bold text-white">{selectedTea.name}</h3>
					<p class="text-lg font-chinese text-gold mt-1">{selectedTea.chinese}</p>
				</div>

				<div class="mt-8 space-y-3 border-t border-white/20 pt-5 text-sm">
					<div>
						<span class="text-stone-300 text-xs uppercase tracking-wider block">Famous Regions & Cultivars</span>
						<span class="font-semibold text-white">{selectedTea.origin}</span>
					</div>
					<div class="grid grid-cols-2 gap-3 pt-1">
						<div class="bg-black/25 rounded-xl p-3">
							<span class="text-[11px] uppercase tracking-wider text-gold block">Water Temp</span>
							<span class="text-base font-bold text-white">{selectedTea.temp}</span>
						</div>
						<div class="bg-black/25 rounded-xl p-3">
							<span class="text-[11px] uppercase tracking-wider text-gold block">Gongfu Steep</span>
							<span class="text-base font-bold text-white">{selectedTea.steepTime}</span>
						</div>
					</div>
				</div>
			</div>

			<div class="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
				<h4 class="text-xs font-bold uppercase tracking-widest text-seal-red mb-2">
					Tasting Profile & Aroma
				</h4>
				<p class="text-xl font-serif font-bold text-ink mb-4">
					“{selectedTea.character}”
				</p>
				<p class="text-stone-600 leading-relaxed mb-6">
					{selectedTea.description}
				</p>
				<div class="rounded-2xl bg-cream p-4 border border-stone-200 flex items-center justify-between gap-4">
					<div>
						<p class="text-xs font-bold uppercase tracking-wider text-tea-green">Try It Live With Us</p>
						<p class="text-xs sm:text-sm text-stone-700 mt-0.5">
							Have a specific tea request for next Wednesday? Let our Tea Guru know in Discord!
						</p>
					</div>
					<a
						href={clubInfo.links.discord}
						target="_blank"
						rel="noreferrer"
						class="btn-tea text-xs py-2 px-4 flex-shrink-0"
					>
						Request Tea
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Events & Flyer Gallery -->
<section class="container py-16 md:py-24">
	<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
		<div>
			<span class="card-label mb-3">From @teaclub.utd · Flyers & Gatherings</span>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink">
				Featured Events & Club Highlights
			</h2>
		</div>
		<div class="flex flex-wrap gap-3">
			<a href="{base}/events" class="btn-seal text-sm py-2.5 px-5">
				Browse All 12 Events & Posters
			</a>
			<a href="{base}/calendar" class="btn-tea text-sm py-2.5 px-5">
				Calendar View
			</a>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
		{#each featuredEvents as event (event.id)}
			<EventCard {event} onPreviewPoster={(ev) => (activePosterEvent = ev)} />
		{/each}
	</div>

	<!-- Full 12-Poster Visual Strip (Instagram Feed Showcase) -->
	<div class="rounded-3xl bg-dark-cream/80 border border-seal-red/15 p-6 sm:p-8">
		<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
			<div class="flex items-center gap-3">
				<img src="{base}/images/posters/ctc-logo.png" alt="CTC Logo" class="w-10 h-10 rounded-full" />
				<div>
					<h3 class="text-xl font-serif font-bold text-ink">
						@teaclub.utd Poster Archive
					</h3>
					<p class="text-xs text-stone-600">
						Designed by our Media Design Director · Click any flyer to view full event details
					</p>
				</div>
			</div>
			<a
				href={clubInfo.links.instagram}
				target="_blank"
				rel="noreferrer"
				class="text-xs sm:text-sm font-semibold text-seal-red hover:underline"
			>
				Follow @teaclub.utd on Instagram →
			</a>
		</div>

		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
			{#each events as item (item.id)}
				<button
					type="button"
					onclick={() => (activePosterEvent = item)}
					class="group relative aspect-[4/5] rounded-xl overflow-hidden bg-ink border border-stone-300 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
				>
					<img
						src="{base}{item.image}"
						alt={item.title}
						class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex flex-col justify-end text-left">
						<span class="text-[10px] font-bold text-gold uppercase">{item.category}</span>
						<span class="text-xs font-serif font-bold text-white leading-tight line-clamp-2">
							{item.title}
						</span>
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- Official Linktree & Community Hub Section -->
<section class="bg-gradient-to-br from-seal-red-dark via-seal-red to-[#2B1212] text-cream py-16 md:py-24">
	<div class="container">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<div class="inline-flex items-center justify-center mb-4">
				<CtcSeal size="lg" variant="cream" />
			</div>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
				Connect With CTC · Linktree Hub
			</h2>
			<p class="text-base sm:text-lg text-stone-200">
				Whether you’re a seasoned Gongfu tea enthusiast or just looking for a cozy spot between Wednesday classes, join our online community for meeting reminders, room changes, and event sign-ups!
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
			{#each clubInfo.quickLinks as item}
				<a
					href={item.href}
					target={item.href.startsWith('http') ? '_blank' : undefined}
					rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
					class="group rounded-2xl bg-white/95 hover:bg-white text-ink p-5 shadow-lg hover:shadow-xl transition-all flex items-center justify-between gap-4 border border-white/20 hover:-translate-y-0.5"
				>
					<div>
						<span class="inline-block text-[11px] font-bold uppercase tracking-wider text-seal-red bg-seal-red/10 px-2.5 py-0.5 rounded-full mb-1.5">
							{item.badge}
						</span>
						<h3 class="text-lg font-serif font-bold text-ink group-hover:text-seal-red transition-colors">
							{item.title}
						</h3>
						<p class="text-xs sm:text-sm text-stone-600 mt-0.5">
							{item.subtitle}
						</p>
					</div>
					<span class="w-10 h-10 rounded-full bg-cream group-hover:bg-seal-red group-hover:text-white text-seal-red flex items-center justify-center flex-shrink-0 transition font-bold">
						→
					</span>
				</a>
			{/each}
		</div>

		<div class="text-center">
			<a
				href="{base}/about"
				class="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white underline underline-offset-4 transition"
			>
				<span>Learn about our $10/yr membership, officer board roles, and official club constitution →</span>
			</a>
		</div>
	</div>
</section>

<PosterModal event={activePosterEvent} onClose={() => (activePosterEvent = null)} />
