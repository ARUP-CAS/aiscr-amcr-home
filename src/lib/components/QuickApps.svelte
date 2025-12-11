<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import { base } from '$app/paths';

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
  
  // Detekce, zda je první nebo poslední karta rozbalená (s možností zpoždění)
  let delayedFirstExpanded = $state(false);
  let delayedLastExpanded = $state(false);
  
  // Aktualizace zpožděných stavů
  $effect(() => {
    if (expandedApps['app1']) {
      delayedFirstExpanded = true;
    }
  });
  
  $effect(() => {
    if (expandedApps['app4']) {
      delayedLastExpanded = true;
    }
  });
  
  // 3D rotace karet
  let cardTransforms = $state<Record<string, string>>({});
  
  function toggleApp(appKey: string) {
    if (expandedApps[appKey]) {
      // Zavřít aktuální
      expandedApps[appKey] = false;
      
      // Zpožděné odebrání třídy pro plynulou animaci
      if (appKey === 'app1') {
        setTimeout(() => { delayedFirstExpanded = false; }, 400);
      } else if (appKey === 'app4') {
        setTimeout(() => { delayedLastExpanded = false; }, 400);
      }
    } else {
      // Zavřít všechny a otevřít novou
      const wasFirstExpanded = expandedApps['app1'];
      const wasLastExpanded = expandedApps['app4'];
      
      expandedApps = { [appKey]: true };
      // Resetovat transform při rozbalení
      cardTransforms[appKey] = '';
      
      // Zpožděné odebrání třídy pro plynulou animaci při přepnutí
      if (wasFirstExpanded && appKey !== 'app1') {
        setTimeout(() => { delayedFirstExpanded = false; }, 400);
      }
      if (wasLastExpanded && appKey !== 'app4') {
        setTimeout(() => { delayedLastExpanded = false; }, 400);
      }
    }
  }
  
  function handleMouseMove(e: MouseEvent, appKey: string) {
    // Žádné náklony když je karta rozbalená
    if (expandedApps[appKey]) return;
    
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    
    // Pozice myši relativně ke kartě (0-1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Rotace (-5 až 5 stupňů)
    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 10;
    
    cardTransforms[appKey] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  }
  
  function handleMouseLeave(appKey: string) {
    cardTransforms[appKey] = '';
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

    <div class="cards-container" class:first-expanded={delayedFirstExpanded} class:last-expanded={delayedLastExpanded}>
      {#each apps as app, index}
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
          class:expanded={expandedApps[app.key]}
        >
          <!-- Hlavní karta -->
          <button 
            class="card-item"
            onclick={() => toggleApp(app.key)}
            onmousemove={(e) => handleMouseMove(e, app.key)}
            onmouseleave={() => handleMouseLeave(app.key)}
            style="width: 304px; height: 600px; border-radius: 5px; border: 1px solid #000000; padding: 24px; display: flex; flex-direction: column; align-items: flex-start; flex-shrink: 0; background-color: #DDF0EE; background-image: url('{app.bgImage}'); background-size: contain; background-position: bottom; background-repeat: no-repeat; cursor: pointer; text-align: left; transform: {cardTransforms[app.key] || 'none'};"
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
              <p style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000;">
                {(m as any)[`quickApps.${app.key}.subtitle`]()}
              </p>
            </div>
          </button>
          
          <!-- Rozbalený panel napravo - pouze desktop -->
          <div 
            class="expanded-panel"
            class:panel-visible={expandedApps[app.key]}
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
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Kontejner s kartami */
  .cards-container {
    display: flex;
    justify-content: center;
    gap: 32px;
    overflow: visible;
    flex-wrap: wrap;
  }
  
  /* 4x1 layout při velké šířce */
  @media (min-width: 1401px) {
    .cards-container {
      flex-wrap: nowrap;
    }
  }
  
  /* Card wrapper */
  .card-wrapper {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    perspective: 1000px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Card item s 3D efektem */
  .card-item {
    transition: transform 0.15s ease-out, box-shadow 0.3s ease;
    transform-style: preserve-3d;
  }
  
  .card-item:hover {
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2), 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
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
  
  /* Rozbalený panel - skrytý ve výchozím stavu */
  .expanded-panel {
    width: 0;
    height: 600px;
    padding: 0;
    overflow: hidden;
    opacity: 0;
    border: none;
    display: none;
    flex-direction: column;
    background-color: #ffffff;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  
  /* Velký desktop - 4 karty vedle sebe s bočními panely */
  @media (min-width: 1401px) {
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
    
    /* Rozbalený panel - zobrazit na desktopu */
    .expanded-panel {
      display: flex;
    }
    
    /* Rozbalený panel - viditelný stav */
    .expanded-panel.panel-visible {
      width: 280px;
      padding: 24px;
      opacity: 1;
      border: 1px solid #000000;
      border-left: 1px dashed #000000;
      border-radius: 0 5px 5px 0;
      overflow-y: auto;
    }
    
    /* Úprava border-radius karty když je rozbalená na desktopu */
    .card-item.desktop-expanded {
      border-radius: 5px 0 0 5px !important;
      border-right: 1px dashed #000000 !important;
    }
    
    /* Kontejner zůstává centrovaný - karty se rozjedou symetricky */
    .cards-container {
      justify-content: center;
    }
    
    /* Když je první karta rozbalená, zarovnat doleva */
    .cards-container.first-expanded {
      justify-content: flex-start;
      padding-left: calc((100% - 1312px) / 2); /* 4*304px + 3*32px = 1312px - centrování */
    }
    
    /* Když je poslední karta rozbalená, zarovnat doprava */
    .cards-container.last-expanded {
      justify-content: flex-end;
      padding-right: calc((100% - 1312px) / 2); /* 4*304px + 3*32px = 1312px - centrování */
    }
  }
  
  /* Střední šířka (1024px - 1400px) - mobilní chování (2x2 grid) */
  @media (min-width: 1024px) and (max-width: 1400px) {
    .cards-container {
      flex-wrap: wrap;
      max-width: 700px;
      margin: 0 auto;
      justify-content: center;
    }
    
    /* Mobilní rozbalený obsah viditelný */
    .mobile-expanded-content {
      display: flex;
    }
    
    /* Základní obsah skrytý když je rozbaleno */
    .card-default-content.mobile-hidden {
      display: none;
    }
    
    .card-item.mobile-expanded {
      background-image: none !important;
    }
    
    /* Skrýt desktop panel */
    .expanded-panel {
      display: none !important;
    }
  }
  
  /* Na mobilu a tabletu když je karta rozbalená, skryjeme obrázek na pozadí */
  @media (max-width: 1023px) {
    .cards-container {
      flex-wrap: wrap;
    }
    
    .card-item.mobile-expanded {
      background-image: none !important;
    }
  }
</style>

