<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
</script>

<section class="additional-services-section px-4 sm:px-6 lg:px-8" style="height: 518px; display: flex; align-items: center; justify-content: center;">
  <div class="text-center">
    <div class="content-panel" style="width: 950px; height: 294px; background: linear-gradient(0deg, #DB9134 0%, #448E99 100%); backdrop-filter: blur(1px); border-radius: 10px; padding: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <h2 style="font-family: 'Roboto Slab', serif; font-size: 48px; font-weight: 700; color: #FFFFFF; margin-bottom: 24px; text-align: center;">
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
    background-image: url('/images/bg-additional-services.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .content-panel {
    background: linear-gradient(0deg, rgba(219, 145, 52, 0.8) 0%, rgba(68, 142, 153, 0.8) 100%) !important;
    backdrop-filter: blur(1px) saturate(150%);
    -webkit-backdrop-filter: blur(1px) saturate(150%);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  }
</style>

