<script>
  import { yScroll, owners } from '../stores/store';
  import { 
    itemHeight, 
    scrollItemHeight, 
    endDeg, 
    degMultiplier,
    itemWidth,
    tabWidth,
    topWithoutTab
  } from './settings';

  export let index = 0;
  export let itemIndexStart = 0;
  export let fullIndex;
  export let item;

  $: owner = $owners.find(o => o.id === item.owner_id);

  $: deg =  ($yScroll % scrollItemHeight) / degMultiplier;

  function getCardPosition(index) {
    const previous = itemIndexStart === 0 ? null : index === 0;
    const current = itemIndexStart === 0 ? index === 0 : index === 1;
    const next = itemIndexStart === 0 ? index === 1 : index === 2;
    const after = itemIndexStart === 0 ? index === 2 : index === 3;
    return { previous, current, next, after };
  }

  function cardStyle(y, index) {
    const { previous, current, next, after } = getCardPosition(index);
    const defaultStyles = `height: ${itemHeight}px; width: ${itemWidth}px; border-bottom: 10px solid #e5e5e5; border-radius: 5px;`
    if (current) {
      return defaultStyles + ` transform: rotateX(-${deg}deg); z-index: 4;`
    } else if (previous) {
      return defaultStyles + ` transform: rotateX(${endDeg}deg); z-index: 1;`
    } else if (next) {
      return defaultStyles + ` will-change: transform; z-index: 3;`;
    } else if (after) {
      return defaultStyles + ` will-change: transform; z-index: 2`;
    }
    return defaultStyles
  }
</script>

<div 
  class="card" 
  style={cardStyle($yScroll, index)}>
  <div class="tab" style={`right: -2px; width: ${tabWidth}px`}>
    <div class="tab-content">
      <span class="index-number">{fullIndex + 1}</span>
      {owner.name}
    </div>
  </div>
  <div class="body">
    <div class="tab-mask" style={`left: 0; width: ${topWithoutTab}px`} />
    <div class="content">
      <div class="name">{item.name}</div>
      <div class="team">{item.team}</div>
      {#if item.img}
        <img src={item.img} alt={item.name} />
      {/if}
      <div class="cost">${item.cost}</div>
      <div class="position">{item.position}</div>
      {#if item.round === 0}
        <div class="keeper">KEEPER</div>
      {/if}
    </div>
  </div>
</div>

<style>
	.card {
		position: fixed;
		top: 100px;
		left: 50px;
    transform-origin: left bottom;
    pointer-events: none;
	}

  @media (max-width: 720px) {
	.card {
		  left: 20px;
    }
  }

  @media (max-width: 400px) {
	.card {
		  left: 10px;
    }
  }

  .tab {
    position: absolute;
    top: 0;
    height: 40px;
    padding: 5px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: var(--tertiary-color);
    border: 1px solid var(--tertiary-color);
    border-bottom: 1px solid var(--tertiary-color);
    font-size: 12px;
    font-weight: 200;
    text-overflow: ellipsis;
    box-shadow: -5px 0 5px -7px #333;
  }

  .tab-content {
    position: relative;
  }

  .tab-mask {
    position: absolute;
    top: 1px;
    height: 1px;
    background-color: var(--tertiary-color);
    /* box-shadow: -5px -1px 7px #333; */
}

  .index-number {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 8px;
  }

  .body {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 175px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: var(--tertiary-color);
    border: .5px solid var(--tertiary-color);
    box-shadow: -5px 0 5px -7px #333;
    border-top-right-radius: 5px;
    border-bottom: 11px solid black;
  }

  .content {
    padding: 15px;
    position: relative;
    height: 100%;
  }

  img {
    position: absolute;
    top: 0px;
    right: 10px;
    border-radius: 100%;
    width: 140px;
    height: auto;
  }

  .name {
    font-size: 24px;
  }

  .team {
    font-size: 16px;
  }

  .position {
    position: absolute;
    left: 10px;
    bottom: 40px;
    font-size: 32px;
    border-radius: 5px;
    padding: 6px;
    width: 60px;
    height: 40px;
    text-align: center;
    letter-spacing: 0rem;
    background: white;
    box-shadow: -5px 0 5px -7px #333;
    color: var(--pop-color);
  }

  .position {
    left: 10px;
  }
  .cost {
    position: absolute;
    right: 10px;
    bottom: 36px;
    font-size: 24px;
    border-radius: 5px;
    padding: 6px;
    width: 60px;
    height: 26px;
    text-align: center;
    letter-spacing: 0rem;
    box-shadow: -5px 0 5px -7px #333;
    color: #333;
    background: #00e047;
    font-weight: bold;
  }
  .keeper {
    position: absolute;
    bottom: 74px;
    right: 22px;
    font-size: 12px;
    font-weight: bold;
  }
</style>