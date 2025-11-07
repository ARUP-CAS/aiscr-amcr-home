<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';

  const items = [
    { key: 'item1', imagePosition: 'left' },
    { key: 'item2', imagePosition: 'right' },
    { key: 'item3', imagePosition: 'left' },
    { key: 'item4', imagePosition: 'right' }
  ];
</script>

<section id="zakladni-informace" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center">
      {m['amcrPas.usefulInfo.title']()}
    </h2>

    <div class="space-y-20">
      {#each items as item}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {#if item.imagePosition === 'left'}
            <!-- Fotka vlevo -->
            <div class="order-1 lg:order-1">
              <div class="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={(m as any)[`amcrPas.usefulInfo.${item.key}.image`]()}
                  alt={(m as any)[`amcrPas.usefulInfo.${item.key}.title`]()}
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <!-- Text vpravo -->
            <div class="order-2 lg:order-2">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                {(m as any)[`amcrPas.usefulInfo.${item.key}.title`]()}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {(m as any)[`amcrPas.usefulInfo.${item.key}.description`]()}
              </p>
            </div>
          {:else}
            <!-- Text vlevo -->
            <div class="order-2 lg:order-1">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                {(m as any)[`amcrPas.usefulInfo.${item.key}.title`]()}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {(m as any)[`amcrPas.usefulInfo.${item.key}.description`]()}
              </p>
            </div>
            <!-- Fotka vpravo -->
            <div class="order-1 lg:order-2">
              <div class="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={(m as any)[`amcrPas.usefulInfo.${item.key}.image`]()}
                  alt={(m as any)[`amcrPas.usefulInfo.${item.key}.title`]()}
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

