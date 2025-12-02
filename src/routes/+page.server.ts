import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		// Načti všechny .md soubory z content/news/
		const allModules = import.meta.glob('/src/content/news/*.md', { eager: true });

		// Extrahuj metadata z každého modulu
		const news = Object.entries(allModules)
			.map(([_path, module]) => {
				const { metadata } = module as any;

				return {
					slug: metadata.slug,
					title: metadata.title || 'Bez názvu',
					excerpt: metadata.excerpt || '',
					date: metadata.date || new Date().toISOString().split('T')[0],
					time: metadata.time || '00:00',
					badge: metadata.badge || '',
					published: metadata.published !== false,
					image: metadata.image || '/images/blog/placeholder.webp'
				};
			})
			.filter((item) => item.published)
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

