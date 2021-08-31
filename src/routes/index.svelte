<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import IndexCardRoller from '$lib/IndexCardRoller.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<IndexCardRoller />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>
