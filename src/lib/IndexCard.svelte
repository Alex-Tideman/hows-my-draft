<script>
	let container;
  let y = 0;

  const cardHeight = 3200;
  const cards = [5,4,3,2,1];
  const totalHeight = cards.length * cardHeight;
  function parseScroll() {
    y = container.scrollTop
  }

  function getCardPosition(card, y) {
    const frontCard = ((cardHeight * (card-1)) <= y) && (y < (card * cardHeight));
    const nextCard = ((cardHeight * (card)) <= y) && (y < ((card + 1) * cardHeight));
    const flippedCard = y > (card * cardHeight);
    return { frontCard, nextCard, flippedCard };
  }

  function cardStyle(card, y) {
    const { frontCard, nextCard, flippedCard } = getCardPosition(card, y);
    if (frontCard) {
      const deg = -(y % cardHeight) / 20;
      return `transform: rotateX(${-(y % cardHeight) / 20}deg); z-index: 2;`
    } else if (flippedCard) {
      return `transform: rotateX(160deg); z-index: 1;`
    }
  }
</script>

<div class="text">
	<span style="opacity: {1 - Math.max(0, y / 40)}">
		scroll down
	</span>
	<div class="foreground">
		You have scrolled {y} pixels
	</div>
</div>

<div class="parallax-container" bind:this={container} on:scroll={parseScroll}>
  <div class="card-container" style="height: {totalHeight}px">
    {#each cards as card}
      <div 
        class="card" 
        style={cardStyle(card, y)}>
        Index Card {card}
      </div>
    {/each}
    
  </div>
</div>


<style>
	.parallax-container {
		position: fixed;
		width: 100%;
		height: 100vh;
    overflow: auto;
	}

  .card-container {
		width: 100%;
		height: 4000px;
  }

	.card {
		position: fixed;
		top: 20%;
		left: 33%;
		width: 400px;
    height: 260px;
    border: 1px solid black;
    border-radius: 4px;
    background-color: white;
		will-change: transform;
    transform-origin: left bottom;
	}

	.text {
		position: relative;
		width: 100%;
		height: 300vh;
		color: rgb(220,113,43);
		text-align: center;
		padding: 4em 0.5em 0.5em 0.5em;
		box-sizing: border-box;
		pointer-events: none;
	}

	span {
		display: block;
		font-size: 1em;
		text-transform: uppercase;
		will-change: transform, opacity;
	}

	.foreground {
		position: sticky;
		top: 100px;
		text-align: center;
		color: black;
	}
</style>