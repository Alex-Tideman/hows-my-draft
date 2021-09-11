<script>
  import { owners, items } from '../stores/store';
  import Analysis from './Analysis.svelte';
  import TeamList from './TeamList.svelte';

  let tab = 'team';
  $: activeOwner = $owners[0];

  function handleClick(owner) {
		activeOwner = owner;
	}
</script>

<div class="container">

  <div class="grid grid-gap-3">
    <div class="grid-c-3">
      {#each $owners as item}
        <button class="owner-btn hover-grow" style={activeOwner.id === item.id ? "background-color: #00e047; color: #333;" : ""} on:click={() => handleClick(item)} >
          {item.name}
        </button>
      {/each}
    </div>
    <div class="grid-c-9 text-left">
      <div class="tab-container">
          <ul>
              <li class={tab === 'team' ? 'selected' : ''} on:click={() => tab = 'team'}><div class="tab-item-content">Team</div></li>
              <li class={tab === 'positions' ? 'selected' : ''} on:click={() => tab = 'positions'}><div class="tab-item-content">Positions</div></li>
              <li class={tab === 'draft' ? 'selected' : ''} on:click={() => tab = 'draft'}><div class="tab-item-content">Draft</div></li>
          </ul>
      </div>    
      {#if tab === 'team'}
        <TeamList />
      {:else if tab === 'positions'}
        <Analysis {activeOwner} activeStatId={1} />
      {:else if tab === 'draft'}
        <Analysis {activeOwner} />
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
	
.owner-btn {
  width: 100%;
  background-color: #2972fa;
  color: white;
}

</style>
