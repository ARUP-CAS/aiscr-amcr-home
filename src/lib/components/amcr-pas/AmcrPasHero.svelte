<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
</script>

<section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Levý sloupec -->
      <div class="flex flex-col justify-center">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {m['amcrPas.hero.title']()}
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          {m['amcrPas.hero.subtitle']()}
        </p>
        <div>
          <a
            href="#o-amcr-pas"
            class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {m['amcrPas.hero.cta']()}
          </a>
        </div>
      </div>

      <!-- Pravý sloupec -->
      <div class="flex flex-col justify-center bg-white rounded-lg shadow-md p-8">
        <p class="text-sm text-gray-600 mb-4">
          {m['amcrPas.hero.intro']()}
        </p>
        
        <ul class="text-sm text-gray-700 mb-6 space-y-2">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            {m['amcrPas.hero.point1']()}
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            {m['amcrPas.hero.point2']()}
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            {m['amcrPas.hero.point3']()}
          </li>
        </ul>

        <div class="space-y-0 border border-gray-900 rounded-lg overflow-hidden">
          <a
            href="#zakladni-informace"
            class="block w-full px-6 py-3 text-left text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-900"
          >
            {m['amcrPas.hero.btn1']()}
          </a>
          <a
            href="#caste-dotazy"
            class="block w-full px-6 py-3 text-left text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-900"
          >
            {m['amcrPas.hero.btn2']()}
          </a>
          <a
            href="#ke-stazeni"
            class="block w-full px-6 py-3 text-left text-gray-900 hover:bg-gray-50 transition-colors"
          >
            {m['amcrPas.hero.btn3']()}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

