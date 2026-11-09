<script lang="ts">
	import { base } from '$app/paths';
	import { clubInfo } from '$lib/data/clubInfo';
</script>

<footer class="bg-ink text-cream mt-20 border-t-2 border-seal-red">
	<div class="container py-12">
		<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-stone-800">
			<div class="flex items-center gap-3.5">
				<img
					src="{base}/images/posters/ctc-logo.png"
					alt="Chinese Tea Club Seal"
					class="w-11 h-11 rounded-full"
				/>
				<div>
					<h3 class="text-lg font-serif font-bold text-white">Chinese Tea Club at UT Dallas</h3>
					<p class="text-xs text-stone-400">Wednesdays 1:00–3:00 PM · SU Green</p>
				</div>
			</div>

			<div class="flex flex-wrap gap-6 text-sm text-stone-300">
				<a href={clubInfo.links.discord} target="_blank" rel="noreferrer" class="hover:text-white transition">
					Discord
				</a>
				<a href={clubInfo.links.instagram} target="_blank" rel="noreferrer" class="hover:text-white transition">
					Instagram (@teaclub.utd)
				</a>
				<a href={clubInfo.links.linktree} target="_blank" rel="noreferrer" class="hover:text-white transition">
					Linktree
				</a>
				<a href={clubInfo.links.email} class="hover:text-white transition">
					{clubInfo.links.emailAddress}
				</a>
				<a href="{base}/officers" class="text-stone-400 hover:text-white transition">
					Officer Guide
				</a>
			</div>
		</div>

		<div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
			<p>&copy; {new Date().getFullYear()} Chinese Tea Club at UT Dallas.</p>
			<p>Advised by {clubInfo.advisor.name} &middot; Supported by the UT Dallas Center for Asian Studies</p>
		</div>
	</div>
</footer>
