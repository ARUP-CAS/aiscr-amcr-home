import { setLocale } from '$lib/paraglide/runtime';
import type { LayoutLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load: LayoutLoad = async ({ url }) => {
	const locale = url.pathname.startsWith('/en') ? 'en' : 'cs';
	setLocale(locale as 'cs' | 'en');
	return {};
};
