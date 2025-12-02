<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  
  interface NewsItem {
    slug: string;
    title: string;
    date: string;
  }

  // Props
  let { 
    isClosed = $bindable(false), 
    isScrolled = $bindable(false),
    latestNews
  } = $props<{ 
    isClosed?: boolean; 
    isScrolled?: boolean;
    latestNews?: NewsItem;
  }>();
  
  let currentLocale = $state('cs');
  let headerHeight = $state(120);
  
  const STORAGE_KEY = 'amcr_dismissed_news';
  
  onMount(() => {
    const pathWithoutBase = window.location.pathname.replace(new RegExp(`^${base}`), '');
    currentLocale = pathWithoutBase.startsWith('/en') ? 'en' : 'cs';
    
    // Zkontroluj localStorage, jestli byla tato aktualita již zavřena
    if (latestNews) {
      const dismissedNews = localStorage.getItem(STORAGE_KEY);
      if (dismissedNews === latestNews.slug) {
        isClosed = true;
      }
    }
  });
  
  function handleClose() {
    isClosed = true;
    // Ulož ID zavřené aktuality do localStorage
    if (latestNews) {
      localStorage.setItem(STORAGE_KEY, latestNews.slug);
    }
  }
  
  // Sledování scrollování pro dynamickou výšku headeru
  $effect(() => {
    let ticking = false;
    
    const updateHeaderHeight = () => {
      const isMobile = window.innerWidth < 1024;
      const scrolled = window.scrollY > 50;
      
      if (isMobile) {
        headerHeight = scrolled ? 60 : 80;
      } else {
        headerHeight = scrolled ? 60 : 120;
      }
      
      isScrolled = scrolled;
    };
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateHeaderHeight();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    const handleResize = () => {
      updateHeaderHeight();
    };
    
    // Check initial state
    if (typeof window !== 'undefined') {
      updateHeaderHeight();
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });
  
  function getLocalePath(): string {
    return currentLocale === 'en' ? `${base}/en` : base;
  }
</script>

{#if !isClosed && latestNews}
  <div class="news-banner bg-gray-100 border-b border-gray-300" style="top: {headerHeight}px;">
    <div class="max-w-content px-4 sm:px-6 lg:px-8 py-3">
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <span class="flex-shrink-0 bg-primary text-white px-3 py-1 text-xs font-bold uppercase" style="font-family: 'Roboto', sans-serif;">
            {currentLocale === 'cs' ? 'Nové' : 'New'}
          </span>
          <a 
            href="{getLocalePath()}/aktuality/{latestNews.slug}"
            class="text-sm text-gray-800 hover:text-primary transition-colors truncate"
            style="font-family: 'Roboto', sans-serif; font-weight: 500;"
          >
            {latestNews.title}
          </a>
        </div>
        <button 
          onclick={handleClose}
          class="flex-shrink-0 text-gray-600 hover:text-gray-800 transition-colors p-1"
          aria-label={currentLocale === 'cs' ? 'Zavřít' : 'Close'}
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .news-banner {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 35;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: top 0.3s ease-in-out;
  }
</style>

