type role = {
	ADMIN: App.Locals['role'];
	MERCHANT: App.Locals['role'];
	PARTNER: App.Locals['role'];
};
export const roles: role = {
	ADMIN: 'admin',
	MERCHANT: 'merchant',
	PARTNER: 'partner'
};

// export function checkRole(user: App.Locals['role'], requiredRole: string) {
// 	if (!user) {
// 		return false;
// 	}
// 	return user === requiredRole;
// }

type Role = {
	[x: string]: { link: string; title: string }[];
};
export const navItemsByRole: Role = {
	[roles.PARTNER]: [
		{
			title: 'Dashboard',
			link: '/partner'
		},
		{
			title: 'My Referrals',
			link: '/partner/my-referrals'
		},
		{
			title: 'My Commission',
			link: '/partner/my-commission'
		},
		{
			title: 'Payout Commission',
			link: '/partner/payout-commission'
		}
	],
	[roles.ADMIN]: [
		{
			title: 'Dashboard',
			link: '/admin'
		},
		{
			title: 'partnerList',
			link: '/admin/partner-list'
		},
		{
			title: 'merchantList',
			link: '/admin/merchant-list'
		},
		{
			title: 'merchant-onboarding',
			link: '/admin/merchant-on-boarding'
		}
	],
	[roles.MERCHANT]: [
		{
			title: 'Dashboard',
			link: '/merchant'
		},
		{
			title: 'payouts',
			link: '/merchant/payouts'
		},
		{
			title: 'checkBalance',
			link: '/merchant/check-balance'
		},
		{
			title: 'Account-details',
			link: '/merchant/account-details'
		}
	]
};
// export const navItemsPartner: Props[] = [
//   {
//     title: 'Dashboard',
//     link: '/partner',
//   },
//   {
//     title: 'My Referrals',
//     link: '/partner/my-referrals',
//   },
//   {
//     title: 'My Commission',
//     link: '/partner/my-commission',
//   },
//   {
//     title: 'Payout Commission',
//     link: '/partner/payout-commission',
//   }
// ];
// export const navItemsAdmin:Props[]=[
//   {
//     title: 'Dashboard',
//     link: '/admin',
//   },
//   {
//     title: 'partnerList',
//     link: '/admin/partner-list',
//   },
//   {
//     title: 'merchantList',
//     link: '/admin/merchant-list',
//   },
//   {
//     title: 'merchant-onboarding',
//     link: '/admin/merchant-on-boarding',
//   }
// ]

// export const navItemsMerchant:Props[]=[
//   {
//     title: 'Dashboard',
//     link: '/merchant',
//   },
//   {
//     title: 'payouts',
//     link: '/merchant/payouts',
//   },
//   {
//     title: 'checkBalance',
//     link: '/merchant/check-balance',
//   },
//   {
//     title: 'Account-details',
//     link: '/merchant/account-details',
//   }
// ]
