<script>
  // import { LayerCake, Svg, Html, Canvas } from 'layercake';
  // import { scaleBand } from 'd3-scale';
  import lodash from "lodash";
  import { items, owners, statStore } from '../stores/store';
  // import Line from './components/Line.svelte';
  // import AxisX from './components/AxisX.svelte';
  // import AxisY from './components/AxisY.svelte';
  import StatCard from './StatCard.svelte';
  const { orderBy } = lodash;

  export let activeOwner;
  export let rawStats;

  const fullList = items.getFullSet();
  const stats = statStore(rawStats, fullList)
  const leagueList = $owners.filter(m => m.id).map(member => {
    return { member, list: items.getOwnerSet(member.id, false) }
  })
  const leagueStats = stats.getLeagueStats(leagueList)

  $: ownerList = items.getOwnerSet(activeOwner?.id, false);
  $: ownerStats = stats.getOwnerStats(ownerList)
</script>

<section>
  {#if activeOwner}
    {#each ownerStats as item}
      <StatCard {item} />
    {/each}
  {:else}
    {#each leagueStats as item}
      <StatCard {item} />
    {/each}
  {/if}
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
