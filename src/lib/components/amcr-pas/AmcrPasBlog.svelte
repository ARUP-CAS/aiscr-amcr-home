<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';

  let currentIndex = $state(0);

  const posts = [
    { key: 'post1' },
    { key: 'post2' },
    { key: 'post3' },
    { key: 'post4' },
    { key: 'post5' }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const visiblePosts = $derived(
    posts.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
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

<section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div class="max-w-7xl mx-auto">
    <!-- Header s ikonou -->
    <div class="flex flex-col items-center text-center mb-12">
      <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      </div>
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
        {m['amcrPas.blog.title']()}
      </h2>
      <p class="text-gray-600 max-w-2xl">
        {m['amcrPas.blog.subtitle']()}
      </p>
    </div>

    <!-- Karty -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {#each visiblePosts as post}
        <article class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div class="aspect-video bg-gray-200">
            <img
              src={(m as any)[`amcrPas.blog.${post.key}.image`]()}
              alt={(m as any)[`amcrPas.blog.${post.key}.title`]()}
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
              {(m as any)[`amcrPas.blog.${post.key}.badge`]()}
            </span>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {(m as any)[`amcrPas.blog.${post.key}.title`]()}
            </h3>
            <p class="text-gray-600 mb-4">
              {(m as any)[`amcrPas.blog.${post.key}.excerpt`]()}
            </p>
            <a
              href={(m as any)[`amcrPas.blog.${post.key}.link`]()}
              class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
            >
              {m['amcrPas.blog.readMore']()}
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
        aria-label={m['amcrPas.blog.previous']()}
      >
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onclick={nextPage}
        disabled={currentIndex >= totalPages - 1}
        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={m['amcrPas.blog.next']()}
      >
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>

