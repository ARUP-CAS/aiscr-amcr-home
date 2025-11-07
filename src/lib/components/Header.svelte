<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import { getLocale, setLocale } from '$lib/paraglide/runtime';
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo vlevo -->
      <div class="flex items-center">
        <a href="/" class="flex items-center">
          <img src="/images/logo.svg" alt="AIS ČR Logo" class="h-10" />
        </a>
      </div>

      <!-- Navigation a tlačítka vpravo -->
      <div class="hidden lg:flex items-center space-x-6">
        <nav class="flex items-center space-x-6">
          <a 
            href="https://amcr-help.aiscr.cz/amcr/" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-700 hover:text-gray-900 transition-colors text-sm"
          >
            {m['nav.help']()}
          </a>
          <a href="/#aktuality" class="text-gray-700 hover:text-gray-900 transition-colors text-sm">
            {m['nav.news']()}
          </a>
          <a href="/amcr-pas" class="text-gray-700 hover:text-gray-900 transition-colors text-sm">
            {m['nav.amcrPas']()}
          </a>
          <a href="/downloads" class="text-gray-700 hover:text-gray-900 transition-colors text-sm">
            {m['nav.downloads']()}
          </a>
          <a href="/#kontakty" class="text-gray-700 hover:text-gray-900 transition-colors text-sm">
            {m['nav.contacts']()}
          </a>
        </nav>

        <!-- Language switcher -->
        <button
          onclick={() => setLocale(getLocale() === 'cs' ? 'en' : 'cs')}
          class="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          aria-label={m['nav.switchLanguage']()}
        >
          {getLocale() === 'cs' ? 'EN' : 'CS'}
        </button>

        <!-- Tlačítko Vstup do aplikace -->
        <a
          href="/login"
          class="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          {m['nav.appLogin']()}
        </a>
      </div>

      <!-- Mobile menu button -->
      <button class="lg:hidden p-2 text-gray-700 hover:text-gray-900">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</header>

