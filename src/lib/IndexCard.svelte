<script>
  import { yScroll } from '../stores/store';

  export let index;
  export let card;
  export let cardHeight;

  function getCardPosition() {
    const frontCard = ((cardHeight * (card-1)) <= $yScroll) && ($yScroll < (card * cardHeight));
    const nextCard = ((cardHeight * (card)) <= $yScroll) && ($yScroll < ((card + 1) * cardHeight));
    const flippedCard = $yScroll > (card * cardHeight);
    return { frontCard, nextCard, flippedCard };
  }

  function cardStyle() {
    const { frontCard, nextCard, flippedCard } = getCardPosition();
    if (frontCard) {
      const deg = -($yScroll % cardHeight) / 20;
      return `transform: rotateX(${deg}deg); z-index: 2;`
    } else if (flippedCard) {
      return `transform: rotateX(160deg); z-index: 1;`
    } else if (nextCard) {
      return 'will-change: transform;';
    }
  }
</script>

<div 
  class="card" 
  style={cardStyle()}>
  <div class="tab" style={index % 2 === 0 ? "right: -2px;" : "left: 0;"}>
    {card} - Card - {$yScroll}
  </div>
  <div class="body" style={index % 2 === 0 ? "border-top-left-radius: 5px;" : "border-top-right-radius: 5px;"}>
    <div class="tab-mask" style={index % 2 === 0 ? "right: 0;" : "left: 0;"} />
    <div class="content">
      Content of card goes here...<br />
      More stuff  
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