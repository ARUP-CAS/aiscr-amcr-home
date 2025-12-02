<script lang="ts">
	import '../app.css';
	import CookieBanner from '$lib/components/CookieBanner.svelte';
	import { setLocale } from '$lib/paraglide/runtime';
	import { base } from '$app/paths';
	import { onMount, setContext } from 'svelte';

	let { children } = $props();
	
	// Cookie banner control
	let openCookieBanner = $state(false);
	
	// Provide context pro Footer
	setContext('openCookieBanner', () => {
		openCookieBanner = true;
	});

	// Initialize locale from URL on mount (for client-side hydration)
	onMount(() => {
		if (typeof window !== 'undefined') {
			const pathWithoutBase = window.location.pathname.replace(new RegExp(`^${base}`), '');
			const locale = pathWithoutBase.startsWith('/en') ? 'en' : 'cs';
			setLocale(locale as 'cs' | 'en');
		}
	});
</script>

<svelte:head>
	<link rel="icon" href="{base}/amcr_mini.png" type="image/png" />
</svelte:head>

{@render children()}

<CookieBanner bind:shouldOpen={openCookieBanner} />
