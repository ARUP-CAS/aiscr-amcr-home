<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import { base } from '$app/paths';
  import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from '@lucide/svelte';

  const appsData = [
    { key: 'app1', icon: 'search', bgImagePath: 'bg-quick-select-1.webp' },
    { key: 'app2', icon: 'map', bgImagePath: 'bg-quick-select-2.webp' },
    { key: 'app3', icon: 'database', bgImagePath: 'bg-quick-select-3.webp' },
    { key: 'app4', icon: 'file', bgImagePath: 'bg-quick-select-4.webp' }
  ];
  
  // Přidat base k cestám obrázků
  const apps = $derived(appsData.map(a => ({
    ...a,
    bgImage: `${base}/images/${a.bgImagePath}`
  })));
  
  // Sledování rozbalených aplikací
  let expandedApps = $state<Record<string, boolean>>({});
  
  function toggleApp(appKey: string) {
    expandedApps[appKey] = !expandedApps[appKey];
  }
</script>

<section id="aplikace" class="px-4 sm:px-6 lg:px-8 bg-gray-50" style="border-top: 1px dashed #000000; padding-top: 128px; padding-bottom: 40px;">
  <div class="max-w-content">
    <div class="text-center">
      <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #000000; margin-bottom: 16px;">
        {m['quickApps.label']()}
      </p>
      <h2 style="font-family: 'Roboto Slab', serif; font-size: 48px; font-weight: 700; color: var(--color-primary); margin-bottom: 80px;">
        {m['quickApps.title']()}
      </h2>
    </div>

    <div class="flex flex-wrap justify-center gap-8">
      {#each apps as app}
        {@const expandedTextFn = (m as any)[`quickApps.${app.key}.expandedText`]}
        {@const btn1TextFn = (m as any)[`quickApps.${app.key}.btn1Text`]}
        {@const btn1LinkFn = (m as any)[`quickApps.${app.key}.btn1Link`]}
        {@const expandedText2Fn = (m as any)[`quickApps.${app.key}.expandedText2`]}
        {@const btn2TextFn = (m as any)[`quickApps.${app.key}.btn2Text`]}
        {@const btn2LinkFn = (m as any)[`quickApps.${app.key}.btn2Link`]}
        {@const expandedText3Fn = (m as any)[`quickApps.${app.key}.expandedText3`]}
        {@const btn3TextFn = (m as any)[`quickApps.${app.key}.btn3Text`]}
        {@const btn3LinkFn = (m as any)[`quickApps.${app.key}.btn3Link`]}
        {@const btnTextFn = (m as any)[`quickApps.${app.key}.btnText`]}
        {@const btnLinkFn = (m as any)[`quickApps.${app.key}.btnLink`]}
        
        <div 
          class="card-wrapper"
          style="display: flex; flex-direction: row; transition: all 0.3s ease;"
        >
          <!-- Hlavní karta -->
          <button 
            class="card-item"
            onclick={() => toggleApp(app.key)}
            style="width: 304px; height: 600px; border-radius: 5px; border: 1px solid #000000; padding: 24px; display: flex; flex-direction: column; align-items: flex-start; flex-shrink: 0; background-color: #DDF0EE; background-image: url('{app.bgImage}'); background-size: contain; background-position: bottom; background-repeat: no-repeat; cursor: pointer; text-align: left;"
            class:desktop-expanded={expandedApps[app.key]}
            class:mobile-expanded={expandedApps[app.key]}
          >
            <!-- Mobilní verze - rozbalený obsah nahradí základní -->
            {#if expandedApps[app.key]}
              <div class="mobile-expanded-content">
                <h4 style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: 700; color: #000000; margin-bottom: 16px;">
                  {(m as any)[`quickApps.${app.key}.title`]()}
                </h4>
                
                {#if expandedTextFn && typeof expandedTextFn === 'function'}
                  <p style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000; margin-bottom: 16px; line-height: 1.6;">
                    {expandedTextFn()}
                  </p>
                {/if}
                
                {#if btn1TextFn && typeof btn1TextFn === 'function'}
                  <a
                    href={btn1LinkFn()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onclick={(e) => e.stopPropagation()}
                    class="inline-block bg-white text-black hover:bg-gray-100 transition-colors"
                    style="padding: 8px 16px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; text-decoration: none; margin-bottom: 16px; text-align: center;"
                  >
                    {btn1TextFn()}
                  </a>
                {/if}
                
                {#if expandedText2Fn && typeof expandedText2Fn === 'function'}
                  <p style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000; margin-bottom: 16px; line-height: 1.6;">
                    {expandedText2Fn()}
                  </p>
                {/if}
                
                {#if btn2TextFn && typeof btn2TextFn === 'function'}
                  <a
                    href={btn2LinkFn()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onclick={(e) => e.stopPropagation()}
                    class="inline-block bg-white text-black hover:bg-gray-100 transition-colors"
                    style="padding: 8px 16px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; text-decoration: none; margin-bottom: 16px; text-align: center;"
                  >
                    {btn2TextFn()}
                  </a>
                {/if}
                
                {#if expandedText3Fn && typeof expandedText3Fn === 'function'}
                  <p style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000; margin-bottom: 16px; line-height: 1.6;">
                    {expandedText3Fn()}
                  </p>
                {/if}
                
                {#if btn3TextFn && typeof btn3TextFn === 'function'}
                  <a
                    href={btn3LinkFn()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onclick={(e) => e.stopPropagation()}
                    class="inline-block bg-white text-black hover:bg-gray-100 transition-colors"
                    style="padding: 8px 16px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; text-decoration: none; margin-bottom: 16px; text-align: center;"
                  >
                    {btn3TextFn()}
                  </a>
                {/if}
                
                {#if btnTextFn && typeof btnTextFn === 'function'}
                  <a
                    href={btnLinkFn()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onclick={(e) => e.stopPropagation()}
                    class="inline-block bg-white text-black hover:bg-gray-100 transition-colors"
                    style="padding: 8px 16px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; text-decoration: none; margin-bottom: 16px; text-align: center;"
                  >
                    {btnTextFn()}
                  </a>
                {/if}
                
                <div style="margin-top: auto; padding-top: 16px; display: flex; align-items: center; gap: 4px;">
                  <ChevronUp size={20} />
                  <span style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000;">Sbalit</span>
                </div>
              </div>
            {/if}
            
            <!-- Desktop verze - základní obsah karty (viditelný vždy na desktopu, na mobilu jen když není rozbaleno) -->
            <div class="card-default-content" class:mobile-hidden={expandedApps[app.key]}>
              <!-- Ikona -->
              {#if app.icon === 'search'}
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-bottom: 16px;">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              {:else if app.icon === 'map'}
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-bottom: 16px;">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              {:else if app.icon === 'database'}
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-bottom: 16px;">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              {:else}
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-bottom: 16px;">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              {/if}

              <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #000000; margin-bottom: 8px;">
                {(m as any)[`quickApps.${app.key}.category`]()}
              </p>
              <h3 style="font-family: 'Roboto', sans-serif; font-size: 24px; font-weight: 700; color: #000000; margin-bottom: 16px;">
                {(m as any)[`quickApps.${app.key}.title`]()}
              </h3>
              <p style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000; margin-bottom: 16px;">
                {(m as any)[`quickApps.${app.key}.subtitle`]()}
              </p>
              
              <div style="margin-top: auto; padding-top: 16px; display: flex; align-items: center; gap: 4px;">
                {#if expandedApps[app.key]}
                  <!-- Desktop: šipka doleva -->
                  <span class="desktop-chevron"><ChevronLeft size={20} /></span>
                  <!-- Mobil: šipka nahoru -->
                  <span class="mobile-chevron"><ChevronUp size={20} /></span>
                  <span style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000;">Sbalit</span>
                {:else}
                  <!-- Desktop: šipka doprava -->
                  <span class="desktop-chevron"><ChevronRight size={20} /></span>
                  <!-- Mobil: šipka dolů -->
                  <span class="mobile-chevron"><ChevronDown size={20} /></span>
                  <span style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000;">Zobrazit více</span>
                {/if}
              </div>
            </div>
          </button>
          
          <!-- Rozbalený panel napravo - pouze desktop -->
          {#if expandedApps[app.key]}
            <div 
              class="expanded-panel"
              style="width: 280px; height: 600px; border-radius: 0 5px 5px 0; border: 1px solid #000000; border-left: 1px dashed #000000; padding: 24px; flex-direction: column; background-color: #ffffff; overflow-y: auto;"
            >
              <h4 style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: 700; color: #000000; margin-bottom: 16px;">
                Více informací
              </h4>
              
              {#if expandedTextFn && typeof expandedTextFn === 'function'}
                <p style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000; margin-bottom: 16px; line-height: 1.6;">
                  {expandedTextFn()}
                </p>
              {/if}
              
              {#if btn1TextFn && typeof btn1TextFn === 'function'}
                <a
                  href={btn1LinkFn()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onclick={(e) => e.stopPropagation()}
                  class="inline-block bg-[#DDF0EE] text-black hover:bg-[#c5e4e0] transition-colors"
                  style="padding: 8px 16px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; text-decoration: none; margin-bottom: 16px; text-align: center;"
                >
                  {btn1TextFn()}
                </a>
              {/if}
              
              {#if expandedText2Fn && typeof expandedText2Fn === 'function'}
                <p style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000; margin-bottom: 16px; line-height: 1.6;">
                  {expandedText2Fn()}
                </p>
              {/if}
              
              {#if btn2TextFn && typeof btn2TextFn === 'function'}
                <a
                  href={btn2LinkFn()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onclick={(e) => e.stopPropagation()}
                  class="inline-block bg-[#DDF0EE] text-black hover:bg-[#c5e4e0] transition-colors"
                  style="padding: 8px 16px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; text-decoration: none; margin-bottom: 16px; text-align: center;"
                >
                  {btn2TextFn()}
                </a>
              {/if}
              
              {#if expandedText3Fn && typeof expandedText3Fn === 'function'}
                <p style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000; margin-bottom: 16px; line-height: 1.6;">
                  {expandedText3Fn()}
                </p>
              {/if}
              
              {#if btn3TextFn && typeof btn3TextFn === 'function'}
                <a
                  href={btn3LinkFn()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onclick={(e) => e.stopPropagation()}
                  class="inline-block bg-[#DDF0EE] text-black hover:bg-[#c5e4e0] transition-colors"
                  style="padding: 8px 16px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; text-decoration: none; margin-bottom: 16px; text-align: center;"
                >
                  {btn3TextFn()}
                </a>
              {/if}
              
              {#if btnTextFn && typeof btnTextFn === 'function'}
                <a
                  href={btnLinkFn()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onclick={(e) => e.stopPropagation()}
                  class="inline-block bg-[#DDF0EE] text-black hover:bg-[#c5e4e0] transition-colors"
                  style="padding: 8px 16px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; text-decoration: none; margin-bottom: 16px; text-align: center;"
                >
                  {btnTextFn()}
                </a>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Mobile-first: rozbalený obsah je zobrazen uvnitř karty */
  .mobile-expanded-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  
  .card-default-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  
  .mobile-hidden {
    display: none;
  }
  
  /* Rozbalený panel je na mobilu skrytý */
  .expanded-panel {
    display: none;
  }
  
  /* Šipky pro mobil */
  .desktop-chevron {
    display: none;
  }
  
  .mobile-chevron {
    display: inline-flex;
  }
  
  /* Desktop verze (md breakpoint = 768px) */
  @media (min-width: 768px) {
    /* Na desktopu je rozbalený obsah uvnitř karty skrytý */
    .mobile-expanded-content {
      display: none;
    }
    
    /* Na desktopu je základní obsah vždy viditelný */
    .card-default-content {
      display: flex !important;
    }
    
    .mobile-hidden {
      display: flex;
    }
    
    /* Na desktopu je rozbalený panel viditelný */
    .expanded-panel {
      display: flex;
    }
    
    /* Úprava border-radius karty když je rozbalená na desktopu */
    .card-item.desktop-expanded {
      border-radius: 5px 0 0 5px !important;
      border-right: none !important;
    }
    
    /* Šipky pro desktop */
    .desktop-chevron {
      display: inline-flex;
    }
    
    .mobile-chevron {
      display: none;
    }
  }
  
  /* Na mobilu když je karta rozbalená, skryjeme obrázek na pozadí */
  @media (max-width: 767px) {
    .card-item.mobile-expanded {
      background-image: none !important;
    }
  }
</style>

