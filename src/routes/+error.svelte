<script>
	import { page } from '$app/state';
	import unauthorized from '$lib/images/unauthorized.png';
	import '.././app.css';
	console.log(page.status);
</script>

{#if page && page.status === 401}
	<main class="flex h-dvh items-center justify-center">
		<div
			class="artboard artboard-horizontal phone-2 flex flex-col items-center justify-center rounded-sm bg-red-400"
		>
			<img src={unauthorized} alt="" width="100" height="100" />
			<h1 class="text-2xl text-white">unauthorized</h1>
		</div>
	</main>
{/if}
{#if page && page.status === 404}
	<main class="flex h-dvh items-center justify-center">
		<div
			class="artboard artboard-horizontal phone-2 flex flex-col items-center justify-center rounded-sm bg-red-400"
		>
			<img src={unauthorized} alt="" width="100" height="100" />
			<h1 class="text-2xl text-white">Not found</h1>
		</div>
	</main>
{/if}
