<script lang="ts">
	import { base } from '$app/paths';
	import { clubInfo } from '$lib/data/clubInfo';
</script>

<footer class="bg-ink text-cream mt-20 border-t-4 border-seal-red">
	<div class="container py-14">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
			<!-- Brand Column -->
			<div class="lg:col-span-1">
				<div class="flex items-center gap-3 mb-4">
					<img
						src="{base}/images/posters/ctc-logo.png"
						alt="Chinese Tea Club Seal"
						class="w-12 h-12 rounded-full border border-cream/20"
					/>
					<div>
						<h3 class="text-xl font-serif font-bold text-cream leading-tight">Chinese Tea Club</h3>
						<p class="text-xs text-stone-400 font-chinese">德州大学达拉斯分校中国茶社</p>
					</div>
				</div>
				<p class="text-sm text-stone-300 leading-relaxed mb-4">
					{clubInfo.purpose}
				</p>
				<div class="inline-flex items-center gap-2 text-xs bg-seal-red/25 border border-seal-red/40 text-cream px-3 py-1.5 rounded-full">
					<span class="w-2 h-2 rounded-full bg-gold"></span>
					<span>Wednesdays 1:00–3:00 PM · SU Green</span>
				</div>
			</div>

			<!-- Explore Column -->
			<div>
				<h4 class="text-lg font-serif font-bold text-gold mb-4">Explore CTC</h4>
				<ul class="space-y-2.5 text-sm">
					<li>
						<a href="{base}/" class="text-stone-300 hover:text-white transition">Home & Tea Guide</a>
					</li>
					<li>
						<a href="{base}/about" class="text-stone-300 hover:text-white transition">About & Mission</a>
					</li>
					<li>
						<a href="{base}/about#officers" class="text-stone-300 hover:text-white transition">Officer Board & Advisor</a>
					</li>
					<li>
						<a href="{base}/about#constitution" class="text-stone-300 hover:text-white transition">Official Club Constitution</a>
					</li>
					<li>
						<a href="{base}/events" class="text-stone-300 hover:text-white transition">Events & Poster Archive</a>
					</li>
					<li>
						<a href="{base}/calendar" class="text-stone-300 hover:text-white transition">Monthly Calendar</a>
					</li>
				</ul>
			</div>

			<!-- Weekly Schedule & Membership -->
			<div>
				<h4 class="text-lg font-serif font-bold text-gold mb-4">Meetings & Dues</h4>
				<div class="space-y-3 text-sm text-stone-300">
					<div>
						<p class="font-semibold text-white">Weekly Tea Sessions</p>
						<p class="text-xs text-stone-400">Wednesdays · 1:00 PM – 3:00 PM</p>
						<p class="text-xs text-stone-400">1–2 PM Quiet Gongfu Session · 2–3 PM Social Hour</p>
					</div>
					<div>
						<p class="font-semibold text-white">Campus Locations</p>
						<p class="text-xs text-stone-400">SU Green, 2nd Floor Atrium & ECSW Courtyard</p>
					</div>
					<div>
						<p class="font-semibold text-white">Official Membership</p>
						<p class="text-xs text-stone-400">$10 / academic year · Open to UTD students, faculty & staff</p>
					</div>
				</div>
			</div>

			<!-- Connect / Linktree Hub -->
			<div>
				<h4 class="text-lg font-serif font-bold text-gold mb-4">Connect With Us</h4>
				<ul class="space-y-2.5 text-sm mb-5">
					<li>
						<a
							href={clubInfo.links.discord}
							target="_blank"
							rel="noreferrer"
							class="text-stone-300 hover:text-white transition flex items-center gap-2"
						>
							<span class="w-2 h-2 rounded-full bg-seal-red"></span>
							<span>Discord: discord.gg/UMdGRq6DXf</span>
						</a>
					</li>
					<li>
						<a
							href={clubInfo.links.instagram}
							target="_blank"
							rel="noreferrer"
							class="text-stone-300 hover:text-white transition flex items-center gap-2"
						>
							<span class="w-2 h-2 rounded-full bg-sage"></span>
							<span>Instagram: @teaclub.utd</span>
						</a>
					</li>
					<li>
						<a
							href={clubInfo.links.linktree}
							target="_blank"
							rel="noreferrer"
							class="text-stone-300 hover:text-white transition flex items-center gap-2"
						>
							<span class="w-2 h-2 rounded-full bg-gold"></span>
							<span>Linktree: linktr.ee/ctcutd</span>
						</a>
					</li>
					<li>
						<a
							href={clubInfo.links.email}
							class="text-stone-300 hover:text-white transition flex items-center gap-2"
						>
							<span class="w-2 h-2 rounded-full bg-stone-400"></span>
							<span>Email: {clubInfo.links.emailAddress}</span>
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
			<p>
				&copy; {new Date().getFullYear()} Chinese Tea Club at The University of Texas at Dallas. All rights reserved.
			</p>
			<p>
				Advised by <strong class="text-stone-200">{clubInfo.advisor.name}</strong> &middot; Supported by the
				<a href="{base}/about#advisor" class="text-gold hover:underline">UT Dallas Center for Asian Studies</a>
			</p>
		</div>
	</div>
</footer>
