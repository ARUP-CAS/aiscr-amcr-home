<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';

  let currentIndex = $state(0);

  const news = [
    { key: 'news1' },
    { key: 'news2' },
    { key: 'news3' },
    { key: 'news4' },
    { key: 'news5' }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const visibleNews = $derived(
    news.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
  );

  function nextPage() {
    if (currentIndex < totalPages - 1) {
      currentIndex++;
    }
  }

  function prevPage() {
    if (currentIndex > 0) {
      currentIndex--;
    }
  }
</script>

<section id="aktuality" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div class="max-w-7xl mx-auto">
    <!-- Header s ikonou -->
    <div class="flex items-start mb-12">
      <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      </div>
      <div>
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          {m['news.title']()}
        </h2>
        <p class="text-gray-600">
          {m['news.subtitle']()}
        </p>
      </div>
    </div>

    <!-- Karty -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {#each visibleNews as item}
        <article class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div class="p-6">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
              {(m as any)[`news.${item.key}.badge`]()}
            </span>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {(m as any)[`news.${item.key}.title`]()}
            </h3>
            <p class="text-gray-600 mb-4">
              {(m as any)[`news.${item.key}.excerpt`]()}
            </p>
            <a
              href={(m as any)[`news.${item.key}.link`]()}
              class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
            >
              {m['news.readMore']()}
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </article>
      {/each}
    </div>

    <!-- Navigační tlačítka -->
    <div class="flex justify-end items-center space-x-2">
      <button
        onclick={prevPage}
        disabled={currentIndex === 0}
        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={m['news.previous']()}
      >
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onclick={nextPage}
        disabled={currentIndex >= totalPages - 1}
        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={m['news.next']()}
      >
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>

