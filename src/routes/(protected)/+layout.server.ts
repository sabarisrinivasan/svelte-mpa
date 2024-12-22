import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	console.log(event.locals);
	return {
		role: event.locals.role
	};
};
