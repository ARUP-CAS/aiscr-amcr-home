<script lang="ts">
  import { Database, Route } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';
</script>

<section class="features-section px-4 sm:px-6 lg:px-8" style="padding-top: 64px; padding-bottom: 64px;">
  <div class="max-w-content">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- První sloupec -->
      <div>
        <Database size={48} color="#000000" style="margin-bottom: 16px;" />
        <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6; text-align: left;">
          {m['hero.description1']()}
        </p>
      </div>

      <!-- Druhý sloupec -->
      <div>
        <Route size={48} color="#000000" style="margin-bottom: 16px;" />
        <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6; text-align: left;">
          {m['hero.description2']()}
        </p>
      </div>

      <!-- Třetí sloupec s tlačítkem -->
      <div>
        <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #000000; margin-bottom: 24px; text-align: left;">
          👉 {m['hero.cta']()}
        </p>
        <a
          href="#aplikace"
          class="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
          style="font-size: 16px; gap: 8px; border-radius: 4px;"
        >
          <span>{m['hero.ctaButton']()}</span>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .features-section {
    position: relative;
    background-image: url('/images/bg-hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .features-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.85);
    z-index: 0;
  }
  
  .features-section > * {
    position: relative;
    z-index: 1;
  }
</style>

