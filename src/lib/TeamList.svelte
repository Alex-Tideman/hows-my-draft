<script>
  import { owners, items } from '../stores/store';
  import FlatIndexCard from './FlatIndexCard.svelte';

  $: activeOwner = $owners[0];
  $: qbs = items.getPositionSet('QB', activeOwner.id);
  $: rbs = items.getPositionSet('RB', activeOwner.id);
  $: wrs = items.getPositionSet('WR', activeOwner.id);
  $: tes = items.getPositionSet('TE', activeOwner.id);
  $: dks = items.getPositionSets(['DEF', 'K'], activeOwner.id);
	function handleClick(owner) {
		activeOwner = owner;
	}
</script>

<div id="container">
    <div class="owner-container">
      {#each $owners as item}
        <button class="owner" style={activeOwner.id === item.id ? "background-color: #00e047; color: #333" : ""} on:click={() => handleClick(item)} >
          {item.name}
        </button>
      {/each}
    </div>
    <div class="qb-container">
      <div class="position-title">QB</div>
      {#each qbs as item}
        <FlatIndexCard {item} />
      {/each}
    </div>
    <div class="rb-container">
      <div class="position-title">RB</div>
      {#each rbs as item}
        <FlatIndexCard {item} />
      {/each}
    </div>
    <div class="wr-container">
      <div class="position-title">WR</div>
      {#each wrs as item}
        <FlatIndexCard {item} />
      {/each}
    </div>
    <div class="te-container">
      <div class="position-title">TE</div>
      {#each tes as item}
        <FlatIndexCard {item} />
      {/each}
    </div>
    <div class="dk-container">
      <div class="position-title">DEF / K</div>
      {#each dks as item}
        <FlatIndexCard {item} />
      {/each}
    </div>
</div>

<style>
	#container {
    position: relative;
    padding-top: 40px;
    display: inline-flex;
    flex-flow: row wrap;
    width: 100%;
    height: auto;
    overflow: auto;
	}
	
  .owner-container {
    height: 100%;
    margin: 0 5px;
    width:  220px;
  }
  .qb-container, .rb-container, .wr-container, .te-container, .dk-container {
		height: 100%;
    margin: 0 5px;
    width:  calc(18% - 40px);
	}

  .owner {
   display: inline-block;
   padding: 2px 4px;
   margin: 0 2px;
   border: 0.16em solid rgba(255,255,255,0);
   border-radius: 5px;
   box-sizing: border-box;
   text-decoration: none;
   font-weight: 300;
   text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
   text-align: center;
   transition: all 0.2s;
   margin: 2px;
   cursor: pointer;
  }

  .owner, .position-title {
    position: relative;
    height: auto;
    width: 100%;
    background-color: #f5f5f5;
    box-shadow: -5px 0 5px -7px #333;
    padding: 10px 0;
  }

  .position-title {
    text-align: center;
    background-color: #333;
    box-shadow: -5px 0 5px -7px #f5f5f5;
    color: #f5f5f5;
  }

  @media (max-width: 1200px) {
    .owner-container {
      flex: 0 2 calc(100% - 10px); /* <-- adjusting for margin */
    }
    .qb-container, .rb-container, .wr-container, .te-container, .dk-container {
		height: 100%;
    margin: 0 5px;
    flex: 0 1 calc(50% - 10px); /* <-- adjusting for margin */
    }
  }

  @media (max-width: 460px) {
    .qb-container, .rb-container, .wr-container, .te-container, .dk-container {
      flex: 0 1 calc(100% - 10px); /* <-- adjusting for margin */
    }
  }


</style>
