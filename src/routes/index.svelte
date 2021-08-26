<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Scroller from '$lib/Scroller.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Scroller />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		height: 100vh;
		overflow: hidden;
	}
</style>
