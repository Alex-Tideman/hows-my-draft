<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import IndexCardRoller from '$lib/IndexCardRoller.svelte';
</script>

<svelte:head>
	<title>How's My Draft</title>
</svelte:head>

<IndexCardRoller slot="draft"/>
