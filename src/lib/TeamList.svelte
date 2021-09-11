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
      {#each qbs as item}
        <FlatIndexCard {item} />
      {/each}
      {#each rbs as item}
        <FlatIndexCard {item} tag="bg-teal-600" />
      {/each}
      {#each wrs as item}
        <FlatIndexCard {item} tag="bg-indigo-500" />
      {/each}
      {#each tes as item}
        <FlatIndexCard {item} tag="bg-orange-400" />
      {/each}
      {#each dks as item}
        <FlatIndexCard {item} tag="bg-gray-800" />
      {/each}
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
