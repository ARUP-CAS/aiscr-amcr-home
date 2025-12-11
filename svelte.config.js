import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(), 
		mdsvex({
			extensions: ['.md']
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			// Pro nasazení do podsložky nastavte base cestu, např.:
			// base: '/amcr' nebo base: process.env.BASE_PATH || ''
			base: process.env.BASE_PATH || '',
			relative: true
		},
		prerender: {
			entries: [
				'/',
				'/en/',
				'/blog/',
				'/en/blog/',
				'/amcr-pas/',
				'/en/amcr-pas/',
				'/downloads/',
				'/en/downloads/'
			],
			handleMissingId: 'warn',
			handleHttpError: ({ path }) => {
				if (path.startsWith('/files/') || path.startsWith('/images/')) {
					return;
				}
				console.warn(`Prerender warning: ${path}`);
			},
			handleUnseenRoutes: 'warn'
		}
	},
	extensions: ['.svelte', '.md']
};

export default config;
