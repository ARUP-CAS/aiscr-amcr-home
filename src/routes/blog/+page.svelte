<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let { data }: { data: PageData } = $props();
	let currentLocale = $state('cs');

	onMount(() => {
		const pathWithoutBase = window.location.pathname.replace(new RegExp(`^${base}`), '');
		currentLocale = pathWithoutBase.startsWith('/en') ? 'en' : 'cs';
	});

	function getBlogUrl(slug: string): string {
		return currentLocale === 'en' ? `${base}/en/blog/${slug}` : `${base}/blog/${slug}`;
	}

	// Helper pro transformaci absolutních cest na relativní
	function resolveImagePath(path: string | undefined): string {
		if (!path) return '';
		if (path.startsWith('/')) {
			return `${base}${path}`;
		}
		return path;
	}

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString(currentLocale === 'cs' ? 'cs-CZ' : 'en-US', {
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
						{#if post.image}
							<div class="overflow-hidden" style="height: 200px; width: 100%; margin-bottom: 16px;">
								<img src={resolveImagePath(post.image)} alt={post.title} class="w-full h-full object-cover" />
							</div>
						{/if}

						{#if post.category}
							<div class="mb-3">
								<span class="bg-primary text-white text-xs px-3 py-1" style="font-family: 'Roboto', sans-serif;">
									{post.category}
								</span>
							</div>
						{/if}

						<h2 style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; margin-bottom: 12px;">
							<a href={getBlogUrl(post.slug)} class="hover:text-primary transition-colors">
								{post.title}
							</a>
						</h2>

						<p style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #666; line-height: 1.6; margin-bottom: 16px; flex: 1;">
							{post.excerpt}
						</p>

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
					<p class="text-gray-500 text-lg">{m['blog.noPosts']()}</p>
				</div>
			{/if}
		</div>
	</main>

	<Footer />
</div>
