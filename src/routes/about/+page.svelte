<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { clubInfo } from '$lib/data/clubInfo';
</script>

<svelte:head>
	<title>About - Chinese Tea Club at UT Dallas</title>
</svelte:head>

<Hero
	title="About Chinese Tea Club"
	subtitle="Our mission, membership, officer roles, and club constitution."
/>

<section class="container py-14 md:py-16 max-w-4xl space-y-14">
	<!-- Purpose & Membership -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<h2 class="text-2xl font-serif font-bold text-ink mb-3">Our Purpose</h2>
			<p class="text-stone-700 leading-relaxed mb-4">
				{clubInfo.purpose}
			</p>
			<p class="text-sm text-stone-600">
				<strong>Weekly Meetings:</strong> Wednesdays 1:00–3:00 PM on the SU Green (or Student Union 2nd Floor Atrium).
			</p>
		</div>

		<div class="card-surface p-6">
			<h2 class="text-2xl font-serif font-bold text-ink mb-2">Membership</h2>
			<p class="text-sm text-stone-600 mb-3">
				{clubInfo.membership.eligibility}
			</p>
			<p class="text-base font-semibold text-seal-red mb-4">
				Annual Dues: {clubInfo.membership.annualDues}
			</p>
			<p class="text-xs text-stone-500">
				Advised by <strong>{clubInfo.advisor.name}</strong> and supported by the <strong>{clubInfo.advisor.partnerOrg}</strong>.
			</p>
		</div>
	</div>

	<!-- Officers -->
	<div>
		<h2 class="text-2xl font-serif font-bold text-ink mb-6">Officer Roles</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{#each clubInfo.officers as officer}
				<div class="card-surface p-5">
					<h3 class="text-lg font-serif font-bold text-seal-red">{officer.role}</h3>
					<p class="text-xs text-stone-600 mt-1">{officer.summary}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Single Clean Constitution Document -->
	<div id="constitution">
		<div class="card-surface p-6 sm:p-10">
			<div class="border-b border-stone-200 pb-4 mb-6">
				<h2 class="text-2xl sm:text-3xl font-serif font-bold text-ink">
					Chinese Tea Club Constitution
				</h2>
				<p class="text-xs text-stone-500 mt-1">Adopted {clubInfo.constitution.date}</p>
			</div>

			<div class="space-y-6 text-sm text-stone-700 leading-relaxed">
				{#each clubInfo.constitution.articles as article}
					<div>
						<h3 class="text-lg font-serif font-bold text-ink mb-1">
							{article.number}: {article.title}
						</h3>
						<div class="space-y-2">
							{#each article.sections as sec}
								<p>
									<strong class="text-stone-800">{sec.heading}:</strong>
									{sec.body}
								</p>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
