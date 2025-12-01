import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const url = new URL(event.request.url);
	const locale = url.pathname.startsWith('/en') ? 'en' : 'cs';

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
	});
};
