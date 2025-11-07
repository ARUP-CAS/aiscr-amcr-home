<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';

  const tools = [
    { key: 'tool1', imagePosition: 'right' },
    { key: 'tool2', imagePosition: 'left' },
    { key: 'tool3', imagePosition: 'right' },
    { key: 'tool4', imagePosition: 'left' },
    { key: 'tool5', imagePosition: 'right' },
    { key: 'tool6', imagePosition: 'left' },
    { key: 'tool7', imagePosition: 'right' }
  ];
</script>

<section id="nastroje" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div class="max-w-7xl mx-auto">
    <p class="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">
      {m['tools.label']()}
    </p>
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">
      {m['tools.title']()}
    </h2>

    <div class="space-y-24">
      {#each tools as tool, index}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {#if tool.imagePosition === 'left'}
            <!-- Obrázek vlevo -->
            <div class="order-1 lg:order-1">
              <div class="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={(m as any)[`tools.${tool.key}.image`]()}
                  alt={(m as any)[`tools.${tool.key}.title`]()}
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <!-- Text vpravo -->
            <div class="order-2 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                {(m as any)[`tools.${tool.key}.title`]()}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {(m as any)[`tools.${tool.key}.description`]()}
              </p>
            </div>
          {:else}
            <!-- Text vlevo -->
            <div class="order-2 lg:order-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                {(m as any)[`tools.${tool.key}.title`]()}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {(m as any)[`tools.${tool.key}.description`]()}
              </p>
            </div>
            <!-- Obrázek vpravo -->
            <div class="order-1 lg:order-2">
              <div class="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={(m as any)[`tools.${tool.key}.image`]()}
                  alt={(m as any)[`tools.${tool.key}.title`]()}
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

