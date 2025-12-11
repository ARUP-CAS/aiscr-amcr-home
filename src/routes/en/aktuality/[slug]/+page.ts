import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';

// Entries pro prerender - generuje URL pouze pro anglické aktuality
export const entries: EntryGenerator = async () => {
	const modules = import.meta.glob('/src/content/news/*.md', { eager: true });

	const slugs = Object.entries(modules)
		.map(([_path, module]) => {
			const { metadata } = module as any;
			return { slug: metadata.slug, locale: metadata.locale || 'cs' };
		})
		.filter((item) => item.locale === 'en')
		.map(({ slug }) => ({ slug }));

	return slugs;
};

export const load: PageLoad = async ({ params }) => {
	try {
		// Načti všechny aktuality
		const modules = import.meta.glob('/src/content/news/*.md', { eager: true });

		// Vytvoř pole aktualit s metadaty
		const allNews = Object.entries(modules).map(([path, module]) => ({
			path,
			module,
			metadata: (module as any).metadata
		}));

		// Najdi aktualitu podle slug a locale (en)
		const newsItem = allNews.find(
			(n) => n.metadata.slug === params.slug && (n.metadata.locale || 'cs') === 'en'
		);

		if (!newsItem) {
			throw error(404, 'News not found');
		}

		// Extrahuj metadata a content
		const { metadata, default: content } = newsItem.module as any;

		// Vrať data do komponenty
		return {
			news: {
				title: metadata.title || 'Untitled',
				excerpt: metadata.excerpt || '',
				date: metadata.date || new Date().toISOString().split('T')[0],
				time: metadata.time || '00:00',
				badge: metadata.badge || '',
				slug: params.slug,
				image: metadata.image,
				content
			}
		};
	} catch (err) {
		console.error('Error loading news:', err);
		throw error(404, 'News not found');
	}
};

