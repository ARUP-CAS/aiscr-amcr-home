<script lang="ts">
  import { ChevronRight, Info, HelpCircle, Download, ChevronDown } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';
  import { base } from '$app/paths';
</script>

<section class="amcr-pas-hero-section px-4 sm:px-6 lg:px-8" style="height: 719px; margin-top: 120px; padding-top: 60px; --pas-hero-bg: url('{base}/images/amcr-pas/bg-amcr-pas-hero.webp');">
  <div class="max-w-content w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Levý sloupec -->
      <div class="flex flex-col">
        <h1 class="hero-title" style="font-family: 'Roboto Slab', serif; font-size: 40px; font-weight: 700; color: var(--color-primary); margin-bottom: 48px; line-height: 1.2; text-align: left;">
          {m['amcrPas.hero.title']()}
        </h1>
        <p class="hero-subtitle" style="font-family: 'Roboto', sans-serif; font-size: 24px; font-weight: 700; color: #000000; margin-bottom: 48px; text-align: left;">
          {m['amcrPas.hero.subtitle']()}
        </p>
        <div>
          <a
            href="https://amcr.aiscr.cz/pas/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-white text-black hover:bg-gray-50 transition-colors"
            style="padding: 12px 24px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; text-decoration: none;"
          >
            {m['amcrPas.hero.cta']()}
          </a>
        </div>
      </div>

      <!-- Pravý sloupec -->
      <div class="flex flex-col">
        <p style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 400; color: #000000; margin-bottom: 32px;">
          <span style="font-weight: 700;">{m['amcrPas.hero.intro']()}</span> {m['amcrPas.hero.intro2']()}
        </p>
        <p style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 400; color: #000000; margin-bottom: 16px;">
          {m['amcrPas.hero.intro3']()}
        </p>
        
        <ul style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #000000; margin-bottom: 32px; padding-left: 20px; list-style-type: disc;">
          <li style="margin-bottom: 8px; display: list-item;">{m['amcrPas.hero.point1']()}</li>
          <li style="margin-bottom: 8px; display: list-item;">{m['amcrPas.hero.point2']()}</li>
          <li style="margin-bottom: 8px; display: list-item;">{m['amcrPas.hero.point3']()}</li>
          <li style="margin-bottom: 8px; display: list-item;">{m['amcrPas.hero.point4']()}</li>
        </ul>

        <div class="space-y-0">
          <a
            href="#o-amcr-pas"
            class="flex items-center w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
            style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; text-decoration: none; border-top: 2px solid #000000; padding: 16px 0; gap: 16px;"
          >
            <Info size={48} color="#000000" />
            <span class="flex-1">{m['amcrPas.hero.btn1']()}</span>
            <ChevronDown size={24} color="#000000" />
          </a>
          <a
            href="#caste-dotazy"
            class="flex items-center w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
            style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; text-decoration: none; border-top: 2px solid #000000; padding: 16px 0; gap: 16px;"
          >
            <HelpCircle size={48} color="#000000" />
            <span class="flex-1">{m['amcrPas.hero.btn2']()}</span>
            <ChevronDown size={24} color="#000000" />
          </a>
          <a
            href="#ke-stazeni"
            class="flex items-center w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
            style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; text-decoration: none; border-top: 2px solid #000000; border-bottom: 2px solid #000000; padding: 16px 0; gap: 16px;"
          >
            <Download size={48} color="#000000" />
            <span class="flex-1">{m['amcrPas.hero.btn3']()}</span>
            <ChevronDown size={24} color="#000000" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .amcr-pas-hero-section {
    position: relative;
    background-image: var(--pas-hero-bg);
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 36px !important;
    }
    
    .hero-subtitle {
      font-size: 18px !important;
    }
  }
</style>

