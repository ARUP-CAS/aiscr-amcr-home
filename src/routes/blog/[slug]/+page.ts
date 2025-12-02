import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';

// Entries pro prerender - generuje URL pro všechny články v obou jazycích
export const entries: EntryGenerator = async () => {
	const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });

	const slugs = Object.entries(modules).map(([_path, module]) => {
		const { metadata } = module as any;
		return { slug: metadata.slug };
	});

	return slugs;
};

export const load: PageLoad = async ({ params }) => {
	try {
		// Načti všechny články
		const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });

		// Vytvoř pole článků s metadaty
		const allArticles = Object.entries(modules).map(([path, module]) => ({
			path,
			module,
			metadata: (module as any).metadata
		}));

		// Najdi článek podle slug z URL parametru
		const article = allArticles.find((a) => a.metadata.slug === params.slug);

		if (!article) {
			throw error(404, 'Blog post nenalezen');
		}

		// Extrahuj metadata a content
		const { metadata, default: content } = article.module as any;

		// Vrať data do komponenty
		return {
			post: {
				title: metadata.title || 'Bez názvu',
				excerpt: metadata.excerpt || '',
				date: metadata.date || new Date().toISOString().split('T')[0],
				category: metadata.category || '',
				slug: params.slug,
				readingTime: metadata.readingTime || '5 minut',
				author: metadata.author || 'AIS CR',
				authorRole: metadata.authorRole || 'Archeologický informační systém',
				authorImage: metadata.authorImage,
				image: metadata.image,
				content // ← Render funkce!
			}
		};
	} catch (err) {
		console.error('Error loading blog post:', err);
		throw error(404, 'Blog post nenalezen');
	}
};
