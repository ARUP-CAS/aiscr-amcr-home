<script lang="ts">
  import { FileText, Download, ExternalLink, Globe } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';

  interface Props {
    prefix: string;
    sectionId?: string;
  }

  let { prefix, sectionId = 'ke-stazeni' }: Props = $props();

  // Různé počty dokumentů pro různé stránky
  const getCategoriesForPrefix = (prefix: string) => {
    if (prefix === 'amcrPas') {
      return [
        { key: 'cat1' },
        { key: 'cat2' },
        { key: 'cat3' },
        { key: 'cat4' }
      ];
    }
    // Pro downloadsPage
    return [
      { key: 'cat1' },
      { key: 'cat2' },
      { key: 'cat3' }
    ];
  };

  const getDocumentsForCategory = (prefix: string, categoryKey: string) => {
    if (prefix === 'amcrPas') {
      if (categoryKey === 'cat1') return [{ key: 'doc1' }, { key: 'doc2' }, { key: 'doc3' }, { key: 'doc4' }, { key: 'doc5' }, { key: 'doc6' }, { key: 'doc7' }];
      if (categoryKey === 'cat2') return [{ key: 'doc1' }, { key: 'doc2' }, { key: 'doc3' }, { key: 'doc4' }, { key: 'doc5' }];
      if (categoryKey === 'cat3') return [{ key: 'doc1' }, { key: 'doc2' }, { key: 'doc3' }, { key: 'doc4' }, { key: 'doc5' }, { key: 'doc6' }];
      if (categoryKey === 'cat4') return [{ key: 'doc1' }, { key: 'doc2' }];
    }
    // Pro downloadsPage
    if (categoryKey === 'cat1') return [{ key: 'doc1' }, { key: 'doc2' }, { key: 'doc3' }, { key: 'doc4' }, { key: 'doc5' }, { key: 'doc6' }, { key: 'doc7' }, { key: 'doc8' }];
    if (categoryKey === 'cat2') return [{ key: 'doc1' }, { key: 'doc2' }, { key: 'doc3' }, { key: 'doc4' }, { key: 'doc5' }];
    if (categoryKey === 'cat3') return [{ key: 'doc1' }, { key: 'doc2' }, { key: 'doc3' }, { key: 'doc4' }, { key: 'doc5' }];
    return [];
  };

  const categories = getCategoriesForPrefix(prefix);
</script>

<section id={sectionId} class="px-4 sm:px-6 lg:px-8 {prefix === 'amcrPas' ? 'downloads-amcr-pas' : 'bg-white'}" style="padding-top: 80px; padding-bottom: 80px;">
  <div class="max-w-content">
    <h2 class="font-bold mb-12 text-center" style="font-family: 'Roboto Slab', serif; font-size: 48px; color: var(--color-primary);">
      {(m as any)[`${prefix}.downloads.title`]()}
    </h2>

    <div class="space-y-12">
      {#each categories as category}
        <div>
          <h3 class="font-bold mb-6 text-center" style="font-family: 'Roboto', sans-serif; font-size: 20px; color: #000000;">
            {(m as any)[`${prefix}.downloads.${category.key}.title`]()}
          </h3>

          <div class="space-y-3">
            {#each getDocumentsForCategory(prefix, category.key) as doc}
              {@const titleKey = `${prefix}.downloads.${category.key}.${doc.key}.title`}
              {@const descKey = `${prefix}.downloads.${category.key}.${doc.key}.description`}
              {@const fileKey = `${prefix}.downloads.${category.key}.${doc.key}.file`}
              {@const typeKey = `${prefix}.downloads.${category.key}.${doc.key}.type`}
              {@const titleFn = (m as any)[titleKey]}
              {@const descFn = (m as any)[descKey]}
              {@const fileFn = (m as any)[fileKey]}
              {@const typeFn = (m as any)[typeKey]}
              {#if titleFn && descFn && fileFn}
                {@const isLink = typeFn && typeFn() === 'link'}
                <div class="flex items-center justify-between bg-white hover:bg-gray-50 transition-colors" style="padding: 16px; border: 1px solid #000000;">
                  <div class="flex items-start space-x-4 flex-1">
                    <!-- Ikona dokumentu nebo globe -->
                    <div class="flex-shrink-0">
                      {#if isLink}
                        <Globe size={32} color="#000000" />
                      {:else}
                        <FileText size={32} color="#000000" />
                      {/if}
                    </div>
                    
                    <!-- Název a popis -->
                    <div class="flex-1 min-w-0">
                      <h4 style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #000000; margin-bottom: 4px;">
                        {titleFn()}
                      </h4>
                      <p style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #666;">
                        {descFn()}
                      </p>
                    </div>
                  </div>

                  <!-- Tlačítko stáhnout nebo přejít -->
                  {#if isLink}
                    <a
                      href={fileFn()}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex-shrink-0 ml-4 inline-flex items-center hover:underline transition-colors"
                      style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000; text-decoration: none; gap: 8px;"
                    >
                      <span>přejít</span>
                      <ExternalLink size={16} color="#000000" />
                    </a>
                  {:else}
                    <a
                      href={fileFn()}
                      download
                      class="flex-shrink-0 ml-4 inline-flex items-center hover:underline transition-colors"
                      style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000; text-decoration: none; gap: 8px;"
                    >
                      <span>stáhnout</span>
                      <Download size={16} color="#000000" />
                    </a>
                  {/if}
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .downloads-amcr-pas {
    position: relative;
    background-image: url('/images/amcr-pas/bg-amcr-pas-downloads.png');
    background-size: 1312px auto;
    background-position: center top;
    background-repeat: no-repeat;
    background-color: #FFFFFF;
  }
  
  @media (max-width: 768px) {
    .downloads-amcr-pas {
      background-image: none;
    }
  }
</style>

