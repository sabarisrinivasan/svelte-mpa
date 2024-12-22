<script>
	import '../../app.css';
	import { enhance } from '$app/forms';
</script>

<main class="flex h-dvh w-full items-center justify-center">
	<form
		method="POST"
		action="?/login"
		use:enhance
		class="artboard glass phone-3 flex flex-col justify-center gap-5 rounded-md p-6"
	>
		<h1 class="text-center text-2xl">login</h1>
		<input type="email" placeholder="email" class="rounded-lg" name="email" />
		<input type="password" placeholder="password" class="rounded-lg" name="password" />
		<button type="submit" class="btn btn-primary">login</button>
	</form>
</main>
