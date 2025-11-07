<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
</script>

<section id="o-amcr-pas" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Levý sloupec - Fotka -->
      <div class="order-2 lg:order-1">
        <div class="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={m['amcrPas.about.image']()}
            alt={m['amcrPas.about.title']()}
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Pravý sloupec - Text -->
      <div class="order-1 lg:order-2">
        <h2 class="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-4">
          {m['amcrPas.about.label']()}
        </h2>
        <h3 class="text-3xl font-bold text-gray-900 mb-6">
          {m['amcrPas.about.title']()}
        </h3>
        <p class="text-gray-600 leading-relaxed">
          {m['amcrPas.about.description']()}
        </p>
      </div>
    </div>
  </div>
</section>

