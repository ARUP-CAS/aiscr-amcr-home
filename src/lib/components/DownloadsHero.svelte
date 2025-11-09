<script lang="ts">
  import { FileStack, BookOpen, BookText, Wrench, ChevronDown } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';
  
  let expandedCategory = $state<string | null>(null);
  
  function toggleCategory(category: string) {
    expandedCategory = expandedCategory === category ? null : category;
  }
</script>

<section class="downloads-hero-section px-4 sm:px-6 lg:px-8" style="margin-top: 120px; padding-top: 60px; padding-bottom: 60px;">
  <div class="max-w-content w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Levý sloupec -->
      <div class="flex flex-col">
        <h1 class="hero-title" style="font-family: 'Roboto Slab', serif; font-size: 40px; font-weight: 700; color: var(--color-primary); margin-bottom: 48px; line-height: 1.2; text-align: left;">
          Ke stažení / odkazy
        </h1>
        <p class="hero-subtitle" style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 400; color: #000000; margin-bottom: 48px; text-align: left; line-height: 1.6;">
          Zde si můžete stáhnout užitečné dokumenty, soubory a aplikace, které Vám umožní blíže se seznámit s AMČR a užívaným popisným systémem. Zároveň zde naleznete odkazy na další užitečné související zdroje.
        </p>
      </div>

      <!-- Pravý sloupec - Rozklikávací kategorie -->
      <div class="flex flex-col">
        <div class="space-y-0">
          <!-- Základní dokumentace -->
          <div style="border-top: 1px solid #000000; border-bottom: 1px solid #000000;">
            <button
              onclick={() => toggleCategory('zakladni')}
              class="flex items-center justify-between w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
              style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; padding: 16px 0; gap: 16px;"
            >
              <FileStack size={48} color="#000000" />
              <span class="flex-1">Základní dokumentace</span>
              <ChevronDown 
                size={24} 
                color="#000000"
                class="transform transition-transform {expandedCategory === 'zakladni' ? 'rotate-180' : ''}"
              />
            </button>
          </div>

          <!-- Vzorové dokumenty -->
          <div style="border-bottom: 1px solid #000000;">
            <button
              onclick={() => toggleCategory('vzorove')}
              class="flex items-center justify-between w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
              style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; padding: 16px 0; gap: 16px;"
            >
              <BookOpen size={48} color="#000000" />
              <span class="flex-1">Vzorové dokumenty</span>
              <ChevronDown 
                size={24} 
                color="#000000"
                class="transform transition-transform {expandedCategory === 'vzorove' ? 'rotate-180' : ''}"
              />
            </button>
          </div>

          <!-- Publikace a materiály -->
          <div style="border-bottom: 1px solid #000000;">
            <button
              onclick={() => toggleCategory('publikace')}
              class="flex items-center justify-between w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
              style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; padding: 16px 0; gap: 16px;"
            >
              <BookText size={48} color="#000000" />
              <span class="flex-1">Publikace a materiály</span>
              <ChevronDown 
                size={24} 
                color="#000000"
                class="transform transition-transform {expandedCategory === 'publikace' ? 'rotate-180' : ''}"
              />
            </button>
          </div>

          <!-- Data a nástroje -->
          <div style="border-bottom: 1px solid #000000;">
            <button
              onclick={() => toggleCategory('data')}
              class="flex items-center justify-between w-full text-left hover:bg-gray-50 hover:bg-opacity-20 transition-colors"
              style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; padding: 16px 0; gap: 16px;"
            >
              <Wrench size={48} color="#000000" />
              <span class="flex-1">Data a nástroje</span>
              <ChevronDown 
                size={24} 
                color="#000000"
                class="transform transition-transform {expandedCategory === 'data' ? 'rotate-180' : ''}"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .downloads-hero-section {
    position: relative;
    background-color: #DDF0EE;
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

