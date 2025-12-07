<script lang="ts">
  import { Globe } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  
  // Reaktivní proměnná - sleduje, jestli jsme scrollovali
  let isScrolled = $state(false);
  let currentLocale = $state('cs');
  let isDropdownOpen = $state(false);
  let isMobileMenuOpen = $state(false);
  let dropdownButton: HTMLButtonElement | null = $state(null);
  let dropdownPosition = $state({ top: 0, right: 0 });
  
  // Helper pro locale-aware odkazy (kombinuje base path s locale)
  function getLocalePath(): string {
    return currentLocale === 'en' ? `${base}/en` : base;
  }
  
  // Language switcher - navigace na jinou URL
  function toggleLocale(e: MouseEvent) {
    e.preventDefault();
    if (typeof window === 'undefined') return;
    
    const currentPath = window.location.pathname;
    const hash = window.location.hash;
    
    // Odstranit base z cesty pro správné přepínání
    const pathWithoutBase = currentPath.replace(new RegExp(`^${base}`), '');
    
    if (currentLocale === 'cs') {
      // Switch to English: add /en prefix
      window.location.href = `${base}/en${pathWithoutBase}${hash}`;
    } else {
      // Switch to Czech: remove /en prefix
      const newPath = pathWithoutBase.replace(/^\/en/, '') || '/';
      window.location.href = `${base}${newPath}${hash}`;
    }
  }
  
  onMount(() => {
    // Detekovat locale z URL (s respektováním base path)
    const pathWithoutBase = window.location.pathname.replace(new RegExp(`^${base}`), '');
    currentLocale = pathWithoutBase.startsWith('/en') ? 'en' : 'cs';
    
    // Zavřít dropdown při kliknutí mimo něj
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isDropdownOpen && !target.closest('.dropdown-container')) {
        isDropdownOpen = false;
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
  
  // Blokovat scroll když je mobilní menu otevřené
  $effect(() => {
    if (typeof document !== 'undefined') {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  });
  
  // Výpočet aktuální výšky headeru
  const currentHeaderHeight = $derived(() => {
    if (typeof window === 'undefined') return 120;
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      return isScrolled ? 60 : 80;
    }
    return isScrolled ? 60 : 120;
  });
  
  // Optimalizovaný scroll handler s requestAnimationFrame
  $effect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Pokud jsme scrollovali více než 50px dolů
          isScrolled = window.scrollY > 50;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Přidat posluchač na scroll event
    // { passive: true } = lepší performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup - automaticky se zavolá při unmount nebo před re-run
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<header class="header fixed top-0 left-0 right-0 z-50 bg-primary shadow-md {isScrolled ? 'header-scrolled' : ''}">
  <div class="max-w-content px-4 sm:px-6 lg:px-8 h-full">
    <div class="flex items-center justify-between h-full w-full">
      <!-- Logo vlevo -->
      <div class="flex items-center flex-shrink-0">
        <a href={currentLocale === 'en' ? `${base}/en` : `${base}/`} class="flex items-center">
          <img src="{base}/images/logos/header-logo.svg" alt="AIS ČR Logo" class="logo" />
        </a>
      </div>

      <!-- Navigation a tlačítka vpravo - DESKTOP -->
      <div class="hidden lg:flex items-center flex-1 justify-end" style="gap: 32px;">
        <nav class="flex items-center" style="gap: 32px;">
          <a 
            href="https://amcr-help.aiscr.cz/amcr/" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-gray-200 transition-colors"
            style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          >
            {m['nav.help']()}
          </a>
          <a 
            href="{getLocalePath()}/#aktuality" 
            class="text-white hover:text-gray-200 transition-colors"
            style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          >
            {m['nav.news']()}
          </a>
          <a 
            href="{getLocalePath()}/amcr-pas" 
            class="text-white hover:text-gray-200 transition-colors"
            style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          >
            {m['nav.amcrPas']()}
          </a>
          <a 
            href="{getLocalePath()}/downloads" 
            class="text-white hover:text-gray-200 transition-colors"
            style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          >
            {m['nav.downloads']()}
          </a>
          <a 
            href="{getLocalePath()}/#kontakty" 
            class="text-white hover:text-gray-200 transition-colors"
            style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          >
            {m['nav.contacts']()}
          </a>
        </nav>

        <!-- Language switcher -->
        <button
          onclick={toggleLocale}
          class="text-white hover:text-gray-200 transition-colors inline-flex items-center cursor-pointer"
          style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif; gap: 8px; background: none; border: none;"
          aria-label={m['nav.switchLanguage']()}
        >
          <Globe size={20} />
          <span>{currentLocale === 'cs' ? 'CS' : 'EN'}</span>
        </button>

        <!-- Dropdown Přejít do aplikace -->
        <div class="dropdown-container">
          <button
            bind:this={dropdownButton}
            onclick={(e) => {
              isDropdownOpen = !isDropdownOpen;
              if (isDropdownOpen && dropdownButton) {
                const rect = dropdownButton.getBoundingClientRect();
                dropdownPosition = {
                  top: rect.bottom + 8,
                  right: window.innerWidth - rect.right
                };
              }
            }}
            class="text-white border border-white hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
            style="height: 40px; padding: 0 16px; font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif; gap: 8px;"
          >
            {m['nav.appLogin']()}
            <svg class="w-4 h-4 transition-transform {isDropdownOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu button -->
      <button 
        class="lg:hidden p-2 text-white hover:text-gray-200 relative z-50" 
        aria-label="Otevřít menu"
        onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
      >
        {#if isMobileMenuOpen}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </div>
  </div>
</header>

<!-- Dropdown menu - portal mimo header s vysokým z-index -->
{#if isDropdownOpen}
  <div 
    class="fixed w-64 bg-white shadow-lg border border-gray-200"
    style="top: {dropdownPosition.top}px; right: {dropdownPosition.right}px; z-index: 9999;"
  >
    <a
      href="https://amcr.aiscr.cz/"
      target="_blank"
      rel="noopener noreferrer"
      class="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
      style="font-size: 14px; font-family: 'Roboto', sans-serif;"
      onclick={() => isDropdownOpen = false}
    >
      {m['nav.app.amcr']()}
    </a>
    <a
      href="https://digiarchiv.aiscr.cz/"
      target="_blank"
      rel="noopener noreferrer"
      class="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors border-t border-gray-200"
      style="font-size: 14px; font-family: 'Roboto', sans-serif;"
      onclick={() => isDropdownOpen = false}
    >
      {m['nav.app.digitalArchive']()}
    </a>
    <a
      href="https://api.aiscr.cz/"
      target="_blank"
      rel="noopener noreferrer"
      class="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors border-t border-gray-200"
      style="font-size: 14px; font-family: 'Roboto', sans-serif;"
      onclick={() => isDropdownOpen = false}
    >
      {m['nav.app.api']()}
    </a>
  </div>
{/if}
  
  <!-- Mobile menu overlay -->
  {#if isMobileMenuOpen}
    <div class="lg:hidden fixed inset-0 bg-primary z-40" style="top: {currentHeaderHeight()}px;">
      <nav class="px-4 py-4 space-y-3 h-full overflow-y-auto pb-20">
        <a 
          href="https://amcr-help.aiscr.cz/amcr/" 
          target="_blank"
          rel="noopener noreferrer"
          class="block text-white hover:text-gray-200 transition-colors py-2"
          style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          onclick={() => isMobileMenuOpen = false}
        >
          {m['nav.help']()}
        </a>
        <a 
          href="{getLocalePath()}/#aktuality" 
          class="block text-white hover:text-gray-200 transition-colors py-2"
          style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          onclick={() => isMobileMenuOpen = false}
        >
          {m['nav.news']()}
        </a>
        <a 
          href="{getLocalePath()}/amcr-pas" 
          class="block text-white hover:text-gray-200 transition-colors py-2"
          style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          onclick={() => isMobileMenuOpen = false}
        >
          {m['nav.amcrPas']()}
        </a>
        <a 
          href="{getLocalePath()}/downloads" 
          class="block text-white hover:text-gray-200 transition-colors py-2"
          style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          onclick={() => isMobileMenuOpen = false}
        >
          {m['nav.downloads']()}
        </a>
        <a 
          href="{getLocalePath()}/#kontakty" 
          class="block text-white hover:text-gray-200 transition-colors py-2"
          style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          onclick={() => isMobileMenuOpen = false}
        >
          {m['nav.contacts']()}
        </a>
        
        <div class="border-t border-white/20 pt-3">
          <button
            onclick={toggleLocale}
            class="block w-full text-left text-white hover:text-gray-200 transition-colors py-2 inline-flex items-center"
            style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif; gap: 8px;"
            aria-label={m['nav.switchLanguage']()}
          >
            <Globe size={20} />
            <span>{currentLocale === 'cs' ? 'CS' : 'EN'}</span>
          </button>
        </div>
        
        <div class="border-t border-white/20 pt-3 mt-3">
          <div class="text-white text-sm mb-3 font-bold" style="font-family: 'Roboto', sans-serif;">
            {m['nav.appLogin']()}
          </div>
          <div class="space-y-1">
            <a
              href="https://amcr.aiscr.cz/"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-white hover:text-gray-200 transition-colors py-2"
              style="font-size: 14px; font-family: 'Roboto', sans-serif;"
              onclick={() => isMobileMenuOpen = false}
            >
              {m['nav.app.amcr']()}
            </a>
            <a
              href="https://digiarchiv.aiscr.cz/"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-white hover:text-gray-200 transition-colors py-2"
              style="font-size: 14px; font-family: 'Roboto', sans-serif;"
              onclick={() => isMobileMenuOpen = false}
            >
              {m['nav.app.digitalArchive']()}
            </a>
            <a
              href="https://api.aiscr.cz/"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-white hover:text-gray-200 transition-colors py-2"
              style="font-size: 14px; font-family: 'Roboto', sans-serif;"
              onclick={() => isMobileMenuOpen = false}
            >
              {m['nav.app.api']()}
            </a>
          </div>
        </div>
      </nav>
    </div>
  {/if}

<style>
  /* Header - normální stav */
  .header {
    height: 120px;
    transition: height 0.3s ease-in-out;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  /* Header - zmenšený stav */
  .header-scrolled {
    height: 60px;
  }
  
  /* Logo - normální */
  .logo {
    height: 60px;
    transition: height 0.3s ease-in-out;
  }
  
  /* Logo - zmenšené */
  .header-scrolled .logo {
    height: 30px;
  }
  
  /* Mobile adjustments */
  @media (max-width: 1023px) {
    .header {
      height: 80px;
    }
    
    .header-scrolled {
      height: 60px;
    }
    
    .logo {
      height: 40px;
    }
    
    .header-scrolled .logo {
      height: 30px;
    }
  }
</style>
