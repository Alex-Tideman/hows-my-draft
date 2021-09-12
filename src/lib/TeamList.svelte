<script>
  import { owners, items } from '../stores/store';
  import FlatIndexCard from './FlatIndexCard.svelte';
  import lodash from 'lodash';
  const { groupBy, orderBy } = lodash;

  export let activeOwner = $owners[0];
  $: list = items.getOwnerSet(activeOwner.id);
  $: sortedItems = orderBy(list, 'cost', 'desc');
</script>

<section>
  {#each sortedItems as item}
    <FlatIndexCard {item} />
  {/each}
</section>
