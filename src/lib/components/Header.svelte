<script lang="ts">
  import { Globe } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';
  import { getLocale, setLocale } from '$lib/paraglide/runtime';
  
  // Reaktivní proměnná - sleduje, jestli jsme scrollovali
  let isScrolled = $state(false);
  
  function handleLanguageSwitch(e: MouseEvent) {
    e.preventDefault();
    setLocale(getLocale() === 'cs' ? 'en' : 'cs');
  }
  
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
    <div class="flex items-center justify-between h-full">
      <!-- Logo vlevo -->
      <div class="flex items-center">
        <a href="/" class="flex items-center">
          <img src="/images/logos/header-logo.svg" alt="AIS ČR Logo" class="logo" />
        </a>
      </div>

      <!-- Navigation a tlačítka vpravo -->
      <div class="hidden lg:flex items-center" style="gap: 32px;">
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
            href="/#aktuality" 
            class="text-white hover:text-gray-200 transition-colors"
            style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          >
            {m['nav.news']()}
          </a>
          <a 
            href="/amcr-pas" 
            class="text-white hover:text-gray-200 transition-colors"
            style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          >
            {m['nav.amcrPas']()}
          </a>
          <a 
            href="/downloads" 
            class="text-white hover:text-gray-200 transition-colors"
            style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          >
            {m['nav.downloads']()}
          </a>
          <a 
            href="/#kontakty" 
            class="text-white hover:text-gray-200 transition-colors"
            style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
          >
            {m['nav.contacts']()}
          </a>
        </nav>

        <!-- Language switcher -->
        <a
          href="#"
          onclick={handleLanguageSwitch}
          class="text-white hover:text-gray-200 transition-colors inline-flex items-center"
          style="font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif; gap: 8px;"
          aria-label={m['nav.switchLanguage']()}
        >
          <Globe size={20} />
          <span>{getLocale() === 'cs' ? 'CS' : 'EN'}</span>
        </a>

        <!-- Tlačítko Vstup do aplikace -->
        <a
          href="/login"
          class="text-white border border-white hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
          style="height: 40px; padding: 0 16px; font-size: 16px; font-weight: 400; font-family: 'Roboto', sans-serif;"
        >
          {m['nav.appLogin']()}
        </a>
      </div>

      <!-- Mobile menu button -->
      <button class="lg:hidden p-2 text-white hover:text-gray-200" aria-label="Otevřít menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</header>

<style>
  /* Header - normální stav */
  .header {
    height: 120px;
    transition: height 0.3s ease-in-out;
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
</style>

