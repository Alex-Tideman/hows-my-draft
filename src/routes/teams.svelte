<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>
<script lang="ts">
	import Scroller from '$lib/Scroller.svelte';
</script>

<svelte:head>
	<title>Teams</title>
</svelte:head>

<div class="fixed-container">
	<div class="content">
		Team results to go here...
	</div>	
</div>

<style>
	.fixed-container {
		position: fixed;
		width: 100%;
		height: 100vh;
    overflow: auto;
	}
	.content {
		width: 100%;
		padding: 100px
	}
</style>
