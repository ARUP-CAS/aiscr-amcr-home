<script lang="ts">
  import { MapPin, GraduationCap, FlaskConical, Landmark } from '@lucide/svelte';
  import { m } from '$lib/paraglide/messages.js';

  const items = [
    { key: 'item1', imagePosition: 'right', image: '/images/amcr-pas/bg-amcr-pas-info-1.png' },
    { key: 'item2', imagePosition: 'left', image: '/images/amcr-pas/bg-amcr-pas-info-2.png' },
    { key: 'item3', imagePosition: 'right', image: '/images/amcr-pas/bg-amcr-pas-info-3.png' },
    { key: 'item4', imagePosition: 'left', image: '/images/amcr-pas/bg-amcr-pas-info-4.png' }
  ];
</script>

<section id="zakladni-informace" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div class="max-w-content">
    <div class="space-y-20">
      {#each items as item}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {#if item.imagePosition === 'left'}
            <!-- Fotka vlevo -->
            <div class="order-1 lg:order-1">
              <div class="overflow-hidden" style="{item.key === 'item2' ? 'max-height: 936px;' : item.key === 'item4' ? 'max-height: 872px;' : ''}">
                <img
                  src={item.image}
                  alt={(m as any)[`amcrPas.usefulInfo.${item.key}.title`]()}
                  class="w-full h-auto object-contain"
                  style="{item.key === 'item2' ? 'max-height: 936px;' : item.key === 'item4' ? 'max-height: 872px;' : ''}"
                />
              </div>
            </div>
            <!-- Text vpravo -->
            <div class="order-2 lg:order-2">
              {#if item.key === 'item2'}
                <GraduationCap size={48} color="var(--color-primary)" style="margin-bottom: 24px;" />
                <h3 style="font-family: 'Roboto Slab', serif; font-size: 40px; font-weight: 700; color: var(--color-primary); margin-bottom: 24px; line-height: 1.2;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.title`]()}
                </h3>
                <p style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; margin-bottom: 24px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.intro`]()}
                </p>
                
                <h4 style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: var(--color-primary); margin-bottom: 12px;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.section1Title`]()}
                </h4>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 12px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section1List`]()}
                </p>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 24px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section1Footer`]()}
                </p>
                
                <h4 style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: var(--color-primary); margin-bottom: 12px;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.section2Title`]()}
                </h4>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 12px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section2List`]()}
                </p>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section2Footer`]()}
                </p>
              {:else if item.key === 'item4'}
                <Landmark size={48} color="var(--color-primary)" style="margin-bottom: 24px;" />
                <h3 style="font-family: 'Roboto Slab', serif; font-size: 40px; font-weight: 700; color: var(--color-primary); margin-bottom: 24px; line-height: 1.2;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.title`]()}
                </h3>
                <p style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; margin-bottom: 24px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.intro`]()}
                </p>
                
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 24px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.list`]()}
                </p>
                
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.footer`]()}
                </p>
              {/if}
            </div>
          {:else}
            <!-- Text vlevo -->
            <div class="order-2 lg:order-1">
              {#if item.key === 'item1'}
                <MapPin size={48} color="var(--color-primary)" style="margin-bottom: 24px;" />
                <h3 style="font-family: 'Roboto Slab', serif; font-size: 40px; font-weight: 700; color: var(--color-primary); margin-bottom: 24px; line-height: 1.2;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.title`]()}
                </h3>
                <p style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; margin-bottom: 24px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.intro`]()}
                </p>
                
                <h4 style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: var(--color-primary); margin-bottom: 12px;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.section1Title`]()}
                </h4>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 12px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section1Text`]()}
                </p>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 24px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section1Links`]()}
                </p>
                
                <h4 style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: var(--color-primary); margin-bottom: 12px;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.section2Title`]()}
                </h4>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 12px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section2Text`]()}
                </p>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section2Footer`]()}
                </p>
              {:else if item.key === 'item2'}
                <GraduationCap size={48} color="var(--color-primary)" style="margin-bottom: 24px;" />
                <h3 style="font-family: 'Roboto Slab', serif; font-size: 40px; font-weight: 700; color: var(--color-primary); margin-bottom: 24px; line-height: 1.2;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.title`]()}
                </h3>
                <p style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; margin-bottom: 24px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.intro`]()}
                </p>
                
                <h4 style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: var(--color-primary); margin-bottom: 12px;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.section1Title`]()}
                </h4>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 12px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section1List`]()}
                </p>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 24px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section1Footer`]()}
                </p>
                
                <h4 style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: var(--color-primary); margin-bottom: 12px;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.section2Title`]()}
                </h4>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 12px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section2List`]()}
                </p>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section2Footer`]()}
                </p>
              {:else if item.key === 'item3'}
                <FlaskConical size={48} color="var(--color-primary)" style="margin-bottom: 24px;" />
                <h3 style="font-family: 'Roboto Slab', serif; font-size: 40px; font-weight: 700; color: var(--color-primary); margin-bottom: 24px; line-height: 1.2;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.title`]()}
                </h3>
                <p style="font-family: 'Roboto', sans-serif; font-size: 20px; font-weight: 700; color: #000000; margin-bottom: 24px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.intro`]()}
                </p>
                
                <h4 style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: var(--color-primary); margin-bottom: 12px;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.section1Title`]()}
                </h4>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; margin-bottom: 24px; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section1Text`]()}
                </p>
                
                <h4 style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: var(--color-primary); margin-bottom: 12px;">
                  {(m as any)[`amcrPas.usefulInfo.${item.key}.section2Title`]()}
                </h4>
                <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; line-height: 1.6;">
                  {@html (m as any)[`amcrPas.usefulInfo.${item.key}.section2Text`]()}
                </p>
              {/if}
            </div>
            <!-- Fotka vpravo -->
            <div class="order-1 lg:order-2">
              <div class="overflow-hidden" style="{item.key === 'item1' ? 'max-height: 1015px;' : item.key === 'item3' ? 'max-height: 914px;' : ''}">
                <img
                  src={item.image}
                  alt={(m as any)[`amcrPas.usefulInfo.${item.key}.title`]()}
                  class="w-full h-auto object-contain"
                  style="{item.key === 'item1' ? 'max-height: 1015px;' : item.key === 'item3' ? 'max-height: 914px;' : ''}"
                />
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

