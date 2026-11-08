<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CtcSeal from '$lib/components/CtcSeal.svelte';
	import { clubInfo } from '$lib/data/clubInfo';

	let selectedArticleIndex = $state<number | 'all'>('all');
	let constitutionSearch = $state('');

	const filteredArticles = $derived(
		clubInfo.constitution.articles.filter((art, idx) => {
			if (selectedArticleIndex !== 'all' && selectedArticleIndex !== idx) return false;
			if (!constitutionSearch.trim()) return true;
			const q = constitutionSearch.toLowerCase();
			return (
				art.number.toLowerCase().includes(q) ||
				art.title.toLowerCase().includes(q) ||
				art.sections.some(
					(s) => s.heading.toLowerCase().includes(q) || s.body.toLowerCase().includes(q)
				)
			);
		})
	);
</script>

<svelte:head>
	<title>About, Officers & Constitution | Chinese Tea Club at UT Dallas</title>
	<meta
		name="description"
		content="Learn about the Chinese Tea Club at UT Dallas: our third-place mission, $10/yr membership, officer board roles, advisor Professor Chen, and official Constitution."
	/>
</svelte:head>

<Hero
	title="About Chinese Tea Club"
	subtitle="Our mission as a welcoming campus 'third place', officer roles, membership guide, and official club constitution."
	badge="Est. at The University of Texas at Dallas · @teaclub.utd"
	chineseWatermark="道"
	cta={{ text: 'Join Our Discord', href: clubInfo.links.discord }}
	secondaryCta={{ text: 'Read Club Constitution', href: '#constitution' }}
/>

<!-- Quick Section Jump Bar -->
<div class="bg-dark-cream border-b border-seal-red/15 py-3">
	<div class="container flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-stone-700">
		<a href="#mission" class="hover:text-seal-red transition">Our Mission</a>
		<span class="text-stone-300">•</span>
		<a href="#membership" class="hover:text-seal-red transition">Membership ($10/yr)</a>
		<span class="text-stone-300">•</span>
		<a href="#officers" class="hover:text-seal-red transition">Officer Roles & Elections</a>
		<span class="text-stone-300">•</span>
		<a href="#advisor" class="hover:text-seal-red transition">Advisor & Partnerships</a>
		<span class="text-stone-300">•</span>
		<a href="#constitution" class="hover:text-seal-red transition">Official Constitution</a>
	</div>
</div>

