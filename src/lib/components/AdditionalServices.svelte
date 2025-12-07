<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import { base } from '$app/paths';
</script>

<section class="additional-services-section px-4 sm:px-6 lg:px-8 py-16 md:py-24" style="min-height: 400px; display: flex; align-items: center; justify-content: center; --services-bg: url('{base}/images/bg-additional-services.webp');">
  <div class="text-center w-full">
    <div class="content-panel w-full max-w-[950px] mx-auto rounded-[10px] p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style="font-family: 'Roboto Slab', serif; font-weight: 700; color: #FFFFFF; margin-bottom: 24px; text-align: center;">
        {m['additionalServices.title']()}
      </h2>
      <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #FFFFFF; margin-bottom: 32px; text-align: center;">
        {m['additionalServices.description']()}
      </p>
      <a
        href={m['additionalServices.link']()}
        class="inline-block hover:bg-white hover:bg-opacity-20 transition-colors"
        style="padding: 12px 24px; border: 1px solid #FFFFFF; border-radius: 4px; background: transparent; color: #FFFFFF; font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; text-decoration: none;"
      >
        {m['additionalServices.cta']()}
      </a>
    </div>
  </div>
</section>

<style>
  .additional-services-section {
    position: relative;
    background-image: var(--services-bg);
    background-size: cover;
    background-position: 80% center;
    background-repeat: no-repeat;
  }
  
  .content-panel {
    background: linear-gradient(0deg, rgba(219, 145, 52, 0.8) 0%, rgba(68, 142, 153, 0.8) 100%) !important;
    backdrop-filter: blur(1px) saturate(150%);
    -webkit-backdrop-filter: blur(1px) saturate(150%);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  }
</style>

