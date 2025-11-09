import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Redirect /help -> https://amcr-help.aiscr.cz/
export const GET: RequestHandler = () => {
	throw redirect(301, 'https://amcr-help.aiscr.cz/');
};

