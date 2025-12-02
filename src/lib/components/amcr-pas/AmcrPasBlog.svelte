<script lang="ts">
	// Preview nejnovějších blog postů - SYNCHRONNÍ NAČTENÍ pro prerender
	import { Shovel, ArrowLeft, ArrowRight } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { onMount } from 'svelte';
	
	// Synchronní načtení při SSR/prerender
	const allModules = import.meta.glob('/src/content/blog/*.md', { eager: true });
	
	const posts = Object.entries(allModules)
		.map(([path, module]) => {
			const { metadata } = module as any;
			const fileName = path.split('/').pop() || '';
			const slug = fileName.replace(/\.(cs|en)\.md$/, '').replace(/\.md$/, '');
			
			return {
				slug,
				title: metadata?.title || 'Bez názvu',
				excerpt: metadata?.excerpt || '',
				date: metadata?.date || new Date().toISOString().split('T')[0],
				category: metadata?.category || '',
				published: metadata?.published !== false,
				locale: metadata?.locale || 'cs',
				categoryColor: metadata?.category === 'Objevy' || metadata?.category === 'Discoveries' ? 'bg-purple-600' : 
							   metadata?.category === 'Technologie' || metadata?.category === 'Technology' ? 'bg-blue-600' : 'bg-green-600',
				author: metadata?.author || 'AIS CR Team',
				authorRole: metadata?.authorRole || '',
				authorImage: metadata?.authorImage || '',
				image: metadata?.image || '/images/blog/placeholder.webp',
				readTime: metadata?.readingTime || '5 minut'
			};
		})
		.filter(post => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 3);
	
	let blogPosts = $state<any[]>(posts);
	let currentLocale = $state('cs');

	// Detekce locale pro správné odkazy
	onMount(() => {
		currentLocale = window.location.pathname.startsWith('/en') ? 'en' : 'cs';
	});

	function getBlogUrl(slug: string): string {
		return currentLocale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`;
	}

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString(currentLocale === 'cs' ? 'cs-CZ' : 'en-US', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	let scrollContainer: HTMLElement;
	let canScrollLeft = $state(false);
	let canScrollRight = $state(true);

	function updateScrollButtons() {
		if (!scrollContainer) return;
		
		const scrollLeftPos = scrollContainer.scrollLeft;
		const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
		
		canScrollLeft = scrollLeftPos > 5;
		canScrollRight = scrollLeftPos < maxScroll - 5;
	}

	$effect(() => {
		const initButtons = () => {
			if (scrollContainer) {
				updateScrollButtons();
				scrollContainer.addEventListener('scroll', updateScrollButtons, { passive: true });
				return true;
			}
			return false;
		};
		
		if (!initButtons()) {
			setTimeout(() => {
				if (!initButtons()) {
					setTimeout(initButtons, 500);
				}
			}, 100);
		}
		
		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener('scroll', updateScrollButtons);
			}
		};
	});

	function scrollLeft() {
		if (!canScrollLeft || !scrollContainer) return;
		const cardWidth = 414;
		scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
		setTimeout(updateScrollButtons, 500);
	}

	function scrollRight() {
		if (!canScrollRight || !scrollContainer) return;
		const cardWidth = 414;
		scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
		setTimeout(updateScrollButtons, 500);
	}
</script>

<section id="blog" class="blog-section" style="font-family: 'Roboto', sans-serif; background-color: #FFFFFF; padding-top: 112px; padding-bottom: 80px; display: none;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Header with icon -->
		<div class="text-center mb-16">
			<div class="flex justify-center" style="margin-bottom: 16px;">
				<Shovel size="63" color="#721C17" />
			</div>
			<h2 class="font-bold mb-4" style="font-family: 'Roboto Slab', serif; color: #721C17; font-size: 48px;">
				{m['amcrPas.blog.title']()}
			</h2>
			<p class="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed" style="font-family: 'Roboto', sans-serif; font-weight: 400;">
				{m['amcrPas.blog.subtitle']()}
			</p>
		</div>

		<!-- Scrollable cards container -->
		<div class="mb-8 -mx-4 sm:-mx-6 lg:-mx-8">
			<div 
				bind:this={scrollContainer}
				class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4 sm:px-6 lg:px-8"
				style="scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;"
				onscroll={updateScrollButtons}
			>
				{#each blogPosts as post}
					<article class="flex-none bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col" style="scroll-snap-align: start; width: 390px; height: 629px; padding: 24px;">
						<div class="overflow-hidden" style="height: 300px; width: 100%;">
							<img src={post.image} alt={post.title} class="w-full h-full object-cover" />
						</div>
						
						<div class="flex flex-col flex-1" style="margin-top: 24px;">
							<div class="mb-3">
								<span class="text-white text-xs px-3 py-1 {post.categoryColor}" style="font-family: 'Roboto', sans-serif;">
									{post.category}
								</span>
							</div>
							
							<h3 class="text-xl font-semibold text-gray-900 mb-3 leading-tight" style="font-family: 'Roboto', sans-serif;">
								<a href={getBlogUrl(post.slug)} class="hover:text-red-600 transition-colors">
									{post.title}
								</a>
							</h3>
							
							<p class="text-gray-600 leading-relaxed mb-6 text-sm flex-1" style="font-family: 'Roboto', sans-serif;">
								{post.excerpt}
							</p>
							
							<div class="flex items-start space-x-3 mt-auto" style="font-family: 'Roboto', sans-serif;">
								{#if post.authorImage}
									<img src={post.authorImage} alt={post.author} class="rounded-full flex-shrink-0 object-cover" style="width: 48px; height: 48px;" />
								{:else}
									<div class="bg-gray-400 rounded-full flex-shrink-0" style="width: 48px; height: 48px;"></div>
								{/if}
								<div class="flex-1 flex flex-col justify-between" style="height: 48px;">
									<div class="font-bold text-gray-900" style="font-size: 14px;">{post.author}</div>
									<div class="text-gray-500 flex items-center space-x-2" style="font-size: 14px;">
										<span>{formatDate(post.date)}</span>
										<span>•</span>
										<span>{post.readTime}</span>
									</div>
								</div>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>

		<div class="flex justify-end space-x-3">
			<button 
				onclick={scrollLeft}
				class="bg-white rounded-full p-3 shadow-md transition-shadow {canScrollLeft ? 'hover:shadow-lg' : 'opacity-50 cursor-not-allowed'}"
				disabled={!canScrollLeft}
				aria-label="Předchozí"
			>
				<ArrowLeft size="20" color={canScrollLeft ? "#666" : "#ccc"} />
			</button>
			
			<button 
				onclick={scrollRight}
				class="bg-white rounded-full p-3 shadow-md transition-shadow {canScrollRight ? 'hover:shadow-lg' : 'opacity-50 cursor-not-allowed'}"
				disabled={!canScrollRight}
				aria-label="Další"
			>
				<ArrowRight size="20" color={canScrollRight ? "#666" : "#ccc"} />
			</button>
		</div>

	</div>
</section>

<style>
	.blog-section {
		background-image: url('/images/amcr-pas/bg-amcr-pas-blog.webp');
		background-size: 1312px auto;
		background-position: center top;
		background-repeat: no-repeat;
	}
	
	@media (max-width: 768px) {
		.blog-section {
			background-image: none;
		}
	}
	
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
