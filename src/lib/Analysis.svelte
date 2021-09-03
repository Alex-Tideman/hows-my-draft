<script>
  import { LayerCake, Svg, Html, Canvas } from 'layercake';
  import { scaleBand } from 'd3-scale';

  import { owners, items } from '../stores/store';

  import Line from './components/Line.svelte';
  import Area from './components/Area.svelte';
  import AxisX from './components/AxisX.svelte';
  import AxisY from './components/AxisY.svelte';

  const data = [{ x: 0, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 3 }];

  const stats = [
    { id: 1, name: "Dollars per Position" },
    { id: 2, name: "Dollars per Round" },
  ]

  $: activeOwner = $owners[0];
  $: activeChart = stats[0];

  $: positionData = items.getPositionData(activeOwner.id);
  $: roundData = items.getRoundData(activeOwner.id);

	function handleClick(owner) {
		activeOwner = owner;
	}
</script>

<div id="container">
    <div class="owner-container">
      {#each $owners as item}
        <button class="owner" style={activeOwner.id === item.id ? "background-color: #83E0A1; color: #333" : ""} on:click={() => handleClick(item)} >
          {item.name}
        </button>
      {/each}
    </div>
    <div class="stat-container">
      {#each stats as item}
        <button class="owner" >
          {item.name}
        </button>
      {/each}
    </div>
    <div class="chart-container">
      <LayerCake
        padding={{ left: 20, right: 10, bottom: 20, top: 50 }}
        x='round'
        y='cost'
        yDomain={[0, 100]}
        data={roundData}
      >
        <Svg>
          <AxisX/>
          <AxisY
            ticks={4}
          />
          <Line/>
          <Area/>
        </Svg>
      </LayerCake>  
    </div>
</div>

<style>
	#container {
    position: relative;
    padding-top: 40px;
    display: inline-flex;
    flex-flow: row wrap;
    width: 100%;
    height: auto;
    overflow: auto;
	}
	
  .owner-container, .stat-container {
		height: 100%;
    margin: 0 5px;
    flex: 0 1 calc(20% - 10px); /* <-- adjusting for margin */
	}

  .chart-container {
    height: 400px;
    width: 600px;
  }

  .owner {
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
  }

  .owner, .title {
    position: relative;
    height: auto;
    width: 100%;
    background-color: #f5f5f5;
    box-shadow: -5px 0 5px -7px #333;
    padding: 10px 0;
  }

  .position-title, .team-title {
    text-align: center;
    background-color: #333;
    box-shadow: -5px 0 5px -7px #f5f5f5;
    color: #f5f5f5;
  }

  @media (max-width: 762px) {
    #container {
      width: 250vw;
    }
}

</style>
