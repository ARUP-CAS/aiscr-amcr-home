<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { getLocale } from '$lib/paraglide/runtime';

	let { data }: { data: PageData } = $props();

	function formatDate(dateString: string) {
		const locale = getLocale();
		const date = new Date(dateString);
		return date.toLocaleDateString(locale === 'cs' ? 'cs-CZ' : 'en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{data.post.title} - AIS ČR</title>
	{#if data.post.excerpt}
		<meta name="description" content={data.post.excerpt} />
	{/if}
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-1" style="margin-top: 120px;">
		<!-- Header -->
		<div class="bg-gray-50 py-16">
			<div class="max-w-content px-4 sm:px-6 lg:px-8">
				<!-- Zpět na blog -->
				<a
					href="/blog"
					class="inline-flex items-center text-primary hover:underline mb-6"
					style="font-family: 'Roboto', sans-serif; font-size: 16px;"
				>
					<svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Zpět na blog
				</a>

				<!-- Kategorie a čas čtení -->
				<div class="flex items-center gap-4 mb-6">
					{#if data.post.category}
						<span
							class="bg-primary text-white px-4 py-2"
							style="font-family: 'Roboto', sans-serif; font-size: 14px;"
						>
							{data.post.category}
						</span>
					{/if}
					<span class="text-gray-600" style="font-family: 'Roboto', sans-serif;">
						Čas čtení: {data.post.readingTime}
					</span>
				</div>

				<!-- Nadpis -->
				<h1
					style="font-family: 'Roboto Slab', serif; font-size: 48px; font-weight: 700; color: var(--color-primary); margin-bottom: 24px; line-height: 1.2;"
				>
					{data.post.title}
				</h1>

				<!-- Datum -->
				<time
					datetime={data.post.date}
					class="text-gray-600"
					style="font-family: 'Roboto', sans-serif;"
				>
					Publikováno {formatDate(data.post.date)}
				</time>
			</div>
		</div>

		<!-- Obsah článku -->
		<div class="bg-white py-16">
			<div class="max-w-content px-4 sm:px-6 lg:px-8">
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
					<!-- Sidebar - Autor -->
					<div class="lg:col-span-1">
						<div class="bg-gray-50 rounded-lg p-6">
							<h3 class="font-bold mb-4" style="font-family: 'Roboto', sans-serif;">Autor</h3>
							<div class="flex items-start gap-4">
								{#if data.post.authorImage}
									<img
										src={data.post.authorImage}
										alt={data.post.author}
										class="w-16 h-16 rounded-full object-cover"
									/>
								{/if}
								<div>
									<div class="font-semibold" style="font-family: 'Roboto', sans-serif;">
										{data.post.author}
									</div>
									<div class="text-sm text-gray-600" style="font-family: 'Roboto', sans-serif;">
										{data.post.authorRole}
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Hlavní obsah -->
					<div class="lg:col-span-2">
						<!-- Obrázek -->
						{#if data.post.image}
							<img
								src={data.post.image}
								alt={data.post.title}
								class="w-full h-auto rounded-lg mb-8"
							/>
						{/if}

						<!-- MARKDOWN OBSAH -->
						<article class="prose prose-lg max-w-none">
							{@render data.post.content()}
						</article>
					</div>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>

