<script lang="ts">
  import type { PageData } from './$types';
  import Header from '$lib/components/Header.svelte';
  import NewsBanner from '$lib/components/NewsBanner.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Features from '$lib/components/Features.svelte';
  import QuickApps from '$lib/components/QuickApps.svelte';
  import Tools from '$lib/components/Tools.svelte';
  import AdditionalServices from '$lib/components/AdditionalServices.svelte';
  import News from '$lib/components/News.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  let { data }: { data: PageData } = $props();
  let isBannerClosed = $state(false);
  let isScrolled = $state(false);
  
  // Získej poslední aktualitu pro banner
  const latestNews = $derived(data.news && data.news.length > 0 ? {
    slug: data.news[0].slug,
    title: data.news[0].title,
    date: data.news[0].date
  } : undefined);
</script>

<div class="min-h-screen flex flex-col">
  <Header />
  <NewsBanner bind:isClosed={isBannerClosed} bind:isScrolled {latestNews} />
  
  <main class="flex-1">
    <Hero {isBannerClosed} {isScrolled} />
    <Features />
    <QuickApps />
    <Tools />
    <AdditionalServices />
    <News news={data.news} />
    <FAQ />
  </main>
  
  <Footer />
</div>
