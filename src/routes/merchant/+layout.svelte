<script lang="ts">
	import '../../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>merchant</title>
</svelte:head>
{@render children()}
