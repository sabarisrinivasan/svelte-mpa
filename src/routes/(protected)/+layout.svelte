<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { navItemsByRole } from '$lib/components';
	import '../../app.css';
	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let geCurrentNav = navItemsByRole[data.role];
	console.log(geCurrentNav);
</script>

<section id="layout">
	<nav id="header"></nav>
	<aside id="sidebar">
		<div class="flex flex-col">
			{#each geCurrentNav as item}
				<a href={item.link}>{item.title}</a>
			{/each}
		</div>
	</aside>
	<main id="main">
		{@render children()}
	</main>
</section>
