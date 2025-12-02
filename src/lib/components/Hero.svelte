<script lang="ts">
  import { ChevronRight } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';
  import { base } from '$app/paths';
  
  let { isBannerClosed = false, isScrolled = false } = $props<{
    isBannerClosed?: boolean;
    isScrolled?: boolean;
  }>();
  
  // Vypočítat správný margin-top podle stavu headeru a banneru
  const marginTop = $derived(() => {
    const headerHeight = isScrolled ? 60 : 120;
    const bannerHeight = isBannerClosed ? 0 : 50;
    return headerHeight + bannerHeight;
  });
</script>

<section class="hero-section px-4 sm:px-6 lg:px-8" style="height: 780px; margin-top: {marginTop()}px; display: flex; align-items: center; --hero-bg: url('{base}/images/bg-hero.webp'); --hero-bg-right: url('{base}/images/bg-hero-right.webp');">
  <div class="max-w-content w-full">
    <div class="hero-content text-left">
      <h1 class="hero-title" style="font-family: 'Roboto Slab', serif; font-size: 56px; font-weight: 700; color: var(--color-primary); margin-bottom: 24px; line-height: 1.2; text-align: left;">
        {m['hero.title']()}
      </h1>
      <p class="hero-subtitle" style="font-family: 'Roboto', sans-serif; font-size: 24px; font-weight: 700; color: #000000; margin-bottom: 48px; text-align: left;">
        {m['hero.subtitle']()}
      </p>
      <!-- Skryté texty - pro budoucí použití -->
      {#if false}
        <p class="hero-description" style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 16px; text-align: left; max-width: 600px;">
          {m['hero.description1']()}
        </p>
        <p class="hero-description" style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 48px; text-align: left; max-width: 600px;">
          {m['hero.description2']()}
        </p>
        <div style="margin-bottom: 16px;">
          <p style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: 700; color: #000000; text-align: left;">
            {m['hero.cta']()}
          </p>
        </div>
      {/if}
      <a
        href="#nastroje"
        class="hero-button inline-flex items-center bg-white text-black hover:bg-gray-50 transition-colors"
        style="padding: 12px 24px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; text-decoration: none; gap: 8px;"
      >
        <span>{m['hero.ctaButton']()}</span>
        <ChevronRight size={20} />
      </a>
    </div>
  </div>
</section>

<style>
  .hero-section {
    position: relative;
    background-image: var(--hero-bg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .hero-section::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background-image: var(--hero-bg-right);
    background-size: contain;
    background-position: right center;
    background-repeat: no-repeat;
    pointer-events: none;
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 600px;
  }
  
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 36px !important;
    }
    
    .hero-subtitle {
      font-size: 18px !important;
    }
    
    .hero-section::after {
      width: 100%;
      opacity: 0.3;
    }
  }
</style>

