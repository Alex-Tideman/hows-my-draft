<script>
  import { tick } from 'svelte';
  import { yScroll, items } from '../stores/store';
  import IndexCard from './IndexCard.svelte';
  import { scrollItemHeight, itemWidth } from './settings';

  let container;
  let itemIndexStart = 0;
  $: itemSet = items.getCurrentSet(itemIndexStart);

  const totalHeight = ($items.length * scrollItemHeight) + scrollItemHeight;

  async function parseScroll(y) {
    if (container.scrollTop >= y || container.scrollTop < y || container.scrollTop === 0) {
      yScroll.set(container.scrollTop)
    }

    if (y <= 0) {
      // do nothing
    } else if ($yScroll > ((itemIndexStart + 1)  * scrollItemHeight)) {
        await tick();
        itemSet = items.getCurrentSet(itemIndexStart + 1);
        itemIndexStart += 1;
    } else if ($yScroll < ((itemIndexStart - 1)  * scrollItemHeight + scrollItemHeight)) {
        await tick();
        itemSet = items.getCurrentSet(itemIndexStart - 1);
        itemIndexStart -= 1;
    }
  }

</script>

<div class="text">
	<span style="opacity: {1 - Math.max(0, $yScroll)}">
		scroll to flip
	</span>
</div>

<div class="fixed-container" bind:this={container} on:scroll={() => parseScroll($yScroll)}>
  <div class="card-container" style="height: {totalHeight}px">
    {#each itemSet as item, index}
      <IndexCard {item} {index} {itemIndexStart} fullIndex={$items.indexOf(item)} />
    {/each}
  </div>
</div>


<style>
	.fixed-container {
		position: fixed;
		width: 100%;
		height: 100vh;
    min-height: 100vh;
    overflow: auto;
	}


  .card-container {
		width: 100%;
  }

	.text {
		position: relative;
		width: 100%;
    color: var(--accent-color);
		text-align: center;
		padding: 3em 0.5em 0.5em 0.5em;
		box-sizing: border-box;
		pointer-events: none;
	}

	span {
		display: block;
		font-size: 1.25em;
		text-transform: uppercase;
	}
</style>