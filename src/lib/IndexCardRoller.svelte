<script>
import { tick } from 'svelte';

  import { yScroll, items } from '../stores/store';
  import IndexCard from "./IndexCard.svelte";

  let container;
  let itemIndexStart = 0;
  $: itemSet = items.getCurrentSet(itemIndexStart);

  const itemHeight = 720;
  // const cards = [...Array(20).keys()].reverse().map(n => n + 1);
  const totalHeight = $items.length * itemHeight + 720;

  async function parseScroll(y) {
    if (container.scrollTop >= y|| container.scrollTop <= y || container.scrollTop === 0) {
      yScroll.set(container.scrollTop)
    }

    if ($yScroll > ((itemIndexStart + 1)  * itemHeight)) {
        itemSet = items.getCurrentSet(itemIndexStart + 1);
        itemIndexStart += 1;
        await tick();
    } else if ($yScroll < ((itemIndexStart - 1)  * itemHeight)) {
        itemSet = items.getCurrentSet(itemIndexStart - 1);
        itemIndexStart -= 1;
        await tick();
    }
  }

</script>

<div class="text">
	<span style="opacity: {1 - Math.max(0, $yScroll)}">
		scroll down
	</span>
	<div class="foreground">
		You have scrolled {$yScroll} pixels
	</div>
</div>

<div class="fixed-container" bind:this={container} on:scroll={() => parseScroll($yScroll)}>
  <div class="card-container" style="height: {totalHeight}px">
    {#each itemSet as item, index}
      <IndexCard {item} {index} {itemHeight} />
    {/each}
    <div class="rod" />
  </div>
</div>


<style>
	.fixed-container {
		position: fixed;
		width: 100%;
		height: 100vh;
    overflow: auto;
	}

  .card-container {
		width: 100%;
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

	.text {
		position: relative;
		width: 100%;
		height: 300vh;
		color: cargb(220,113,43);
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