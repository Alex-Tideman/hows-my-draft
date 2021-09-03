<script>
  import { LayerCake, Svg, Html, Canvas } from 'layercake';
  import { scaleBand } from 'd3-scale';
	import { browser } from '$app/env';

  import { owners, items } from '../stores/store';

  import Line from './components/Line.svelte';
  import Bar from './components/Bar.svelte';
  import AxisX from './components/AxisX.svelte';
  import AxisY from './components/AxisY.svelte';

  const stats = [
    { id: 1, name: "Dollars per Position" },
    { id: 2, name: "Dollars per Round" },
  ]

  $: activeOwner = { id: 0 };
  $: activeStat = stats[0];

  $: positionData = items.getPositionData(activeOwner.id);
  $: roundData = items.getRoundData(activeOwner.id);

	function handleOwnerClick(owner) {
		activeOwner = owner;
	}

  function handleStatClick(stat) {
		activeStat = stat;
	}

  $: data = activeStat.id === 1 ? positionData : roundData;
  $: yDomain = activeStat.id === 1 ? [0, activeOwner.id === 0 ? 1000 : 200] : [0, activeOwner.id === 0 ? 500 : 100];
  $: xDomain = activeStat.id === 1 ? ['QB', 'RB', 'WR', 'TE', 'DEF', 'K'] : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
</script>

<div id="container">
    <div class="owner-container">
        <button class="owner" style={activeOwner.id === 0 ? "background-color: #00e047; color: #333" : ""} on:click={() => handleOwnerClick({ id: 0 })} >
          All
        </button>
        {#each $owners as item}
        <button class="owner" style={activeOwner.id === item.id ? "background-color: #00e047; color: #333" : ""} on:click={() => handleOwnerClick(item)} >
          {item.name}
        </button>
      {/each}
    </div>
    <div class="stat-container">
      {#each stats as item}
        <button class="stat" style={activeStat.id === item.id ? "background-color: #00e047; color: #333" : ""} on:click={() => handleStatClick(item)}>
          {item.name}
        </button>
      {/each}
    </div>
    <div class="chart-container">
      <LayerCake
        padding={{ left: 20, right: 10, bottom: 20, top: 50 }}
        x="label"
        y="value"
        xScale={scaleBand().paddingInner([0.02]).round(true)}
        yDomain={yDomain}
        xDomain={xDomain}  
        data={data}
      >
        <Svg>
          <AxisX/>
          <AxisY
            ticks={4}
          />
          <Bar/>
        </Svg>
      </LayerCake>  
    </div>
</div>

<style>
	#container {
    position: relative;
    padding-top: 40px;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: auto;
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
  }

  .owner, .stat {
   display: inline-block;
   padding: 2px 4px;
   margin: 0 2px;
   border: 0.16em solid rgba(255,255,255,0);
   border-radius: 5px;
   box-sizing: border-box;
   text-decoration: none;
   font-weight: 300;
   text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
   text-align: center;
   transition: all 0.2s;
   margin: 2px;
   cursor: pointer;
   position: relative;
    height: auto;
    width: 100%;
    background-color: #f5f5f5;
    box-shadow: -5px 0 5px -7px #333;
    padding: 10px 0;
  }

  @media (max-width: 762px) {
    .owner-container, .stat-container {
      height: 100%;
      margin: 0 5px;
      flex: 0 1 calc(50% - 10px); /* <-- adjusting for margin */
    }
    .chart-container  {
      flex: 0 1 calc(100% - 10px);
    }


    .owner, .stat {
      padding: 1px 2px;
      margin: 0 1px;
      font-size: 12px;
    }
  }

</style>
