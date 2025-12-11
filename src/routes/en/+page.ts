import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		// Načti všechny .md soubory z content/news/
		const allModules = import.meta.glob('/src/content/news/*.md', { eager: true });

		// Extrahuj metadata z každého modulu a filtruj podle jazyka (en)
		const news = Object.entries(allModules)
			.map(([_path, module]) => {
				const { metadata } = module as any;

				return {
					slug: metadata.slug,
					title: metadata.title || 'Untitled',
					excerpt: metadata.excerpt || '',
					date: metadata.date || new Date().toISOString().split('T')[0],
					time: metadata.time || '00:00',
					badge: metadata.badge || '',
					published: metadata.published !== false,
					image: metadata.image,
					locale: metadata.locale || 'cs'
				};
			})
			.filter((item) => item.published && item.locale === 'en')
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		return {
			news
		};
	} catch (err) {
		console.error('Error loading news:', err);
		return {
			news: []
		};
	}
};

