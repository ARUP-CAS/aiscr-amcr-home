import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Redirect /pas -> /amcr-pas
export const GET: RequestHandler = () => {
	throw redirect(301, '/amcr-pas');
};

