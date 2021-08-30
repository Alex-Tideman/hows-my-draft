<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import IndexCard from '$lib/IndexCard.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<IndexCard />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>
