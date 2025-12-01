<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import CookieBanner from '$lib/components/CookieBanner.svelte';
	import { setLocale } from '$lib/paraglide/runtime';
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
			const locale = window.location.pathname.startsWith('/en') ? 'en' : 'cs';
			setLocale(locale as 'cs' | 'en');
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<CookieBanner bind:shouldOpen={openCookieBanner} />
