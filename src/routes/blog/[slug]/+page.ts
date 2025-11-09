import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getLocale } from '$lib/paraglide/runtime';

export const load: PageLoad = async ({ params }) => {
	try {
		const locale = getLocale();

		// Načíst všechny markdown soubory
		const modules = import.meta.glob('/src/content/blog/*.md', {
			eager: true
		});

		// Transformovat na array s metadaty
		const allArticles = Object.entries(modules).map(([path, module]) => ({
			path,
			module,
			metadata: (module as any).metadata
		}));

		// Najít článek podle slug A locale
		const article = allArticles.find(
			(a) => a.metadata.slug === params.slug && a.metadata.locale === locale
		);

		// Pokud nenalezen = 404
		if (!article) {
			throw error(404, 'Článek nenalezen');
		}

		// Extrahovat metadata a obsah
		const { metadata, default: content } = article.module as any;

		// Najít dostupné jazykové verze
		const availableLocales = allArticles
			.filter((a) => a.metadata.slug === params.slug)
			.map((a) => a.metadata.locale);

		// Vrátit data
		return {
			post: {
				title: metadata.title,
				excerpt: metadata.excerpt,
				date: metadata.date,
				category: metadata.category,
				locale: metadata.locale,
				readingTime: metadata.readingTime,
				author: metadata.author,
				authorRole: metadata.authorRole,
				authorImage: metadata.authorImage,
				image: metadata.image,
				slug: metadata.slug,
				content // Svelte komponenta s obsahem
			},
			availableLocales
		};
	} catch (err) {
		console.error('Error loading blog post:', err);
		throw error(404, 'Článek nenalezen');
	}
};

