<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import AmcrPasHero from '$lib/components/amcr-pas/AmcrPasHero.svelte';
  import AmcrPasAbout from '$lib/components/amcr-pas/AmcrPasAbout.svelte';
  import UsefulInfo from '$lib/components/amcr-pas/UsefulInfo.svelte';
  import AmcrPasBlog from '$lib/components/amcr-pas/AmcrPasBlog.svelte';
  import AmcrPasFAQ from '$lib/components/amcr-pas/AmcrPasFAQ.svelte';
  import Downloads from '$lib/components/amcr-pas/Downloads.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col">
  <Header />
  
  <main class="flex-1">
    <AmcrPasHero />
    <AmcrPasAbout />
    <UsefulInfo />
    <AmcrPasBlog />
    <AmcrPasFAQ />
    <Downloads />
  </main>
  
  <Footer />
</div>

