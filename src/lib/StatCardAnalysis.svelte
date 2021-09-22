<script>
  import { LayerCake, Svg, Html, Canvas } from 'layercake';
  import { scaleBand } from 'd3-scale';
  import Line from './components/Line.svelte';
  import Area from './components/Area.svelte';
  import AxisX from './components/AxisX.svelte';
  import AxisY from './components/AxisY.svelte';

  export let item;

  $: data = item && item?.weeks ? item.weeks?.map(w => {
    return { week: w.week, points: w.points }
  }) : [];
  

</script>
{#if data.length > 0}
  <div class="chart-container">
    <LayerCake
      padding={{ left: 20, right: 10, bottom: 15, top: 10 }}
      x="week"
      y="points"
      yDomain={[0, 50]}
      xDomain={['1', '18']}  
      data={data}
    >
      <Svg>
        <AxisX  />
        <AxisY
          ticks={4}
        />
        <Line
          stroke='#00e047'
        />
        <Area
          fill='#00e04710'
        />
      </Svg>
    </LayerCake> 
    <div class="legend">Points per Week</div>  
  </div>
{/if}

<style>
  .chart-container {
    width: 100%;
    height: 160px;
    position: relative;
    margin-left: 0px;
    flex: 0 1 calc(50% - 10px); /* <-- adjusting for margin */
    text-align: center;
    padding-bottom: 40px;
  }



  @media (max-width: 460px) {
  }

</style>