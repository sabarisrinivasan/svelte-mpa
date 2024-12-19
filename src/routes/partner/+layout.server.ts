import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	if (event.locals !== 'partner') {
		throw error(401, { message: 'notauthorized' });
	}
};