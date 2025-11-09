<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
</script>

<section id="o-amcr-pas" class="px-4 sm:px-6 lg:px-8" style="padding-top: 64px; padding-bottom: 64px;">
  <div class="max-w-content">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden" style="background-color: #F1E9E8; border-radius: 5px; max-height: 479px;">
      <!-- Levý sloupec - Fotka -->
      <div class="order-2 lg:order-1">
        <div class="h-full">
          <img
            src="/images/amcr-pas/bg-amcr-pas-about.png"
            alt={m['amcrPas.about.title']()}
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Pravý sloupec - Text -->
      <div class="order-1 lg:order-2" style="padding: 60px 48px;">
        <h2 style="font-family: 'Roboto Slab', serif; font-size: 48px; font-weight: 700; color: var(--color-primary); margin-bottom: 24px;">
          {m['amcrPas.about.title']()}
        </h2>
        <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #000000; margin-bottom: 24px;">
          {m['amcrPas.about.label']()}
        </p>
        <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6;">
          {m['amcrPas.about.description']()}
        </p>
      </div>
    </div>
  </div>
</section>

