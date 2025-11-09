import type { PageServerLoad } from './$types';
import { getLocale } from '$lib/paraglide/runtime';

export const load: PageServerLoad = async () => {
	try {
		const locale = getLocale();

		// Načíst všechny markdown soubory
		const allModules = import.meta.glob('/src/content/blog/*.md', {
			eager: true
		});

		// Transformovat na array článků
		const posts = Object.entries(allModules)
			.map(([path, module]) => {
				const { metadata } = module as any;
				const fileName = path.split('/').pop() || '';
				const slug = fileName.replace(/\.(cs|en)\.md$/, '').replace(/\.md$/, '');

				return {
					slug,
					title: metadata.title || 'Bez názvu',
					excerpt: metadata.excerpt || '',
					date: metadata.date || new Date().toISOString().split('T')[0],
					category: metadata.category || '',
					published: metadata.published !== false,
					locale: metadata.locale || 'cs',
					image: metadata.image || '/images/blog/placeholder.png',
					readingTime: metadata.readingTime || '5 minut',
					author: metadata.author || 'AIS CR Team',
					authorRole: metadata.authorRole || '',
					authorImage: metadata.authorImage || ''
				};
			})
			.filter((post) => post.published && post.locale === locale)
			.sort((a, b) => {
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			});

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

