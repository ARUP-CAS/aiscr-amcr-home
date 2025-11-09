import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Redirect /oznameni -> https://amcr.aiscr.cz/oznameni
export const GET: RequestHandler = () => {
	throw redirect(301, 'https://amcr.aiscr.cz/oznameni');
};

