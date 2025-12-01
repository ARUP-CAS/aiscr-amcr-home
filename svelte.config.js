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
		prerender: {
			entries: [
				'/',
				'/en',
				'/blog',
				'/en/blog',
				'/amcr-pas',
				'/en/amcr-pas',
				'/downloads',
				'/en/downloads'
			],
			handleMissingId: 'warn',
			handleHttpError: ({ path }) => {
				if (path.startsWith('/files/')) {
					return;
				}
				console.warn(`Prerender warning: ${path}`);
			}
		}
	},
	extensions: ['.svelte', '.md']
};

export default config;
