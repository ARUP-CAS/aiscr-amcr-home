<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';

  const tools = [
    { key: 'tool1', imagePosition: 'right', image: '/images/tools-1.png' },
    { key: 'tool2', imagePosition: 'left', image: '/images/tools-2.png' },
    { key: 'tool3', imagePosition: 'right', image: '/images/tools-3.png' },
    { key: 'tool4', imagePosition: 'left', image: '/images/tools-4.png' },
    { key: 'tool5', imagePosition: 'right', image: '/images/tools-5.png' },
    { key: 'tool6', imagePosition: 'left', image: '/images/tools-6.png' },
    { key: 'tool7', imagePosition: 'right', image: '/images/tools-7.png' }
  ];
</script>

<section id="nastroje" class="px-4 sm:px-6 lg:px-8 bg-white" style="padding-top: 40px; padding-bottom: 80px;">
  <div class="max-w-content">
    <div class="text-center">
      <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #000000; margin-bottom: 16px;">
        {m['tools.label']()}
      </p>
      <h2 style="font-family: 'Roboto Slab', serif; font-size: 48px; font-weight: 700; color: var(--color-primary); margin-bottom: 80px;">
        {m['tools.title']()}
      </h2>
    </div>

    <div class="space-y-0">
      {#each tools as tool, index}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {#if tool.imagePosition === 'left'}
            <!-- Obrázek vlevo -->
            <div class="order-1 lg:order-1">
              <div class="aspect-video overflow-hidden">
                <img
                  src={tool.image}
                  alt={(m as any)[`tools.${tool.key}.title`]()}
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <!-- Text vpravo -->
            <div class="order-2 lg:order-2" style="padding: 64px;">
              <h3 style="font-family: 'Roboto', sans-serif; font-size: 32px; font-weight: 700; color: #000000; margin-bottom: 24px;">
                {(m as any)[`tools.${tool.key}.title`]()}
              </h3>
              <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6; margin-bottom: 32px;">
                {(m as any)[`tools.${tool.key}.description`]()}
              </p>
              <a
                href={(m as any)[`tools.${tool.key}.link`]()}
                class="inline-block bg-white text-black hover:bg-gray-50 transition-colors"
                style="padding: 12px 24px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; text-decoration: none;"
              >
                Vstoupit
              </a>
            </div>
          {:else}
            <!-- Text vlevo -->
            <div class="order-2 lg:order-1" style="padding: 64px;">
              <h3 style="font-family: 'Roboto', sans-serif; font-size: 32px; font-weight: 700; color: #000000; margin-bottom: 24px;">
                {(m as any)[`tools.${tool.key}.title`]()}
              </h3>
              <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6; margin-bottom: 32px;">
                {(m as any)[`tools.${tool.key}.description`]()}
              </p>
              <a
                href={(m as any)[`tools.${tool.key}.link`]()}
                class="inline-block bg-white text-black hover:bg-gray-50 transition-colors"
                style="padding: 12px 24px; border: 1px solid #000000; border-radius: 4px; font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; text-decoration: none;"
              >
                Vstoupit
              </a>
            </div>
            <!-- Obrázek vpravo -->
            <div class="order-1 lg:order-2">
              <div class="aspect-video overflow-hidden">
                <img
                  src={tool.image}
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

