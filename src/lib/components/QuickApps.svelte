<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';

  const apps = [
    { key: 'app1', icon: 'search' },
    { key: 'app2', icon: 'map' },
    { key: 'app3', icon: 'database' },
    { key: 'app4', icon: 'file' }
  ];
</script>

<section id="aplikace" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div class="max-w-7xl mx-auto">
    <p class="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">
      {m['quickApps.label']()}
    </p>
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
      {m['quickApps.title']()}
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each apps as app}
        <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
          <!-- Ikona -->
          <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            {#if app.icon === 'search'}
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            {:else if app.icon === 'map'}
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            {:else if app.icon === 'database'}
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            {:else}
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            {/if}
          </div>

          <p class="text-sm text-gray-500 mb-2">
            {(m as any)[`quickApps.${app.key}.label`]()}
          </p>
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            {(m as any)[`quickApps.${app.key}.title`]()}
          </h3>
          <a
            href={(m as any)[`quickApps.${app.key}.link`]()}
            class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
          >
            {m['quickApps.linkText']()}
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

