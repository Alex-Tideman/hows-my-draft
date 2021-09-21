<script>
  import { owners, items } from '../stores/store';
  import CostCard from './CostCard.svelte';
  import lodash from 'lodash';
  const { groupBy, orderBy } = lodash;

  export let activeOwner = $owners[0];
  $: list = items.getOwnerSet(activeOwner.id, true);
  $: sortedItems = orderBy(list, 'cost', 'desc');
</script>

<section>
  {#each sortedItems as item}
    <CostCard {item} />
  {/each}
</section>