<!-- Mission & Statement of Purpose + Membership Section -->
<section id="mission" class="container py-16 md:py-24">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
		<!-- Left: Statement of Purpose -->
		<div class="lg:col-span-7">
			<span class="card-label mb-3">Article II · Statement of Purpose</span>
			<h2 class="text-3xl sm:text-4xl font-serif font-bold text-ink mb-5">
				A Welcoming “Third Place” Apart From Home & School
			</h2>
			<blockquote class="border-l-4 border-seal-red pl-5 py-2 my-6 bg-dark-cream/60 rounded-r-2xl pr-5">
				<p class="text-lg sm:text-xl font-serif italic text-ink">
					“{clubInfo.purpose}”
				</p>
				<footer class="text-xs font-semibold uppercase tracking-wider text-seal-red mt-2">
					— Chinese Tea Club Constitution, Article II
				</footer>
			</blockquote>

			<p class="text-stone-700 leading-relaxed mb-6">
				Between lectures, labs, and exams at UT Dallas, students deserve a calm, restorative space where they can slow down over a warm cup of tea. Every Wednesday afternoon on the <strong>SU Green</strong> (and indoors at the <strong>Student Union 2nd Floor Atrium</strong>), we gather to brew authentic loose-leaf teas, practice traditional <strong>Gongfu Cha (功夫茶)</strong>, and celebrate cultural traditions together.
			</p>

			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div class="rounded-2xl bg-white p-5 border border-stone-200 shadow-xs">
					<h3 class="text-lg font-serif font-bold text-seal-red mb-1.5">1:00–2:00 PM · Quiet Session</h3>
					<p class="text-sm text-stone-600">
						Mindful Gongfu tea ceremony, guided tastings, and learning tea history, etymology, and brewing craft.
					</p>
				</div>
				<div class="rounded-2xl bg-white p-5 border border-stone-200 shadow-xs">
					<h3 class="text-lg font-serif font-bold text-tea-green mb-1.5">2:00–3:00 PM · Social Hour</h3>
					<p class="text-sm text-stone-600">
						Casual hangout with friends—keep steeping tea, play board games or mahjong, or study at your own pace.
					</p>
				</div>
			</div>
		</div>

		<!-- Right: Membership Card (Article III) -->
		<div id="membership" class="lg:col-span-5">
			<div class="rounded-3xl bg-white border-2 border-seal-red/25 shadow-xl p-7 sm:p-8 relative overflow-hidden">
				<div class="flex items-center justify-between gap-4 mb-5">
					<div>
						<span class="text-xs font-bold uppercase tracking-widest text-seal-red block">
							Article III · Official Membership
						</span>
						<h3 class="text-2xl sm:text-3xl font-serif font-bold text-ink mt-1">
							Become a CTC Member
						</h3>
					</div>
					<CtcSeal size="md" variant="red" />
				</div>

				<div class="rounded-2xl bg-cream border border-seal-red/20 p-4 mb-6 flex items-baseline justify-between">
					<div>
						<span class="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
							Annual Membership Dues
						</span>
						<span class="text-sm text-stone-700 font-medium">Full Academic Year Voting Member</span>
					</div>
					<div class="text-right">
						<span class="text-3xl font-serif font-bold text-seal-red">$10</span>
						<span class="text-xs text-stone-500 block">per year</span>
					</div>
				</div>

				<p class="text-xs sm:text-sm text-stone-600 mb-4">
					<strong>Eligibility (Article III, Section 1):</strong> {clubInfo.membership.eligibility}
				</p>

				<h4 class="text-xs font-bold uppercase tracking-wider text-tea-green mb-3">
					What Your $10 Annual Dues Support & Unlock:
				</h4>
				<ul class="space-y-2.5 text-sm text-stone-700 mb-7">
					{#each clubInfo.membership.perks as perk}
						<li class="flex items-start gap-2.5">
							<span class="text-seal-red font-bold mt-0.5">✓</span>
							<span>{perk}</span>
						</li>
					{/each}
				</ul>

				<div class="flex flex-col sm:flex-row gap-3">
					<a
						href={clubInfo.links.discord}
						target="_blank"
						rel="noreferrer"
						class="btn-seal text-sm py-3 px-5 flex-1 text-center"
					>
						Join via Discord
					</a>
					<a
						href={clubInfo.links.linktree}
						target="_blank"
						rel="noreferrer"
						class="btn-tea text-sm py-3 px-5 flex-1 text-center"
					>
						Linktree Forms
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Officer Roles & Duties (Article IV & V) -->
<section id="officers" class="py-16 md:py-24 bg-dark-cream/80 border-y border-stone-200">
	<div class="container">
		<div class="max-w-3xl mx-auto text-center mb-14">
			<span class="card-label mb-3">Article IV & Article V · Leadership</span>
			<h2 class="section-heading text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink">
				Officer Board Roles & Duties
			</h2>
			<p class="text-stone-600 mt-4">
				Our six-member officer board works together to steward the club’s tea collection, guide traditional ceremonies, design original event posters, and build community across UT Dallas.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
			{#each clubInfo.officers as officer}
				<div class="card-surface p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-seal-red bg-white">
					<div>
						<div class="flex items-center justify-between gap-2 mb-3">
							<span class="text-xs font-bold uppercase tracking-widest text-seal-red bg-seal-red/10 px-3 py-1 rounded-full">
								Officer Role
							</span>
							<span class="text-lg font-chinese font-bold text-tea-green">{officer.chineseTitle}</span>
						</div>
						<h3 class="text-2xl font-serif font-bold text-ink mb-1.5">{officer.role}</h3>
						<p class="text-xs sm:text-sm font-medium text-tea-green mb-4">{officer.summary}</p>

						<ul class="space-y-2 text-xs sm:text-sm text-stone-600">
							{#each officer.duties as duty}
								<li class="flex items-start gap-2">
									<span class="text-seal-red font-bold">•</span>
									<span>{duty}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>

		<!-- Elections Summary Banner (Article V) -->
		<div class="rounded-3xl bg-white border border-tea-green/25 p-6 sm:p-8 shadow-sm max-w-4xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
				<div class="md:col-span-2">
					<span class="text-xs font-bold uppercase tracking-widest text-tea-green">
						Article V · Democratic Governance
					</span>
					<h3 class="text-2xl font-serif font-bold text-ink mt-1 mb-2">
						Annual Fall Officer Elections
					</h3>
					<p class="text-sm text-stone-600 leading-relaxed">
						Officer elections are held once a year at the <strong>end of the Fall semester</strong>. Any active $10/yr member may apply to run, and each active member or outgoing officer casts one vote per position (elected by plurality vote). Mid-term vacancies may be filled by a 2/3 board appointment.
					</p>
				</div>
				<div class="flex flex-col gap-2.5">
					<a
						href={clubInfo.links.linktree}
						target="_blank"
						rel="noreferrer"
						class="btn-tea text-xs sm:text-sm py-3 px-5 text-center"
					>
						Check Linktree for Applications
					</a>
					<a
						href="#constitution"
						class="text-xs text-center font-semibold text-seal-red hover:underline"
					>
						Read Full Election Rules ↓
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Faculty Advisor & Partnerships (Article IX) -->
<section id="advisor" class="container py-16 md:py-24">
	<div class="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#23392A] to-[#18281D] text-cream p-8 sm:p-12 shadow-xl relative overflow-hidden">
		<div
			class="pointer-events-none select-none absolute -right-6 -bottom-10 text-[12rem] font-chinese font-bold text-white/[0.05] leading-none"
			aria-hidden="true"
		>
			師
		</div>

		<div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
			<div class="md:col-span-8">
				<span class="inline-block text-xs font-bold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full mb-3">
					Article IX · Faculty Advisor & Institutional Partner
				</span>
				<h2 class="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
					{clubInfo.advisor.name} & The UT Dallas Center for Asian Studies
				</h2>
				<p class="text-stone-200 leading-relaxed mb-5 text-sm sm:text-base">
					{clubInfo.advisor.description}
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
					<div class="bg-white/10 rounded-xl p-3.5 border border-white/15">
						<p class="font-bold text-gold">Authentic Tea & Gongfu Tools</p>
						<p class="text-stone-200 mt-0.5">
							Provides traditional teaware, loose-leaf teas, and hands-on workshop mentorship.
						</p>
					</div>
					<div class="bg-white/10 rounded-xl p-3.5 border border-white/15">
						<p class="font-bold text-gold">Community & Cultural Bridges</p>
						<p class="text-stone-200 mt-0.5">
							Connects CTC with the Center for Asian Studies, CSA, Riichi Mahjong Club, and DFW arts festivals.
						</p>
					</div>
				</div>
			</div>

			<div class="md:col-span-4 flex flex-col items-center text-center bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/15">
				<CtcSeal size="lg" variant="cream" />
				<p class="text-base font-serif font-bold text-white mt-3">{clubInfo.advisor.name}</p>
				<p class="text-xs text-gold">{clubInfo.advisor.role}</p>
				<p class="text-xs text-stone-300 mt-2">
					Unanimously selected by the Board of Officers per Article IX of the CTC Constitution.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Official Club Constitution Interactive Viewer -->
<section id="constitution" class="py-16 md:py-24 bg-paper-pattern border-t border-stone-200">
	<div class="container">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-10">
				<span class="card-label mb-3">Official Governing Document · Adopted {clubInfo.constitution.date}</span>
				<h2 class="section-heading text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink">
					Chinese Tea Club Constitution
				</h2>
				<p class="text-stone-600 mt-4">
					Browse or search all 10 Articles of the official Chinese Tea Club Constitution at The University of Texas at Dallas.
				</p>
			</div>

			<!-- Filter & Search Controls -->
			<div class="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-xs mb-8">
				<div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mb-4">
					<div class="relative flex-grow">
						<input
							type="search"
							bind:value={constitutionSearch}
							placeholder="Search constitution (e.g. 'dues', 'Tea Guru', 'elections', 'Professor Chen')..."
							class="w-full rounded-xl border border-stone-300 bg-cream/60 px-4 py-2.5 text-sm text-ink placeholder:text-stone-400 focus:border-seal-red focus:outline-none"
						/>
					</div>
					{#if selectedArticleIndex !== 'all' || constitutionSearch}
						<button
							type="button"
							onclick={() => {
								selectedArticleIndex = 'all';
								constitutionSearch = '';
							}}
							class="text-xs font-semibold text-seal-red hover:underline px-3 py-2 cursor-pointer"
						>
							Reset Filter
						</button>
					{/if}
				</div>

				<div class="flex flex-wrap gap-1.5">
					<button
						type="button"
						onclick={() => (selectedArticleIndex = 'all')}
						class={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
							selectedArticleIndex === 'all'
								? 'bg-seal-red text-white'
								: 'bg-dark-cream text-stone-700 hover:bg-seal-red/15'
						}`}
					>
						All Articles (I–X)
					</button>
					{#each clubInfo.constitution.articles as art, idx}
						<button
							type="button"
							onclick={() => (selectedArticleIndex = idx)}
							class={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
								selectedArticleIndex === idx
									? 'bg-seal-red text-white'
									: 'bg-dark-cream text-stone-700 hover:bg-seal-red/15'
							}`}
						>
							{art.number}: {art.title}
						</button>
					{/each}
				</div>
			</div>

			<!-- Constitution Articles List -->
			<div class="space-y-5">
				{#each filteredArticles as article (article.number)}
					<div class="rounded-2xl bg-white border border-stone-200/90 p-6 sm:p-8 shadow-xs">
						<div class="flex flex-wrap items-baseline justify-between gap-2 border-b border-stone-100 pb-3 mb-4">
							<h3 class="text-xl sm:text-2xl font-serif font-bold text-seal-red">
								{article.number}: {article.title}
							</h3>
							<span class="text-xs text-stone-400 font-medium">CTC Constitution · {clubInfo.constitution.date}</span>
						</div>

						<div class="space-y-4">
							{#each article.sections as sec}
								<div>
									<h4 class="text-sm font-bold text-tea-green mb-1">{sec.heading}</h4>
									<p class="text-sm sm:text-base text-stone-700 leading-relaxed">{sec.body}</p>
								</div>
							{/each}
						</div>
					</div>
				{:else}
					<div class="text-center py-12 bg-white rounded-2xl border border-stone-200">
						<p class="text-stone-600">No articles matched your search query.</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
