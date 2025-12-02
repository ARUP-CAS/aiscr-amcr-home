<script lang="ts">
  import { Newspaper, ChevronRight, ChevronDown, ChevronUp } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';

  interface NewsItem {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    time: string;
    badge: string;
    image: string;
  }

  interface Props {
    news?: NewsItem[];
  }

  let { news = [] }: Props = $props();

  let currentIndex = $state(0);
  let expandedItems = $state<Record<string, boolean>>({});

  const itemsPerPage = 3;
  const totalPages = $derived(Math.ceil(news.length / itemsPerPage));

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

  function toggleExpand(slug: string) {
    expandedItems[slug] = !expandedItems[slug];
  }

  function truncateText(text: string, maxLength: number = 80): { text: string; isTruncated: boolean } {
    if (text.length <= maxLength) {
      return { text, isTruncated: false };
    }
    return { text: text.slice(0, maxLength) + '...', isTruncated: true };
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('cs-CZ', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
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
        {@const { text: displayText, isTruncated } = truncateText(item.excerpt)}
        <article class="hover:shadow-lg transition-shadow overflow-hidden" style="background-color: rgba(255, 255, 255, 0.8); display: flex; flex-direction: column;">
          <!-- Obrázek - skryt -->
          {#if false}
            <div class="aspect-video overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                class="w-full h-full object-cover"
              />
            </div>
          {/if}
          
          <div style="padding: 24px; flex: 1; display: flex; flex-direction: column;">
            <!-- Časová známka -->
            <div class="flex items-center gap-2 mb-3" style="font-family: 'Roboto', sans-serif; font-size: 12px; color: #666;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formatDate(item.date)} • {item.time}</span>
            </div>
            
            <span class="inline-block bg-primary" style="font-family: 'Roboto', sans-serif; font-size: 12px; font-weight: 700; color: #FFFFFF; margin-bottom: 16px; padding: 6px 12px; width: fit-content;">
              {item.badge}
            </span>
            <h3 style="font-family: 'Roboto', sans-serif; font-size: 24px; font-weight: 700; margin-bottom: 12px;">
              <a href="/aktuality/{item.slug}" class="hover:text-primary transition-colors" style="color: #000000; text-decoration: none;">
                {item.title}
              </a>
            </h3>
            <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6; margin-bottom: 16px; flex: 1;">
              {expandedItems[item.slug] ? item.excerpt : displayText}
            </p>
            {#if isTruncated}
              <button
                onclick={() => toggleExpand(item.slug)}
                class="inline-flex items-center hover:underline"
                style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; text-decoration: none; gap: 4px; background: none; border: none; padding: 0; cursor: pointer;"
              >
                <span>{expandedItems[item.slug] ? m['news.readLess']() : m['news.readMore']()}</span>
                {#if expandedItems[item.slug]}
                  <ChevronUp size={16} />
                {:else}
                  <ChevronDown size={16} />
                {/if}
              </button>
            {/if}
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

<style>
  .news-section {
    position: relative;
    background-image: url('/images/bg-news.webp');
    background-size: 1312px auto;
    background-position: center top;
    background-repeat: no-repeat;
  }
</style>

