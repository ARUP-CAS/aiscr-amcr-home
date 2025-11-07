<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import DownloadsHero from '$lib/components/DownloadsHero.svelte';
  import DownloadsSection from '$lib/components/DownloadsSection.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col">
  <Header />
  
  <main class="flex-1">
    <DownloadsHero />
    <DownloadsSection prefix="downloadsPage" sectionId="dokumenty" />
  </main>
  
  <Footer />
</div>

