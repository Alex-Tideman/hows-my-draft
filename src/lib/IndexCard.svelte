<script>
  import { yScroll } from '../stores/store';
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
  <div class="tab" style={fullIndex % 2 === 0 ? `right: -2px; width: ${tabWidth}px` : `left: 0; width: ${tabWidth}px`}>
    <div class="tab-content">
      <span class="index-number">{fullIndex + 1}</span>
      {item.name}  
    </div>
  </div>
  <div class="body" style={fullIndex % 2 === 0 ? "border-top-left-radius: 5px;" : "border-top-right-radius: 5px;"}>
    <div class="tab-mask" style={fullIndex % 2 === 0 ? `left: 0; width: ${topWithoutTab}px` : `right: 0; width: ${topWithoutTab}px`} />
    <div class="content">
      {item.team}<br />
      {item.position}  
    </div>
  </div>
</div>

<style>
	.card {
		position: fixed;
		top: 80px;
		left: 50px;
    transform-origin: left bottom;
	}

  .tab {
    position: absolute;
    top: 0;
    height: 40px;
    padding: 5px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: #83E0A1;
    border: 1px solid #83E0A1;
    border-bottom: 1px solid #83E0A1;
    font-size: 12px;
    text-overflow: ellipsis;
  }

  .tab-content {
    position: relative;
  }

  .tab-mask {
    position: absolute;
    top:-1px;
    height: 1px;
    border-top: 1px solid #333;
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
    height: 220px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #83E0A1;
    border: .5px solid #83E0A1;
    box-shadow: -5px 0 5px -7px #333
  }

  .content {
    padding: 15px;
    font-size: 24px;
  }
</style>