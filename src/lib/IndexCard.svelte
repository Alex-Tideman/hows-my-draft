<script>
  import { yScroll } from '../stores/store';
  export let index = 0;
  export let itemIndexStart = 0;
  export let item;
  export let itemHeight;

  function getCardPosition(index) {
    const previous = itemIndexStart === 0 ? null : index === 0;
    const current = itemIndexStart === 0 ? index === 0 : index === 1;
    const next = itemIndexStart === 0 ? index === 1 : index === 2;
    const after = itemIndexStart === 0 ? index === 2 : index === 3;
    return { previous, current, next, after };
  }

  function cardStyle(y, index) {
    const { previous, current, next, after } = getCardPosition(index);
    if (current) {
      const deg = -(y % itemHeight) / 4;
      return `transform: rotateX(${deg}deg); z-index: 4;`
    } else if (previous) {
      return `transform: rotateX(160deg); z-index: 1;`
    } else if (next) {
      return 'will-change: transform; z-index: 3';
    } else if (after) {
      return 'will-change: transform; z-index: 2';
    }
  }
</script>

<div 
  class="card" 
  style={cardStyle($yScroll, index)}>
  <div class="tab" style={index % 2 === 0 ? "right: -2px;" : "left: 0;"}>
    {item.name}
  </div>
  <div class="body" style={index % 2 === 0 ? "border-top-left-radius: 5px;" : "border-top-right-radius: 5px;"}>
    <div class="tab-mask" style={index % 2 === 0 ? "right: 0;" : "left: 0;"} />
    <div class="content">
      {item.team}<br />
      {item.position}  
    </div>
  </div>
</div>

<style>
	.card {
		position: fixed;
		top: 20%;
		left: 33%;
    width: 450px;
    height: 260px;
    transform-origin: left bottom;
	}

  .tab {
    position: absolute;
    top: 0;
    width: 170px;
    height: 40px;
    padding: 5px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: white;
    border: 1px solid black;
    border-bottom: 1px solid white;
  }

  .tab-mask {
    position: absolute;
    top:-1px;
    width: 180px;
    height: 1px;
    background-color:#fff;
}

  .body {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 220px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: white;
    border: .5px solid black;
  }

  .content {
    padding: 5px;
  }
</style>