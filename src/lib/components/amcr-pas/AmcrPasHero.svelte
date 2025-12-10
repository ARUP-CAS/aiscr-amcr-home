<script lang="ts">
  import { ChevronRight, Info, HelpCircle, Download, ChevronDown } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';
  import { base } from '$app/paths';
</script>

<section class="amcr-pas-hero-section px-4 sm:px-6 lg:px-8 mt-20 md:mt-28 lg:mt-32 pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20" style="min-height: 840px; --pas-hero-bg: url('{base}/images/amcr-pas/bg-amcr-pas-hero.webp');">
  <div class="max-w-content w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <!-- Levý sloupec -->
      <div class="flex flex-col">
        <h1 class="hero-title" style="font-family: 'Roboto Slab', serif; font-weight: 700; color: var(--color-primary); line-height: 1.2; text-align: left;">
          {m['amcrPas.hero.title']()}
        </h1>
        <p class="hero-subtitle" style="font-family: 'Roboto', sans-serif; font-weight: 700; color: #000000; text-align: left;">
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
        <p class="intro-text" style="font-family: 'Roboto', sans-serif; font-weight: 400; color: #000000;">
          <span style="font-weight: 700;">{m['amcrPas.hero.intro']()}</span> {m['amcrPas.hero.intro2']()}
        </p>
        <p class="intro-text-2" style="font-family: 'Roboto', sans-serif; font-weight: 400; color: #000000;">
          {m['amcrPas.hero.intro3']()}
        </p>
        
        <ul class="points-list" style="font-family: 'Roboto', sans-serif; font-weight: 700; color: #000000; padding-left: 20px; list-style-type: disc;">
          <li style="margin-bottom: 8px; display: list-item;">{m['amcrPas.hero.point1']()}</li>
          <li style="margin-bottom: 8px; display: list-item;">{m['amcrPas.hero.point2']()}</li>
          <li style="margin-bottom: 8px; display: list-item;">{m['amcrPas.hero.point3']()}</li>
          <li style="margin-bottom: 8px; display: list-item;">{m['amcrPas.hero.point4']()}</li>
        </ul>

        <div class="space-y-0">
          <a
            href="#o-amcr-pas"
            class="nav-link flex items-center w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
            style="font-family: 'Roboto', sans-serif; font-weight: 700; color: #000000; text-decoration: none; border-top: 2px solid #000000;"
          >
            <span class="nav-icon"><Info size={32} color="#000000" /></span>
            <span class="flex-1">{m['amcrPas.hero.btn1']()}</span>
            <ChevronDown size={24} color="#000000" />
          </a>
          <a
            href="#caste-dotazy"
            class="nav-link flex items-center w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
            style="font-family: 'Roboto', sans-serif; font-weight: 700; color: #000000; text-decoration: none; border-top: 2px solid #000000;"
          >
            <span class="nav-icon"><HelpCircle size={32} color="#000000" /></span>
            <span class="flex-1">{m['amcrPas.hero.btn2']()}</span>
            <ChevronDown size={24} color="#000000" />
          </a>
          <a
            href="#ke-stazeni"
            class="nav-link flex items-center w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
            style="font-family: 'Roboto', sans-serif; font-weight: 700; color: #000000; text-decoration: none; border-top: 2px solid #000000; border-bottom: 2px solid #000000;"
          >
            <span class="nav-icon"><Download size={32} color="#000000" /></span>
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
    background-color: #f1faf9;
    background-image: none;
  }
  
  /* Od desktopu zobrazit obrázek pozadí */
  @media (min-width: 1024px) {
    .amcr-pas-hero-section {
      background-color: #f1faf9;
      background-image: var(--pas-hero-bg);
      background-size: 1800px auto;
      background-position: center bottom;
      background-repeat: no-repeat;
    }
  }
  
  .hero-title {
    font-size: 28px;
    margin-bottom: 24px;
  }
  
  .hero-subtitle {
    font-size: 18px;
    margin-bottom: 24px;
  }
  
  .intro-text {
    font-size: 16px;
    margin-bottom: 24px;
  }
  
  .intro-text-2 {
    font-size: 16px;
    margin-bottom: 12px;
  }
  
  .points-list {
    font-size: 14px;
    margin-bottom: 24px;
  }
  
  .nav-link {
    font-size: 16px;
    padding: 12px 0;
    gap: 12px;
  }
  
  .nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  /* Tablet */
  @media (min-width: 640px) {
    .hero-title {
      font-size: 32px;
      margin-bottom: 32px;
    }
    
    .hero-subtitle {
      font-size: 20px;
      margin-bottom: 32px;
    }
    
    .intro-text,
    .intro-text-2 {
      font-size: 18px;
    }
    
    .points-list {
      font-size: 15px;
      margin-bottom: 28px;
    }
    
    .nav-link {
      font-size: 18px;
      padding: 14px 0;
      gap: 14px;
    }
  }
  
  /* Desktop */
  @media (min-width: 1024px) {
    .hero-title {
      font-size: 40px;
      margin-bottom: 48px;
    }
    
    .hero-subtitle {
      font-size: 24px;
      margin-bottom: 48px;
    }
    
    .intro-text {
      font-size: 20px;
      margin-bottom: 32px;
    }
    
    .intro-text-2 {
      font-size: 20px;
      margin-bottom: 16px;
    }
    
    .points-list {
      font-size: 16px;
      margin-bottom: 32px;
    }
    
    .nav-link {
      font-size: 20px;
      padding: 16px 0;
      gap: 16px;
    }
  }
</style>

