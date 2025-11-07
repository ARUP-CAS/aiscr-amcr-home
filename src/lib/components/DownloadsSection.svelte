<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';

  interface Props {
    prefix: string;
    sectionId?: string;
  }

  let { prefix, sectionId = 'ke-stazeni' }: Props = $props();

  const categories = [
    { key: 'cat1' },
    { key: 'cat2' },
    { key: 'cat3' }
  ];

  const documents = {
    cat1: [
      { key: 'doc1' },
      { key: 'doc2' }
    ],
    cat2: [
      { key: 'doc3' },
      { key: 'doc4' }
    ],
    cat3: [
      { key: 'doc5' },
      { key: 'doc6' }
    ]
  };
</script>

<section id={sectionId} class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
      {(m as any)[`${prefix}.downloads.title`]()}
    </h2>

    <div class="space-y-12">
      {#each categories as category}
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-6">
            {(m as any)[`${prefix}.downloads.${category.key}.title`]()}
          </h3>

          <div class="space-y-3">
            {#each documents[category.key as keyof typeof documents] as doc}
              <div class="flex items-center justify-between p-4 border border-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
                <div class="flex items-start space-x-4 flex-1">
                  <!-- Ikona dokumentu -->
                  <div class="flex-shrink-0">
                    <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <!-- Název a popis -->
                  <div class="flex-1 min-w-0">
                    <h4 class="text-base font-semibold text-gray-900 mb-1">
                      {(m as any)[`${prefix}.downloads.${category.key}.${doc.key}.title`]()}
                    </h4>
                    <p class="text-sm text-gray-600">
                      {(m as any)[`${prefix}.downloads.${category.key}.${doc.key}.description`]()}
                    </p>
                  </div>
                </div>

                <!-- Ikona stáhnout -->
                <a
                  href={(m as any)[`${prefix}.downloads.${category.key}.${doc.key}.file`]()}
                  download
                  class="flex-shrink-0 ml-4 p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                  aria-label={(m as any)[`${prefix}.downloads.downloadLabel`]()}
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

