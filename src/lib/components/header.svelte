<script lang="ts">
	// Importing necessary components and icons
	import Menu from '$lib/icons/menu.svelte'; // Menu icon
	// Exported props
	export let width: number; // Width of the viewport for responsive design
	export let userName: string = 'john'; // Default username, can be overridden
	export let currentUrl = ''; // Current URL to determine page title
	// Function to get page title based on current URL
	function getTitle(path: string) {
		switch (path) {
			case '/partner':
				return `Welcome back! ${userName}`;
			case '/partner/my-commission':
				return 'My Commission';
			case '/partner/my-referrals':
				return 'My Referral';
			case '/partner/payout-commission':
				return 'Payout Commission';
			default:
				return `Welcome back! ${userName}`;
		}
	}

	// Reactive statement to update the title whenever currentUrl changes
	$: title = getTitle(currentUrl);
</script>

<!-- Main navigation header -->
<nav id="header" class="flex px-8 py-6">
	{#if width < 800}
		<!-- Display hamburger menu button on small screens -->
		<button on:click><Menu /></button>
	{/if}

	<!-- Brand title -->
	<div>
		<h1 class="text-lg font-medium lg:text-xl">{title}</h1>
		<!-- Dynamic page title -->
	</div>
</nav>
