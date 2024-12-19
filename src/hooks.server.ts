import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const accessToken = event.cookies.get('accessToken');
	if (!accessToken && event.url.pathname !== '/') {
		throw redirect(302, '/');
	}
	console.log(accessToken);
	if (accessToken) {
		event.locals = accessToken;
	}

	const response = await resolve(event);
	return response;
};
