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

  let tab = 'leaderboard';
  const fullList = items.getFullSet();
  const stats = statStore(rawStats, fullList)
  const leagueList = $owners.filter(m => m.id).map(member => {
    return { member, list: items.getOwnerSet(member.id, false) }
  })
  const leaderboardList = stats.getLeagueStats(leagueList)

  $: ownerList = items.getOwnerSet(activeOwner.id, false);
  $: ownerStats = stats.getOwnerStats(ownerList);

</script>

<section>
  <div class="tab-container tabs-depth tabs-fill">
      <ul>
        <li class={tab === 'leaderboard' ? 'selected' : ''}><div class="tab-item-content {tab === 'leaderboard' ? 'bg-red-100' : ''}" on:click={() => tab = 'leaderboard'}>Leaderboard</div></li>
        <li class={tab === 'players' ? 'selected' : ''}><div class="tab-item-content {tab === 'players' ? 'bg-red-100' : ''}" on:click={() => tab = 'players'}>Players</div></li>
        <li class={tab === 'charts' ? 'selected' : ''}><div class="tab-item-content {tab === 'charts' ? 'bg-red-100' : ''}" on:click={() => tab = 'charts'}>Charts</div></li>
      </ul>
  </div>
  {#if tab === 'leaderboard'}
    {#each leaderboardList as item}
      <StatCard {item} />
    {/each}
  {:else if tab === 'players'}
    {#each ownerStats as item}
      <StatCard {item} />
    {/each}
  {:else}
    <h1 class="m-2">Charts</h1>
    <p class="m-2">Coming soon...</p>
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
