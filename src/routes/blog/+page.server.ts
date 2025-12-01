import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		// Načti všechny .md soubory z content/blog/
		const allModules = import.meta.glob('/src/content/blog/*.md', { eager: true });

		// Extrahuj metadata z každého modulu
		const posts = Object.entries(allModules)
			.map(([_path, module]) => {
				const { metadata } = module as any;

				return {
					slug: metadata.slug,
					title: metadata.title || 'Bez názvu',
					excerpt: metadata.excerpt || '',
					date: metadata.date || new Date().toISOString().split('T')[0],
					category: metadata.category || '',
					published: metadata.published !== false,
					image: metadata.image || '/images/blog/placeholder.webp',
					readingTime: metadata.readingTime || '5 minut',
					author: metadata.author || 'AIS CR Team',
					authorRole: metadata.authorRole || '',
					authorImage: metadata.authorImage || ''
				};
			})
			.filter((post) => post.published)
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		return {
			posts
		};
	} catch (err) {
		console.error('Error loading blog posts:', err);
		return {
			posts: []
		};
	}
};

