<script>
  import { owners, items } from '../stores/store';
  import FlatIndexCard from './FlatIndexCard.svelte';

  $: activeOwner = $owners[0];
  $: qbs = items.getPositionSet('QB', activeOwner.id);
  $: rbs = items.getPositionSet('RB', activeOwner.id);
  $: wrs = items.getPositionSet('WR', activeOwner.id);
  $: tes = items.getPositionSet('TE', activeOwner.id);
  $: dks = items.getPositionSets(['DEF', 'K'], activeOwner.id);
</script>

<section>
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
</section>
