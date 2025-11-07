<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
</script>

<section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
      {m['hero.title']()}
    </h1>
    <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
      {m['hero.subtitle']()}
    </p>
    <a
      href="#aplikace"
      class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
    >
      {m['hero.cta']()}
    </a>
  </div>
</section>

