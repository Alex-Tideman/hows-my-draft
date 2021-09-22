<script>
    import { owners } from '../stores/store';
    import Analysis from './Analysis.svelte';
    import TeamList from './TeamList.svelte';
    import Results from './Results.svelte';

    export let rawStats;

    let tab = 'performance';
    $: activeOwner = $owners[0];
    function handleClick(owner) {
      activeOwner = owner;
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
              <li class={tab === 'leaderboard' ? 'selected' : ''} on:click={() => tab = 'leaderboard'}><div class="tab-item-content {tab === 'leaderboard' ? 'bg-red-100' : ''}">Leaderboard</div></li>
              <li class={tab === 'performance' ? 'selected' : ''} on:click={() => tab = 'performance'}><div class="tab-item-content {tab === 'performance' ? 'bg-red-100' : ''}">Performance</div></li>
              <li class={tab === 'strategy' ? 'selected' : ''} on:click={() => tab = 'strategy'}><div class="tab-item-content {tab === 'strategy' ? 'bg-red-100' : ''}">Strategy</div></li>
              <li class={tab === 'cost' ? 'selected' : ''} on:click={() => tab = 'cost'}><div class="tab-item-content {tab === 'cost' ? 'bg-red-100' : ''}">Cost</div></li>
          </ul>
      </div>
      {#if tab === 'leaderboard'}
        <Results activeOwner={null} {rawStats} />
      {:else if tab === 'cost'}
        <TeamList {activeOwner} />
      {:else if tab === 'strategy'}
        <Analysis {activeOwner} statId={1} fill="#f03d4d" />
        <Analysis {activeOwner} statId={2} fill="#0dd157" />
        <Analysis {activeOwner} statId={3} fill="#2972fa" />
      {:else if tab === 'performance'} 
        <Results {activeOwner} {rawStats} />
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

  .tab-item-content {
    font-size: .85em;
    font-weight: 900;
  }
}


</style>
