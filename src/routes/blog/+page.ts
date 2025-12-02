import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		// Načíst všechny markdown soubory na klientu
		const allModules = import.meta.glob('/src/content/blog/*.md', {
			eager: true
		});

		const posts = Object.entries(allModules)
			.map(([path, module]) => {
				const { metadata } = module as any;
				
				if (!metadata) return null;
				
				const fileName = path.split('/').pop() || '';
				const slug = fileName.replace(/\.md$/, '');

				return {
					slug,
					title: metadata.title || 'Bez názvu',
					excerpt: metadata.excerpt || '',
					date: metadata.date || new Date().toISOString().split('T')[0],
					category: metadata.category || '',
					published: metadata.published !== false,
					image: metadata.image,
					readingTime: metadata.readingTime || '5 minut',
					author: metadata.author || 'AIS CR Team',
					authorRole: metadata.authorRole || '',
					authorImage: metadata.authorImage
				};
			})
			.filter((post) => post !== null && post.published)
			.sort((a, b) => {
				return new Date(b!.date).getTime() - new Date(a!.date).getTime();
			});

		return {
			posts: posts.filter((p): p is NonNullable<typeof p> => p !== null)
		};
	} catch (err) {
		console.error('Error loading blog posts:', err);
		return {
			posts: []
		};
	}
};

