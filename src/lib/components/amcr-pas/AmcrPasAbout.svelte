<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import { base } from '$app/paths';
</script>

<section id="o-amcr-pas" class="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
  <div class="max-w-content">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-[5px] bg-[#F1E9E8] lg:max-h-[479px]">
      <!-- Levý sloupec - Fotka (skrytá na mobilu) -->
      <div class="hidden lg:block order-2 lg:order-1">
        <div class="h-full">
          <img
            src="{base}/images/amcr-pas/bg-amcr-pas-about.webp"
            alt={m['amcrPas.about.title']()}
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Pravý sloupec - Text -->
      <div class="order-1 lg:order-2 p-6 sm:p-8 md:p-10 lg:p-12 lg:py-[60px] lg:px-[48px]">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style="font-family: 'Roboto Slab', serif; font-weight: 700; color: var(--color-primary); margin-bottom: 24px;">
          {m['amcrPas.about.title']()}
        </h2>
        <p class="text-sm sm:text-base" style="font-family: 'Roboto', sans-serif; font-weight: 400; color: #000000; line-height: 1.6; margin-bottom: 16px;">
          {@html m['amcrPas.about.description']()}
        </p>
        <p class="text-sm sm:text-base" style="font-family: 'Roboto', sans-serif; font-weight: 400; color: #000000; line-height: 1.6;">
          {@html m['amcrPas.about.description2']()}
        </p>
      </div>
    </div>
  </div>
</section>

