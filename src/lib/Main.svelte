<script>
  import { owners, items } from '../stores/store';
  import Analysis from './Analysis.svelte';
  import TeamList from './TeamList.svelte';
  import Results from './Results.svelte';

  let tab = 'draft';
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
              {item.name}
            </li>
        {/each}  
      </ul>
    </div>
    <div class="col-md-9 col-xs-12 text-left">
      <div class="tab-container">
          <ul>
              <li class={tab === 'draft' ? 'selected' : ''} on:click={() => tab = 'draft'}><div class="tab-item-content">Draft</div></li>
              <li class={tab === 'analysis' ? 'selected' : ''} on:click={() => tab = 'analysis'}><div class="tab-item-content">Analysis</div></li>
              <li class={tab === 'forecast' ? 'selected' : ''} on:click={() => tab = 'forecast'}><div class="tab-item-content">Forecast</div></li>
          </ul>
      </div>    
      {#if tab === 'draft'}
        <TeamList {activeOwner} />
      {:else if tab === 'analysis'}
        <Analysis {activeOwner} statId={1} fill="#f03d4d" />
        <Analysis {activeOwner} statId={2} fill="#0dd157" />
        <Analysis {activeOwner} statId={3} fill="#2972fa" />
      {:else if tab === 'forecast'}
        <Results {activeOwner} />
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

@media (max-width: 768px) {
  .menu {
    height: 120px;
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
