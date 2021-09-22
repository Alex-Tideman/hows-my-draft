<script>
  import lodash from "lodash";
  import { items, owners, statStore } from '../stores/store';
  import StatCard from './StatCard.svelte';

  export let rawStats;

  const fullList = items.getFullSet();
  const stats = statStore(rawStats, fullList)
  const leagueList = $owners.filter(m => m.id).map(member => {
    return { member, list: items.getOwnerSet(member.id, false) }
  })
  const leagueStats = stats.getLeagueStats(leagueList)
  const qbStats = stats.getPositionLeaderStats('QB')
  const rbStats = stats.getPositionLeaderStats('RB')
  const wrStats = stats.getPositionLeaderStats('WR')
  const teStats = stats.getPositionLeaderStats('TE')

</script>

<section>
  {#each leagueStats as item, index}
    <StatCard {item} {index} colorByIndex={true}  />
  {/each}
  <div class="my-5">
    {#each qbStats as item, index}
      <StatCard {item} {index} colorByIndex={true} />
    {/each}
  </div>
  <div class="my-5">
    {#each rbStats as item, index}
      <StatCard {item} {index} colorByIndex={true} />
    {/each}
  </div>
  <div class="my-5">
    {#each wrStats as item, index}
      <StatCard {item} {index} colorByIndex={true} />
    {/each}
  </div>
  <div class="my-5">
    {#each teStats as item, index}
      <StatCard {item} {index} colorByIndex={true} />
    {/each}
  </div>
  <div class="my-5">

  </div>
</section>

<style>
  @media (max-width: 420px) {
    .chart-container  {
      height: 220px;
      width: 320px;
    }
  }


</style>
