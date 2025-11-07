<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
</script>

<section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Levý sloupec 1 -->
      <div class="flex flex-col items-start">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          {m['features.feature1.title']()}
        </h3>
        <p class="text-gray-600">
          {m['features.feature1.description']()}
        </p>
      </div>

      <!-- Levý sloupec 2 -->
      <div class="flex flex-col items-start">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          {m['features.feature2.title']()}
        </h3>
        <p class="text-gray-600">
          {m['features.feature2.description']()}
        </p>
      </div>

      <!-- Pravý sloupec -->
      <div class="flex items-center justify-center lg:justify-end">
        <p class="text-2xl font-bold text-gray-900 max-w-xs text-center lg:text-right">
          {m['features.highlight']()}
        </p>
      </div>
    </div>
  </div>
</section>

