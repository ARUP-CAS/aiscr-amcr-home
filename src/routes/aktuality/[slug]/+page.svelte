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

	function getLocalePath(): string {
		return currentLocale === 'en' ? `${base}/en` : base;
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
	<title>{data.news.title} - AIS ČR</title>
	{#if data.news.excerpt}
		<meta name="description" content={data.news.excerpt} />
	{/if}
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-1" style="margin-top: 120px;">
		<!-- Header -->
		<div class="bg-gray-50 py-16">
			<div class="max-w-content px-4 sm:px-6 lg:px-8">
				<!-- Zpět na aktuality -->
				<a
					href="{getLocalePath()}/#aktuality"
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
					Zpět na aktuality
				</a>

				<!-- Badge a čas -->
				<div class="flex items-center gap-4 mb-6">
					{#if data.news.badge}
						<span
							class="bg-primary text-white px-4 py-2"
							style="font-family: 'Roboto', sans-serif; font-size: 14px;"
						>
							{data.news.badge}
						</span>
					{/if}
					{#if data.news.time}
						<span class="text-gray-600 flex items-center gap-2" style="font-family: 'Roboto', sans-serif;">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							{data.news.time}
						</span>
					{/if}
				</div>

				<!-- Nadpis -->
				<h1
					style="font-family: 'Roboto Slab', serif; font-size: 48px; font-weight: 700; color: var(--color-primary); margin-bottom: 24px; line-height: 1.2;"
				>
					{data.news.title}
				</h1>

				<!-- Datum -->
				<time
					datetime={data.news.date}
					class="text-gray-600"
					style="font-family: 'Roboto', sans-serif;"
				>
					Publikováno {formatDate(data.news.date)}
				</time>
			</div>
		</div>

		<!-- Obsah aktuality -->
		<div class="bg-white py-16">
			<div class="max-w-content px-4 sm:px-6 lg:px-8">
				{#if data.news.image}
					<img
						src={resolveImagePath(data.news.image)}
						alt={data.news.title}
						class="w-full h-auto rounded-lg mb-8"
						style="max-height: 500px; object-fit: cover;"
					/>
				{/if}

				<!-- MARKDOWN OBSAH -->
				<article class="prose prose-lg max-w-none" style="font-family: 'Roboto', sans-serif;">
					{@render data.news.content()}
				</article>
			</div>
		</div>
	</main>

	<Footer />
</div>

<style>
	:global(.prose h1) {
		font-family: 'Roboto Slab', serif;
		font-size: 36px;
		font-weight: 700;
		color: var(--color-primary);
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(.prose h2) {
		font-family: 'Roboto Slab', serif;
		font-size: 28px;
		font-weight: 700;
		color: var(--color-primary);
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	:global(.prose h3) {
		font-family: 'Roboto', sans-serif;
		font-size: 22px;
		font-weight: 700;
		color: #000000;
		margin-top: 1.25rem;
		margin-bottom: 0.5rem;
	}

	:global(.prose p) {
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		line-height: 1.8;
		color: #333333;
		margin-bottom: 1rem;
	}

	:global(.prose ul, .prose ol) {
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		line-height: 1.8;
		color: #333333;
		margin-bottom: 1rem;
	}

	:global(.prose li) {
		margin-bottom: 0.5rem;
	}

	:global(.prose strong) {
		font-weight: 700;
		color: #000000;
	}

	:global(.prose a) {
		color: var(--color-primary);
		text-decoration: underline;
	}

	:global(.prose a:hover) {
		color: var(--color-primary-dark);
	}
</style>

