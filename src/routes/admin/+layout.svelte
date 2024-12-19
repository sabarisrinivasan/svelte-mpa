<script lang="ts">
	import '../../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>admin</title>
</svelte:head>

{@render children()}
