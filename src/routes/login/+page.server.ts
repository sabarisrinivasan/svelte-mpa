import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	switch (locals.role) {
		case 'merchant':
			throw redirect(302, '/merchant');
		case 'partner':
			throw redirect(302, '/partner');
		case 'admin':
			throw redirect(302, '/admin');
	}
};

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = await data.get('email');
		const password = await data.get('password');
		if (email === 'sabari@gmail.com' && password === 'IRabas11') {
			cookies.set('accessToken', 'merchant', { path: '/' });
			console.log(email, password);
		} else {
			return { message: 'invalid credentials' };
		}
	}
};
