<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
</script>

<section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div class="max-w-3xl mx-auto text-center">
    <div class="bg-white rounded-lg shadow-md p-8 lg:p-12">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        {m['additionalServices.title']()}
      </h2>
      <p class="text-gray-600 mb-8">
        {m['additionalServices.description']()}
      </p>
      <a
        href={m['additionalServices.link']()}
        class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
      >
        {m['additionalServices.cta']()}
      </a>
    </div>
  </div>
</section>

