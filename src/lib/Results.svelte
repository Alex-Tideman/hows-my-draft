<script>
  import { LayerCake, Svg, Html, Canvas } from 'layercake';
  import { scaleBand } from 'd3-scale';
  import { items } from '../stores/store';
  import Line from './components/Line.svelte';
  import AxisX from './components/AxisX.svelte';
  import AxisY from './components/AxisY.svelte';

  export let activeOwner;
  export let statId = 2;
  export let fill = '#0dd157'

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
        return [0, ownerId === 0 ? 500 : 100];
      case 2:
        return [0, ownerId === 0 ? 1000 : 200];
      case 3:
        return [0, ownerId === 0 ? 200 : 100];
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

  $: activeStat = stats.find(s => s.id === statId) ?? stats[0];

  $: data = getStatData(activeStat.id, activeOwner.id);
  $: yDomain = getyDomain(activeStat.id, activeOwner.id);
  $: xDomain = getxDomain(activeStat.id, activeOwner.id, data);
  $: legend = getLegend(activeStat.id, activeOwner.id);
  let x;
</script>

<svelte:window bind:innerWidth={x}/>
<div class="chart-container">
  <LayerCake
    padding={{ left: 20, right: 10, bottom: 20, top: 80 }}
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
      <Line
        fill={fill}
        stroke={'#333'}
        strokeWidth={3}  
      />
    </Svg>
  </LayerCake>  
  <div class="legend">{legend}</div>
</div>

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
