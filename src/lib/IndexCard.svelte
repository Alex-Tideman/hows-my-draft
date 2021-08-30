<script>
	let container;
  let y = 0;

  const cardHeight = 3200;
  const cards = [...Array(20).keys()].reverse().map(n => n + 1);
  const totalHeight = cards.length * cardHeight + 800;
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
    } else if (nextCard) {
      return 'will-change: transform;';
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
    {#each cards as card, i}
      <div 
        class="card" 
        style={cardStyle(card, y)}>
        <div class="tab" style={i % 2 === 0 ? "right: -2px;" : "left: 0;"}>
          {card} - Card
        </div>
        <div class="body" style={i % 2 === 0 ? "border-top-left-radius: 5px;" : "border-top-right-radius: 5px;"}>
          <div class="tab-mask" style={i % 2 === 0 ? "right: 0;" : "left: 0;"} />
          <div class="content">
            Content of card goes here...<br />
            More stuff  
          </div>
        </div>
      </div>
    {/each}
    <div class="rod" />
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

  .rod {
		position: fixed;
		top: calc(20% + 256px);
		left: 32%;
    right: 31%;
    height: 20px;
    border-radius: 5px;
    background-color: black;
    z-index: 5;
	}

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
	}

	.foreground {
		position: sticky;
		top: 100px;
		text-align: center;
		color: black;
	}
</style>