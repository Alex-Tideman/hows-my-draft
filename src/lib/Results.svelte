<script>
  import Lazy from 'svelte-lazy';
  import { items, statStore } from '../stores/store';
  import StatCard from './StatCard.svelte';
  import StatCardAnalysis from "./StatCardAnalysis.svelte";

  export let activeOwner;
  export let rawStats;

  const fullList = items.getFullSet();
  const stats = statStore(rawStats, fullList)

  $: ownerList = items.getOwnerSet(activeOwner?.id, false);
  $: ownerStats = stats.getOwnerStats(ownerList);

  const seasonWeeks = ['1', '2', '3', '4', '5']
  function getItemData(item) {
    return seasonWeeks.map(w => {
      if (!item.weeks || !item.weeks.length) {
        return { week: w, points: 0 }
      }
      const playerWeek = item.weeks.find(pw => pw.week === w);
      if (playerWeek) {
        return playerWeek;
      }
      return { week: w, points: 0 }
    })
  }

</script>

<section>
  {#each ownerStats as item, index}
    <StatCard {item} {index} />
    <Lazy height={160}>
      <StatCardAnalysis data={getItemData(item)} />
    </Lazy>    
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
