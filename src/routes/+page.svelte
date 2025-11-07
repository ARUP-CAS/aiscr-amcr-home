<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Features from '$lib/components/Features.svelte';
  import QuickApps from '$lib/components/QuickApps.svelte';
  import Tools from '$lib/components/Tools.svelte';
  import AdditionalServices from '$lib/components/AdditionalServices.svelte';
  import News from '$lib/components/News.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col">
  <Header />
  
  <main class="flex-1">
    <Hero />
    <Features />
    <QuickApps />
    <Tools />
    <AdditionalServices />
    <News />
    <FAQ />
  </main>
  
  <Footer />
</div>
