<script>
  import lodash from "lodash";
  import { items, owners, statStore } from '../stores/store';
  import StatCard from './StatCard.svelte';
  import StatCardAnalysis from "./StatCardAnalysis.svelte";
  const { orderBy } = lodash;

  export let activeOwner;
  export let rawStats;

  const fullList = items.getFullSet();
  const stats = statStore(rawStats, fullList)

  $: ownerList = items.getOwnerSet(activeOwner?.id, false);
  $: ownerStats = stats.getOwnerStats(ownerList);
</script>

<section>
  {#each ownerStats as item, index}
    <StatCard {item} {index} on:click={() => handleClick(index)}/>
    <StatCardAnalysis {item} />
  {/each}
</section>

<style>
  .chart-container {
    width: 800px;
    height: 400px;
    margin-left: 20px;
    flex: 0 1 calc(50% - 10px); /* <-- adjusting for margin */
    text-align: center;
  }

  .legend {
    margin: 20px 0 40px 0;
  }

  @media (max-width: 1030px) {
  }

  @media (max-width: 420px) {
    .chart-container  {
      height: 220px;
      width: 320px;
    }
  }


</style>
