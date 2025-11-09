<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { m } from '$lib/paraglide/messages.js';
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
	<title>{m['blog.title']()} - AIS ČR</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-1" style="margin-top: 120px; padding-top: 60px; padding-bottom: 80px;">
		<div class="max-w-content px-4 sm:px-6 lg:px-8">
			<h1 style="font-family: 'Roboto Slab', serif; font-size: 48px; font-weight: 700; color: var(--color-primary); margin-bottom: 48px;">
				{m['blog.title']()}
			</h1>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each data.posts as post}
					<article class="bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col" style="padding: 24px;">
						<!-- Image -->
						{#if post.image}
							<div class="overflow-hidden" style="height: 200px; width: 100%; margin-bottom: 16px;">
								<img src={post.image} alt={post.title} class="w-full h-full object-cover" />
							</div>
						{/if}

						<!-- Category badge -->
						{#if post.category}
							<div class="mb-3">
								<span class="bg-primary text-white text-xs px-3 py-1" style="font-family: 'Roboto', sans-serif;">
									{post.category}
								</span>
							</div>
						{/if}

						<!-- Title -->
						<h2 style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; margin-bottom: 12px;">
							<a href="/blog/{post.slug}" class="hover:text-primary transition-colors">
								{post.title}
							</a>
						</h2>

						<!-- Excerpt -->
						<p style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #666; line-height: 1.6; margin-bottom: 16px; flex: 1;">
							{post.excerpt}
						</p>

						<!-- Meta -->
						<div class="text-sm text-gray-500" style="font-family: 'Roboto', sans-serif;">
							<time datetime={post.date}>{formatDate(post.date)}</time>
							<span> • </span>
							<span>{post.readingTime}</span>
						</div>
					</article>
				{/each}
			</div>

			{#if data.posts.length === 0}
				<div class="text-center py-12">
					<p class="text-gray-500 text-lg">Zatím žádné články</p>
				</div>
			{/if}
		</div>
	</main>

	<Footer />
</div>

