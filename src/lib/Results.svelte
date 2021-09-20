<script>
  // import { LayerCake, Svg, Html, Canvas } from 'layercake';
  // import { scaleBand } from 'd3-scale';
  import lodash from "lodash";
  import { items, statStore } from '../stores/store';
  // import Line from './components/Line.svelte';
  // import AxisX from './components/AxisX.svelte';
  // import AxisY from './components/AxisY.svelte';
  import FlatIndexCard from './FlatIndexCard.svelte';
  const { orderBy } = lodash;

  export let activeOwner;
  export let rawStats;

  const stats = statStore(rawStats)

  $: list = items.getOwnerSet(activeOwner.id, false);
  $: ownerStats = stats.getOwnerStats(list);

</script>

<section>
  <div class="tab-container tabs-depth tabs-fill">
      <ul>
        <li class="selected"><div class="tab-item-content">Players</div></li>
        <li><div class="tab-item-content">Positions</div></li>
        <li><div class="tab-item-content">Group</div></li>
        <li><div class="tab-item-content">Shop</div></li>
      </ul>
  </div>
  {#each ownerStats as item}
    <FlatIndexCard {item} />
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
