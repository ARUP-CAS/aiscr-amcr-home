<script lang="ts">
	// Footer komponenta
	import { MapPin, User, Globe, Mail, Facebook, Linkedin, Youtube, Github, CircleUser, Compass, MailOpen } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<footer id="kontakty" class="footer-section py-16 border-t border-black" style="font-family: 'Roboto', sans-serif; background-color: #e5e7eb;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Main content -->
		<div class="mb-12">
			<div class="flex flex-wrap gap-12">
				
				<!-- Navigation links -->
				<div>
					<h2 class="text-2xl font-bold text-black mb-8" style="font-family: 'Roboto', sans-serif;">
						{m['footer.navigationTitle']()}
					</h2>
					
					<div class="space-y-3">
						<div>
							<a href="/" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								{m['footer.nav.home']()}
							</a>
						</div>
						<div>
							<a href="/#aplikace" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								{m['footer.nav.services']()}
							</a>
						</div>
						<div>
							<a href="/blog" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								{m['footer.nav.blog']()}
							</a>
						</div>
						<div>
							<a href="/#faq" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								{m['footer.nav.faq']()}
							</a>
						</div>
						<div>
							<a href="/#terms" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								{m['footer.nav.terms']()}
							</a>
						</div>
						<div>
							<a href="/#about" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								{m['footer.nav.about']()}
							</a>
						</div>
					</div>
				</div>
				
				<!-- Contact section -->
				<div>
					<h2 class="text-2xl font-bold text-black mb-8" style="font-family: 'Roboto', sans-serif;">
						{m['footer.title']()}
					</h2>
					
					<div class="flex flex-wrap gap-12">
				<!-- Brno office (první podle dokumentu) -->
				<div>
					<h3 class="text-black mb-4" style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 700;">
						{m['footer.brnoOffice']()}
					</h3>
					<p class="text-sm text-black mb-3" style="font-family: 'Roboto', sans-serif;">
						{m['footer.brnoOfficeName']()}
					</p>
					
					<div class="space-y-3">
						<div class="flex items-start space-x-3">
							<MapPin size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-black" style="font-family: 'Roboto', sans-serif;">
									{@html m['footer.brnoAddress']()}
								</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<Compass size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<a href={m['footer.brnoWeb']()} target="_blank" rel="noopener noreferrer" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								{m['footer.brnoWeb']()}
							</a>
						</div>

						<div class="flex items-start space-x-3">
							<MailOpen size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<a href="mailto:{m['footer.brnoEmail']()}" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								{m['footer.brnoEmail']()}
							</a>
						</div>
					</div>
				</div>

				<!-- Prague office (druhý) -->
				<div>
					<h3 class="text-black mb-4" style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 700;">
						{m['footer.pragueOffice']()}
					</h3>
					<p class="text-sm text-black mb-3" style="font-family: 'Roboto', sans-serif;">
						{m['footer.pragueOfficeName']()}
					</p>
					
					<div class="space-y-3">
						<div class="flex items-start space-x-3">
							<MapPin size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<div>
								<p class="text-sm text-black" style="font-family: 'Roboto', sans-serif;">
									{@html m['footer.pragueAddress']()}
								</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<Compass size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<a href={m['footer.pragueWeb']()} target="_blank" rel="noopener noreferrer" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								{m['footer.pragueWeb']()}
							</a>
						</div>

						<div class="flex items-start space-x-3">
							<MailOpen size="24" color="#000000" class="mt-1 flex-shrink-0" />
							<a href="mailto:{m['footer.pragueEmail']()}" class="text-sm text-black hover:text-gray-700 underline" style="font-family: 'Roboto', sans-serif;">
								{m['footer.pragueEmail']()}
							</a>
						</div>
					</div>
				</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Partner logos -->
		<div class="mb-12">
			<div class="flex flex-wrap gap-8 items-center">
				<img src="/images/logos/ais-cr-black.png" alt="Archeologický informační systém" style="max-height: 48px; width: auto;" />
				<img src="/images/logos/logo-arub.png" alt="ARUB" style="max-height: 48px; width: auto;" />
				<img src="/images/logos/logo-aru.png" alt="Archeologický ústav AV ČR Praha" style="max-height: 48px; width: auto;" />
				<img src="/images/logos/akademie-ved-black.png" alt="Akademie věd České republiky" style="max-height: 48px; width: auto;" />
				<img src="/images/logos/infra-black.png" alt="Velké výzkumné infrastruktury" style="max-height: 48px; width: auto;" />
			</div>
		</div>

		<!-- Bottom section -->
		<div class="border-t border-gray-400 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
				
				<!-- Copyright and links -->
				<div class="flex flex-wrap items-center gap-6 text-sm text-black" style="font-family: 'Roboto', sans-serif;">
					<span>{@html m['footer.copyright']()}</span>
					<a href="https://amcr-help.aiscr.cz/zakladni-info/osobni-udaje.html" class="hover:text-gray-700 underline" target="_blank" rel="noopener noreferrer">{m['footer.privacyPolicy']()}</a>
					<a href="https://www.aiscr.cz/podminky-uziti" class="hover:text-gray-700 underline" target="_blank" rel="noopener noreferrer">{m['footer.termsOfUse']()}</a>
					<a href="https://www.aiscr.cz/cookies" class="hover:text-gray-700 underline" target="_blank" rel="noopener noreferrer">{m['footer.cookiePolicy']()}</a>
					<span>{m['footer.designBy']()}</span>
				</div>

				<!-- Social icons -->
				<div class="flex items-center space-x-4">
					<a href="https://www.facebook.com/ArcheologickyInformacniSystem" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors" aria-label={m['aria.facebook']()}>
						<Facebook size="20" />
					</a>
					<a href="https://cz.linkedin.com/company/ais-cr" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors" aria-label={m['aria.linkedin']()}>
						<Linkedin size="20" />
					</a>
					<a href="https://www.youtube.com/@aiscr253" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors" aria-label={m['aria.youtube']()}>
						<Youtube size="20" />
					</a>
					<a href="https://bsky.app/profile/aiscr.bsky.social" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors" aria-label={m['aria.bluesky']()}>
						<svg width="20" height="20" viewBox="0 0 600 530" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/>
						</svg>
					</a>
					<a href="https://github.com/ARUP-CAS" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors" aria-label={m['aria.github']()}>
						<Github size="20" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer-section {
		position: relative;
	}
	
	.footer-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('/images/bg-footer.png');
		background-size: 1312px;
		background-position: center top;
		background-repeat: no-repeat;
		opacity: 0.5;
		pointer-events: none;
		z-index: 0;
	}
	
	.footer-section > div {
		position: relative;
		z-index: 1;
	}
</style>
