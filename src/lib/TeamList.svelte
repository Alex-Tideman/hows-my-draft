<script>
  import { owners, items } from '../stores/store';
  import FlatIndexCard from './FlatIndexCard.svelte';

  $: activeOwner = $owners[0];
  $: activeQBs = $items.filter(i => i.position === 'QB' && i.owner_id === activeOwner.id);
  $: activeRBs = $items.filter(i => i.position === 'RB' && i.owner_id === activeOwner.id);
  $: activeWRs = $items.filter(i => i.position === 'WR' && i.owner_id === activeOwner.id);
  $: activeTEs = $items.filter(i => i.position === 'TE' && i.owner_id === activeOwner.id);

	function handleClick(owner) {
		activeOwner = owner;
	}
</script>

<div id="container">
    <div class="owner-container">
      {#each $owners as item, index}
        <div class="owner" style={activeOwner.id === item.id ? "background-color: #83E0A1; color: #333" : ""} on:click={() => handleClick(item)} >
          {item.name}
        </div>
      {/each}
    </div>
    <div class="qb-container">
      <div class="position-title">QB</div>
      {#each activeQBs as item, index}
        <FlatIndexCard {item} {index} />
      {/each}
    </div>
    <div class="rb-container">
      <div class="position-title">RB</div>
      {#each activeRBs as item, index}
        <FlatIndexCard {item} {index} />
      {/each}
    </div>
    <div class="wr-container">
      <div class="position-title">WR</div>
      {#each activeWRs as item, index}
        <FlatIndexCard {item} {index} />
      {/each}
    </div>
    <div class="te-container">
      <div class="position-title">TE</div>
      {#each activeTEs as item, index}
        <FlatIndexCard {item} {index} />
      {/each}
    </div>
</div>

<style>
	#container {
    position: relative;
		height: 100vh;
    width: 100%;
    overflow: auto;
	}
	
  .owner-container, .qb-container, .rb-container, .wr-container, .te-container {
    position: absolute;
    top: 50px;
    bottom: 0;
    width: 19%;
		height: auto;
    overflow-y: auto;
    overflow-x: hidden;
	}

  .owner-container {
    left: 0;
  }

  .qb-container {
    left: 20%;
	}

  .rb-container {
    left: 40%;
  }

  .wr-container {
    left: 60%;
  }

  .te-container {
    left: 80%;
  }

@media (max-width: 720px) {
    #container {
      position: relative;
      width: 100%;
    }
    .owner-container, .qb-container, .rb-container, .wr-container, .te-container {
    position: relative;
    width: 100%;
	}

  .owner-container {
    display: inline-flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    justify-content: center;
	}

  .owner-container {
    left: 0;
  }

  .qb-container {
    left: 0;
	}

  .rb-container {
    left: 0;
  }

  .wr-container {
    left: 0;
  }

  .te-container {
    left: 0;
  }

  .owner {
    flex: 0 1 calc(45% - 8px); /* <-- adjusting for margin */
    margin: 0 8px;
  }
}


  .owner, .position-title {
    position: relative;
    height: auto;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    background-color: #333;
    color: #f5f5f5;

  }

  .owner {
    cursor: pointer;
  }

  .position-title {
    text-align: center;
  }

</style>
