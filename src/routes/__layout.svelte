<script lang="ts">
	import TitleHeader from '$lib/header/TitleHeader.svelte';
	import '../app.css';
	import 'cirrus-ui'; 
</script>

<TitleHeader />

<main>
	<slot />
</main>

<!-- <footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer> -->

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		/* max-width: 1024px; */
		overflow-x: hidden;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
