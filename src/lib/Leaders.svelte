<script>
  import lodash from "lodash";
  import { items, owners, statStore } from '../stores/store';
  import LeaderCard from './LeaderCard.svelte';

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

  const positionTag = {
    'QB': 'bg-blue-400',
    'RB': 'bg-teal-300',
    'WR': 'bg-indigo-700',
    'TE': 'bg-orange-300',
    'DEF': 'bg-gray-800',
    'K': 'bg-gray-800',
  }

</script>

<section>
  <div class="row">
    <div class="col-xs-12 col-md-6">
      {#each leagueStats.top5 as item, index}
        <LeaderCard {item} {index} colorByIndex={true}  />
      {/each}  
    </div>
    <div class="col-xs-12 col-md-6">
      {#each leagueStats.bottom5 as item, index}
        <LeaderCard {item} {index} colorByIndex={true} top={false}  />
      {/each}
    </div>
  </div>
  <div class="row">
    <div class="position-title {positionTag['QB']}">QB</div>
    <div class="col-xs-12 col-md-6">
      {#each qbStats.top5 as item, index}
        <LeaderCard {item} {index} colorByIndex={true}  />
      {/each}
    </div>
    <div class="col-xs-12 col-md-6">
      {#each qbStats.bottom5 as item, index}
        <LeaderCard {item} {index} colorByIndex={true} top={false} />
      {/each}
    </div>
  </div>
  <div class="row">
    <div class="position-title {positionTag['RB']}">RB</div>
    <div class="col-xs-12 col-md-6">
      {#each rbStats.top5 as item, index}
        <LeaderCard {item} {index} colorByIndex={true}  />
      {/each}
    </div>
    <div class="col-xs-12 col-md-6">
      {#each rbStats.bottom5 as item, index}
        <LeaderCard {item} {index} colorByIndex={true} top={false} />
      {/each}
    </div>
  </div>
  <div class="row">
    <div class="position-title {positionTag['WR']}">WR</div>
    <div class="col-xs-12 col-md-6">
      {#each wrStats.top5 as item, index}
        <LeaderCard {item} {index} colorByIndex={true}  />
      {/each}
    </div>
    <div class="col-xs-12 col-md-6">
      {#each wrStats.bottom5 as item, index}
        <LeaderCard {item} {index} colorByIndex={true} top={false} />
      {/each}
    </div>
  </div>
  <div class="row">
    <div class="position-title {positionTag['TE']}">TE</div>
    <div class="col-xs-12 col-md-6">
      {#each teStats.top5 as item, index}
        <LeaderCard {item} {index} colorByIndex={true}  />
      {/each}
    </div>
    <div class="col-xs-12 col-md-6">
      {#each teStats.bottom5 as item, index}
        <LeaderCard {item} {index} colorByIndex={true} top={false} />
      {/each}
    </div>
  </div>
</section>

<style>

  .position-title {
    height: 30px;
    width: 100%;
    margin: 10px;
    padding: 2px 0;
    font-weight: 900;
    color: white;
    text-align: center;
  }
  @media (max-width: 420px) {
    .chart-container  {
      height: 220px;
      width: 320px;
    }
  }


</style>
