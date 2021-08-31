<script>
  import { yScroll } from '../stores/store';

  export let index = 0;
  export let item;
  export let itemHeight;

  let itemNumber = index + 1;

  function getCardPosition(y) {
    const frontCard = ((itemHeight * (index)) <= y) && (y < ((index + 1) * itemHeight));
    const nextCard = ((itemHeight * (index + 1)) <= y) && (y < ((index + 2) * itemHeight));
    const flippedCard = y > ((index + 1) * itemHeight);
    return { frontCard, nextCard, flippedCard };
  }

  function cardStyle(y) {
    const { frontCard, nextCard, flippedCard } = getCardPosition(y);
    if (frontCard) {
      const deg = -(y % itemHeight) / 20;
      return `transform: rotateX(${deg}deg); z-index: 3;`
    } else if (flippedCard) {
      return `transform: rotateX(160deg); z-index: 1;`
    } else if (nextCard) {
      return 'will-change: transform; z-index: 2';
    }
  }
</script>

<div 
  class="card" 
  style={cardStyle($yScroll)}>
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