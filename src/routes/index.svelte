<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = true;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
	import IndexCardRoller from '$lib/IndexCardRoller.svelte';
	import Login from '$lib/Login.svelte';
	import Scroller from '$lib/Scroller.svelte';
</script>

<svelte:head>
	<title>How's My Draft</title>
</svelte:head>

<!-- <Login slot="main" /> -->

<IndexCardRoller></IndexCardRoller>
