<script>
  	import { onMount } from 'svelte';
    import { browser } from '$app/env';
    import { owners, items } from '../stores/store';
    import Analysis from './Analysis.svelte';
    import TeamList from './TeamList.svelte';
    import Results from './Results.svelte';
    import PayWall from './PayWall.svelte';
    import { getMatchupData, getPerformanceData } from '../stores/results';

  async function getStats() {
    const [matchups, performance] = await Promise.all([getMatchupData(), getPerformanceData()]);
    return { matchups, performance };
  }

  let stats;
  let tab = 'cost';
  let loggedIn = false;
  onMount(() => {
    loggedIn = localStorage.getItem(':howsmydraft:league:password') ? true : false;
  });

  $: activeOwner = $owners[0];

  $: {
    if (browser) {
      stats = getStats()
    }
  };
  function handleClick(owner) {
		activeOwner = owner;
	}

  function handlePasswordConfirm(password) {
    if (password === 'tinahungry') {
      loggedIn = true;
      localStorage.setItem(':howsmydraft:league:password', JSON.stringify(password))
    }
  }
</script>

<div class="container">
  <div class="row">
    <div class="col-md-3 col-xs-12">
      <ul class="menu">
        {#each $owners as item}
            <li class="menu-item owner-item" style={activeOwner.id === item.id ? "background-color: #00e047;" : ""} on:click={() => handleClick(item)} >
              {item.team}
            </li>
        {/each}  
      </ul>
    </div>
    <div class="col-md-9 col-xs-12 text-left">
      <div class="tab-container">
          <ul>
              <li class={tab === 'cost' ? 'selected' : ''} on:click={() => tab = 'cost'}><div class="tab-item-content">Cost</div></li>
              <li class={tab === 'strategy' ? 'selected' : ''} on:click={() => tab = 'strategy'}><div class="tab-item-content">Strategy</div></li>
              <li class={tab === 'performance' ? 'selected' : ''} on:click={() => tab = 'performance'}><div class="tab-item-content">Performance</div></li>
          </ul>
      </div>    
      {#if tab === 'cost'}
        <TeamList {activeOwner} />
      {:else if tab === 'strategy'}
        <Analysis {activeOwner} statId={1} fill="#f03d4d" />
        <Analysis {activeOwner} statId={2} fill="#0dd157" />
        <Analysis {activeOwner} statId={3} fill="#2972fa" />
      {:else if tab === 'performance'}    
        {#if loggedIn}
          {#await stats}
            <p class="text-green-500">Loading...</p>
          {:then resolvedStats}
            <Results {activeOwner} stats={resolvedStats} />
          {:catch error}
            <p class="text-red-500">{error.message}</p>
          {/await}  
        {:else}
          <PayWall onClick={handlePasswordConfirm} />
        {/if}
      {/if}
    </div>
  </div>
</div>

<style>
	.container {
    position: relative;
    padding-top: 40px;
    width: 100%;
	}
	
.owner-item {
  width: 100%;
  padding: 10px 5px;
  cursor: pointer;
  border-radius: 5px;
  line-height: 1em;
}

.tab-item-content {
  font-size: 1.25em;
  font-weight: 900;
}

@media (max-width: 768px) {
  .menu {
    height: 160px;
    overflow-y: auto;
    overflow-x: hidden;
    position: sticky;
    top: 50px;
    box-shadow: inset 0px 0px 3px 0 #333;
    overscroll-behavior: contain;

  }
  .owner-item {
    height: 36px;
    width: 100%;
    line-height: 1em;
  }
}


</style>
