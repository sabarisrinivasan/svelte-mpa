import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals !== 'partner') {
		throw error(401, { message: 'notauthorized' });
	}
};