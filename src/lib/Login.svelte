<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import PayWall from './PayWall.svelte';
  import Main from './Main.svelte';
  import { getMatchupData, getPerformanceData } from '../stores/results';

async function getStats() {
    const [matchups, performances] = await Promise.all([getMatchupData(), getPerformanceData()]);
    return { matchups, performances };
  }

let statsPromise;
let loggedIn = false;
onMount(() => {
  loggedIn = localStorage.getItem(':howsmydraft:league:password') ? true : false;
});

$: {
  if (browser) {
    statsPromise = getStats()
  }
};

function handlePasswordConfirm(password) {
  if (password === 'tinahungry') {
    loggedIn = true;
    localStorage.setItem(':howsmydraft:league:password', JSON.stringify(password))
  }
}
</script>

<div class="container">
  {#if loggedIn}
    {#await statsPromise}
      <div class="card u-flex u-items-center u-justify-center" style="background: linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224));">
        <div class="animated loading hide-text loading-white">
            <p>Hidden</p>
        </div>
      </div>        
      {:then resolvedStats}
        <Main rawStats={resolvedStats} />
      {:catch error}
        <p class="text-red-500">{error.message}</p>
      {/await}  
  {:else}
    <PayWall onClick={handlePasswordConfirm} />
  {/if}
</div>

<style>
.container {
  position: relative;
  padding-top: 40px;
  width: 100%;
}
</style>
