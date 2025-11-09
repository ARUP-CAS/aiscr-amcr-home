<script lang="ts">
  import { ChevronRight } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';
</script>

<section class="hero-section px-4 sm:px-6 lg:px-8" style="height: 780px; margin-top: 120px; display: flex; align-items: center;">
  <div class="max-w-content w-full">
    <div class="hero-content text-left">
      <h1 class="hero-title" style="font-family: 'Roboto Slab', serif; font-size: 56px; font-weight: 700; color: var(--color-primary); margin-bottom: 24px; line-height: 1.2; text-align: left;">
        Archeologická mapa<br>České republiky
      </h1>
      <p class="hero-subtitle" style="font-family: 'Roboto', sans-serif; font-size: 24px; font-weight: 700; color: #000000; margin-bottom: 96px; text-align: left;">
        Váš průvodce krajinou archeologických dat
      </p>
      <a
        href="https://amcr.aiscr.cz/"
        class="hero-button inline-flex items-center bg-white text-black hover:bg-gray-50 transition-colors"
        style="padding: 12px 24px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; text-decoration: none; gap: 8px;"
      >
        <span>Vstupte do světa AMČR</span>
        <ChevronRight size={20} />
      </a>
    </div>
  </div>
</section>

<style>
  .hero-section {
    position: relative;
    background-image: url('/images/bg-hero.jpg');
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
    background-image: url('/images/bg-hero-right.png');
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

