<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import { onMount } from 'svelte';
  
  let currentLocale = $state('cs');
  let isClosed = $state(false);
  
  onMount(() => {
    currentLocale = window.location.pathname.startsWith('/en') ? 'en' : 'cs';
  });
  
  function getBasePath(): string {
    return currentLocale === 'en' ? '/en' : '';
  }
</script>

{#if !isClosed}
  <div class="news-banner bg-gray-100 border-b border-gray-300" style="margin-top: 120px;">
    <div class="max-w-content px-4 sm:px-6 lg:px-8 py-3">
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <span class="flex-shrink-0 bg-primary text-white px-3 py-1 text-xs font-bold uppercase" style="font-family: 'Roboto', sans-serif;">
            {currentLocale === 'cs' ? 'Nové' : 'New'}
          </span>
          <a 
            href="{getBasePath()}/blog/amcr-pas-aktuality-1"
            class="text-sm text-gray-800 hover:text-primary transition-colors truncate"
            style="font-family: 'Roboto', sans-serif; font-weight: 500;"
          >
            {currentLocale === 'cs' 
              ? 'AMČR-PAS: Nový systém pro evidenci archeologických nálezů' 
              : 'AMCR-PAS: New system for archaeological finds registration'}
          </a>
        </div>
        <button 
          onclick={() => isClosed = true}
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
    top: 0;
    left: 0;
    right: 0;
    z-index: 40;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 1023px) {
    .news-banner {
      margin-top: 80px !important;
    }
  }
</style>

