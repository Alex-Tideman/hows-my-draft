<script>
  import { LayerCake, Svg, Html, Canvas } from 'layercake';
  import { scaleBand } from 'd3-scale';

  import { owners, items } from '../stores/store';

  import Bar from './components/Bar.svelte';
  import AxisX from './components/AxisX.svelte';
  import AxisY from './components/AxisY.svelte';

  const stats = [
    { id: 1, name: "Dollars per Round" },
    { id: 2, name: "Dollars per Position" },
    { id: 3, name: "Dollars Per Team" },
  ]

  function getStatData(id, ownerId) {
    switch (id) {
      case 1:
        return items.getRoundData(ownerId);
      case 2:
        return items.getPositionData(ownerId);
      case 3:
        return items.getTeamData(ownerId)
    }
  }

  function getxDomain(id, ownerId, data) {
    switch (id) {
      case 1:
        return [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
      case 2:
        return ['QB', 'RB', 'WR', 'TE', 'DEF', 'K'];
      case 3:
        return data.map(d => d.label);
    }
  }

  function getyDomain(id, ownerId) {
    switch (id) {
      case 1:
        return [0, 100];
      case 2:
        return [0, 200];
      case 3:
        return [0, 100];
    }
  }

  function getLegend(id, ownerId) {
    switch (id) {
      case 1:
        return 'Round';
      case 2:
        return 'Position';
      case 3:
        return 'Team';
    }
  }

  $: activeOwner = { id: 0 };
  $: activeStat = stats[0];

  $: data = getStatData(activeStat.id, activeOwner.id);
  $: yDomain = getyDomain(activeStat.id, activeOwner.id);
  $: xDomain = getxDomain(activeStat.id, activeOwner.id, data);
  $: legend = getLegend(activeStat.id, activeOwner.id);

	function handleOwnerClick(owner) {
		activeOwner = owner;
	}

  function handleStatClick(stat) {
		activeStat = stat;
	}
</script>

<div class="container">
    <div class="owner-container">
        <button class="owner" style={activeOwner.id === 0 ? "background-color: #00e047; color: #333" : ""} on:click={() => handleOwnerClick({ id: 0 })} >
          Average
        </button>
        {#each $owners as item}
        <button class="owner hover-grow" style={activeOwner.id === item.id ? "background-color: #00e047; color: #333" : ""} on:click={() => handleOwnerClick(item)} >
          {item.name}
        </button>
      {/each}
    </div>
    <div class="stat-container">
      {#each stats as item}
        <button class="stat hover-grow" style={activeStat.id === item.id ? "background-color: #00e047; color: #333" : ""} on:click={() => handleStatClick(item)}>
          {item.name}
        </button>
      {/each}
    </div>
    <div class="chart-container">
      <LayerCake
        padding={{ left: 10, right: 10, bottom: 20, top: 80 }}
        x="label"
        y="value"
        xScale={scaleBand().paddingInner([0.02]).round(true)}
        yDomain={yDomain}
        xDomain={xDomain}  
        data={data}
      >
        <Svg>
          <AxisX rotate={activeOwner.id === 0 && activeStat.id === 3} />
          <AxisY
            ticks={4}
          />
          <Bar
          fill={'#4EBCD5'}
          stroke={'#333'}
          strokeWidth={3}  
          />
        </Svg>
      </LayerCake>  
      <div class="legend">{legend}</div>
    </div>
</div>

<style>
	.container {
    position: relative;
    padding-top: 40px;
    display: flex;
    flex-flow: row wrap;
    width: 100vw;
    height: auto;
    box-shadow: none;
	}
	
  .owner-container, .stat-container {
		height: 100%;
    margin: 0 5px;
    flex: 0 1 calc(20% - 10px); /* <-- adjusting for margin */
	}

  .chart-container {
    width: 600px;
    height: 400px;
    margin-left: 20px;
    flex: 0 1 calc(50% - 10px); /* <-- adjusting for margin */
    text-align: center;
  }

  .legend {
    margin: 10px 0;
  }

  .owner, .stat {
   display: inline-block;
   padding: 2px 4px;
   margin: 0 2px;
   border-radius: 5px;
   box-sizing: border-box;
   text-decoration: none;
   font-weight: 700;
   text-align: center;
   transition: all 0.2s;
   margin: 2px;
   cursor: pointer;
   position: relative;
   height: auto;
   width: 100%;
   border: 2px solid #333;
   box-shadow: -5px 0 5px -7px #333;
   background-color: var(--secondary-color);
   color: #333;
  }

  @media (max-width: 1030px) {
    .owner-container, .stat-container {
      position: absolute;
      display: inline;
      top: 360px;
      width: calc(50% - 18px);
      height: 100%;
      line-height: 1em;
      margin: 0 10px;
    }
    .owner-container {
      left: 0;
    }
    .stat-container {
      left: 50%;
    }
    .chart-container  {
      position: absolute;
      top: 0;
      height: 320px;
      width: calc(100% - 60px);
      flex: 0 1 calc(100% - 10px);
    }
    .owner, .stat {
      padding: 2px 4px;
      font-size: 12px;
      line-height: 1.5em;
      height: 44px;
    }
  }

  @media (max-width: 420px) {
    .chart-container  {
      height: 260px;
      width: 360px;
    }
    .owner-container, .stat-container { 
      top: 320px;
    }
  }


</style>
