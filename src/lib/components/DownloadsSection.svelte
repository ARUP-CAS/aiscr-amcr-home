<script lang="ts">
  import { FileText, Download, ExternalLink, Globe } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';
  import { base } from '$app/paths';

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
      if (categoryKey === 'cat1') return [{ key: 'doc1' }, { key: 'doc2' }, { key: 'doc3' }, { key: 'doc4' }, { key: 'doc5' }, { key: 'doc6' }, { key: 'doc7' }, { key: 'doc8' }];
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

<section id={sectionId} class="px-4 sm:px-6 lg:px-8 {prefix === 'amcrPas' ? 'downloads-amcr-pas' : 'downloads-main'}" style="padding-top: 80px; padding-bottom: 80px; --downloads-bg: url('{base}/images/amcr-pas/bg-amcr-pas-downloads.webp');">
  <div class="max-w-content">
    <h2 class="font-bold mb-6 text-center" style="font-family: 'Roboto Slab', serif; font-size: 48px; color: var(--color-primary);">
      {(m as any)[`${prefix}.downloads.title`]()}
    </h2>
    {#if (m as any)[`${prefix}.downloads.description`]}
      <p class="text-center mb-12 max-w-3xl mx-auto" style="font-family: 'Roboto', sans-serif; font-size: 16px; color: #666;">
        {(m as any)[`${prefix}.downloads.description`]()}
      </p>
    {:else}
      <div class="mb-12"></div>
    {/if}

    <div class="space-y-12">
      {#each categories as category, index}
        {@const sectionIds = ['zakladni-dokumentace', 'publikace-materialy', 'data-nastroje']}
        <div id={sectionIds[index]} class="{prefix === 'downloadsPage' && index === 2 ? 'data-nastroje-bg' : ''}" style="scroll-margin-top: 140px;">
          <h3 class="font-bold mb-6 text-center" style="font-family: 'Roboto', sans-serif; font-size: 20px; color: #000000;">
            {(m as any)[`${prefix}.downloads.${category.key}.title`]()}
          </h3>

          <div class="space-y-3">
            {#each getDocumentsForCategory(prefix, category.key) as doc}
              {@const titleKey = `${prefix}.downloads.${category.key}.${doc.key}.title`}
              {@const descKey = `${prefix}.downloads.${category.key}.${doc.key}.description`}
              {@const fileKey = `${prefix}.downloads.${category.key}.${doc.key}.file`}
              {@const typeKey = `${prefix}.downloads.${category.key}.${doc.key}.type`}
              {@const buttonTypeKey = `${prefix}.downloads.${category.key}.${doc.key}.buttonType`}
              {@const buttonLabelKey = `${prefix}.downloads.${category.key}.${doc.key}.buttonLabel`}
              {@const titleFn = (m as any)[titleKey]}
              {@const descFn = (m as any)[descKey]}
              {@const fileFn = (m as any)[fileKey]}
              {@const typeFn = (m as any)[typeKey]}
              {@const buttonTypeFn = (m as any)[buttonTypeKey]}
              {@const buttonLabelFn = (m as any)[buttonLabelKey]}
              {@const isLink = typeFn && typeFn() === 'link'}
              {@const buttonType = buttonTypeFn ? buttonTypeFn() : (isLink ? 'visit' : 'download')}
              {@const downloadLabelFn = (m as any)[`${prefix}.downloads.downloadLabel`]}
              {@const readLabelFn = (m as any)[`${prefix}.downloads.readLabel`]}
              {@const visitLabelFn = (m as any)[`${prefix}.downloads.visitLabel`]}
              {@const watchLabelFn = (m as any)[`${prefix}.downloads.watchLabel`]}
              {#if titleFn && descFn && fileFn}
                {@const buttonLabel = buttonLabelFn ? buttonLabelFn() : (buttonType === 'download' ? (downloadLabelFn ? downloadLabelFn() : 'Download') : (buttonType === 'read' ? (readLabelFn ? readLabelFn() : 'Read') : (buttonType === 'watch' ? (watchLabelFn ? watchLabelFn() : 'Watch') : (visitLabelFn ? visitLabelFn() : 'Visit'))))}
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
                      <span>{buttonLabel}</span>
                      <ExternalLink size={16} color="#000000" />
                    </a>
                  {:else}
                    <a
                      href={fileFn()}
                      download
                      class="flex-shrink-0 ml-4 inline-flex items-center hover:underline transition-colors"
                      style="font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 400; color: #000000; text-decoration: none; gap: 8px;"
                    >
                      <span>{buttonLabel}</span>
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
  .downloads-amcr-pas,
  .downloads-main {
    position: relative;
    background-image: var(--downloads-bg);
    background-size: 1312px auto;
    background-position: center top;
    background-repeat: no-repeat;
    background-color: #FFFFFF;
  }

  .downloads-main {
    background-size: 100% auto;
    overflow-x: hidden;
  }
  
  .downloads-amcr-pas::before,
  .downloads-main::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.85);
    z-index: 0;
  }
  
  .downloads-amcr-pas > *,
  .downloads-main > * {
    position: relative;
    z-index: 1;
  }
  
  .data-nastroje-bg {
    position: relative;
    margin-left: calc(-50vw + 50%);
    width: 100vw;
    padding-left: calc(50vw - 50%);
    padding-right: calc(50vw - 50%);
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .data-nastroje-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: var(--downloads-bg);
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
    z-index: 0;
  }

  .data-nastroje-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.85);
    z-index: 0;
  }

  .data-nastroje-bg > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .downloads-amcr-pas,
    .downloads-main {
      background-image: none;
    }

    .downloads-amcr-pas::before,
    .downloads-main::before {
      display: none;
    }

    .data-nastroje-bg {
      margin-left: 0;
      width: auto;
      padding-left: 0;
      padding-right: 0;
    }

    .data-nastroje-bg::before,
    .data-nastroje-bg::after {
      display: none;
    }
  }
</style>

