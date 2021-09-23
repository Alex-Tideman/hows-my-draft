<script lang="ts">
	import TitleHeader from '$lib/header/TitleHeader.svelte';
	import '../app.css';
	import 'cirrus-ui'; 
</script>

<TitleHeader />

<main>
	<slot />
</main>

<footer>
	<p><a href="mailto:me@alextideman.com">intrigued?</a></p>
</footer>

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

	footer {
		background: linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224));
		padding: 0 5px;
		text-align: right;
	}

	footer a {
		color: white;
		font-size: .75em;
	}
</style>
