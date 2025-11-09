<script lang="ts">
  import { ChevronRight, Info, HelpCircle, Download, ChevronDown } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';
</script>

<section class="amcr-pas-hero-section px-4 sm:px-6 lg:px-8" style="height: 719px; margin-top: 120px; padding-top: 60px;">
  <div class="max-w-content w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Levý sloupec -->
      <div class="flex flex-col">
        <h1 class="hero-title" style="font-family: 'Roboto Slab', serif; font-size: 40px; font-weight: 700; color: var(--color-primary); margin-bottom: 48px; line-height: 1.2; text-align: left;">
          AMČR-PAS
        </h1>
        <p class="hero-subtitle" style="font-family: 'Roboto', sans-serif; font-size: 24px; font-weight: 700; color: #000000; margin-bottom: 48px; text-align: left;">
          Portál amatérských spolupracovníků a evidence samostatných nálezů
        </p>
        <div>
          <a
            href="#o-amcr-pas"
            class="inline-block bg-white text-black hover:bg-gray-50 transition-colors"
            style="padding: 12px 24px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; text-decoration: none;"
          >
            Vstoupit do portálu
          </a>
        </div>
      </div>

      <!-- Pravý sloupec -->
      <div class="flex flex-col">
        <p style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 400; color: #000000; margin-bottom: 32px;">
          Tento web přináší základní informace o fungování AMČR-PAS. Najdete zde:
        </p>
        
        <ul style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #000000; margin-bottom: 32px; padding-left: 20px; list-style-type: disc;">
          <li style="margin-bottom: 8px; display: list-item;">přehled fungování AMČR-PAS a jeho jednotlivých částí</li>
          <li style="margin-bottom: 8px; display: list-item;">metodické dokumenty</li>
          <li style="margin-bottom: 8px; display: list-item;">popisy postupů založené na dobré praxi</li>
          <li style="margin-bottom: 8px; display: list-item;">rozcestník k dalším informacím a kontaktům</li>
        </ul>

        <div class="space-y-0">
          <a
            href="#zakladni-informace"
            class="flex items-center w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
            style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; text-decoration: none; border-top: 2px solid #000000; padding: 16px 0; gap: 16px;"
          >
            <Info size={48} color="#000000" />
            <span class="flex-1">Základní informace</span>
            <ChevronDown size={24} color="#000000" />
          </a>
          <a
            href="#caste-dotazy"
            class="flex items-center w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
            style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; text-decoration: none; border-top: 2px solid #000000; padding: 16px 0; gap: 16px;"
          >
            <HelpCircle size={48} color="#000000" />
            <span class="flex-1">Časté dotazy</span>
            <ChevronDown size={24} color="#000000" />
          </a>
          <a
            href="#ke-stazeni"
            class="flex items-center w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
            style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; text-decoration: none; border-top: 2px solid #000000; border-bottom: 2px solid #000000; padding: 16px 0; gap: 16px;"
          >
            <Download size={48} color="#000000" />
            <span class="flex-1">Ke stažení a odkazy</span>
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
    background-image: url('/images/amcr-pas/bg-amcr-pas-hero.png');
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

