<script lang="ts">
  import { Newspaper, ChevronRight } from '@lucide/svelte';
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

<section id="aktuality" class="news-section px-4 sm:px-6 lg:px-8" style="background-color: #EEEEEE; padding-top: 104px; padding-bottom: 80px;">
  <div class="max-w-content">
    <!-- Header s ikonou -->
    <div class="flex items-center" style="margin-bottom: 24px;">
      <Newspaper size={48} color="var(--color-primary)" style="margin-right: 16px;" />
      <h2 style="font-family: 'Roboto Slab', serif; font-size: 48px; font-weight: 700; color: var(--color-primary);">
        {m['news.title']()}
      </h2>
    </div>
    
    <!-- Popis -->
    <div style="margin-bottom: 80px;">
      <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #000000;">
        {m['news.subtitle']()}
      </p>
    </div>

    <!-- Karty -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {#each visibleNews as item}
        <article class="hover:shadow-lg transition-shadow" style="background-color: rgba(255, 255, 255, 0.8); padding: 24px; max-height: 415px; display: flex; flex-direction: column;">
          <span class="inline-block bg-primary" style="font-family: 'Roboto', sans-serif; font-size: 12px; font-weight: 700; color: #FFFFFF; margin-bottom: 16px; padding: 6px 12px; width: fit-content;">
            {(m as any)[`news.${item.key}.badge`]()}
          </span>
          <h3 style="font-family: 'Roboto', sans-serif; font-size: 24px; font-weight: 700; color: #000000; margin-bottom: 12px;">
            {(m as any)[`news.${item.key}.title`]()}
          </h3>
          <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6; margin-bottom: 16px;">
            {(m as any)[`news.${item.key}.excerpt`]()}
          </p>
          <a
            href={(m as any)[`news.${item.key}.link`]()}
            class="inline-flex items-center hover:underline"
            style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; text-decoration: none; gap: 4px;"
          >
            <span>{m['news.readMore']()}</span>
            <ChevronRight size={16} />
          </a>
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

<style>
  .news-section {
    position: relative;
    background-image: url('/images/bg-news.png');
    background-size: 1312px auto;
    background-position: center top;
    background-repeat: no-repeat;
  }
</style>

