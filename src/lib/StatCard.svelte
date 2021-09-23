<script>
  export let item;
  export let index;
  export let colorByIndex = false;

  const positionTag = {
    'QB': 'bg-blue-400',
    'RB': 'bg-teal-300',
    'WR': 'bg-indigo-700',
    'TE': 'bg-orange-300',
    'DEF': 'bg-gray-800',
    'K': 'bg-gray-800',
  }

  const colorIndex = {
    0: 'bg-green-500',
    1: 'bg-green-400',
    2: 'bg-green-300',
    3: 'bg-green-200',
    4: 'bg-green-100',
    5: 'bg-red-100',
    6: 'bg-red-200',
    7: 'bg-red-300',
    8: 'bg-red-400',
    9: 'bg-red-500',
  }
  

  const placeholderImg = 'https://s.yimg.com/cv/apiv2/default/20180730/silhouette@x300.png'
</script>

<div class="tile p-1 m-1 {item.team ? 'bg-gray-200' : 'bg-red-400'} u-round u-items-center">
  <div class="tile__icon">
    {#if item.round === 0}
    <p class="m-0 uppercase keeper">Keeper</p>
    {/if}
    <figure class="avatar {item.player ? 'player-avatar' : ''}  {colorByIndex ? colorIndex[index] : ''}  ">
      <img src={item.img ? item.img : placeholderImg} alt={item.name} />
    </figure>
  </div>
  <div class="tile__container m-0">
      <p class="tile__title m-0">{item.name}</p>
      {#if item.position && item.team}
        <div class="tag tag--info {positionTag[item.position]}">{item.position}</div><span class="subtitle">{item.team}</span>
      {/if}
  </div>
  <div class="tile__buttons m-0">
    <div class="u-flex">
        <div class="tag-wrapper">
          {#if item.costMultiplier}
          <div class="tag stat-tag tag--info text-gray-000">{item.pointsDiff >= 0 ? '+' : ''}{item.pointsDiff.toFixed(2)} <span class="tag-label">pts/gm</span></div>
          <div class="tag stat-tag tag--link">x{item.costMultiplier.toFixed(2)} <span class="tag-label">cheaper</span></div>
          {/if}
        </div>
        <div class="uppercase">
          <button class="btn-warning uppercase cost-btn">{item?.playerRatio?.toFixed(2) ?? '0.00'}</button>
        </div>
    </div>  
  </div>
</div>

<style>

  .tile {
    width: 100%;
    position: relative;
  }

  .tile__title {
    font-size: 1.15em;
  }

  .subtitle {
    font-size: .9em;
    padding: 2px 10px;
    color: #333;
  }

  .avatar {
    height: 6rem;
    width: 6rem;
    padding-top: 0;
    background-color: #fff;
  }

  .player-avatar {
    padding-top: 16px;
  }

  .point-btn {
    font-weight: 300;
    font-size: 1em;
    width: auto;
    color: #333 !important;
  }

  .tile__buttons {
    text-align: right;
  }

  .tag-wrapper {
    width: 100px;
    margin-right: 10px;
  }

  .stat-tag {
    width: 100%;
  }

  .tag-label {
      font-size: .9em;
      margin-left: 5px;
    }

  .cost-btn {
    font-weight: 700;
    font-size: 1.15em;
    width: 100px;
    color: #333 !important;
  }

  .keeper {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 6rem;
    font-weight: 500;
    font-size: .85em;
    line-height: .85em;
    padding: 3px 6px;
    background: #0dd157;
    z-index: 10;
    text-align: center;
  }

  @media (max-width: 460px) {
    .avatar {
      height: 3rem;
      width: 3rem;
      padding-top: 0px;
      background-color: #fff;
    }
    .player-avatar {
      padding-top: 6px;
    }
    .tile__title {
      font-size: .65em;
    }
    .tag-wrapper {
      width: 70px;
      margin-right: 4px;
      font-size: .85em;
    }
    .stat-tag {
      font-size: .75em;
    }
    .tag-label {
      font-size: .6em;
      margin-left: 3px;
    }
    .cost-btn {
      font-weight: 700;
      font-size: .80em;
      width: 55px;
      padding: 5px 0;
    }
    .keeper {
      position: absolute;
      bottom: 10px;
      left: 10px;
      width: 3rem;
      font-size: .55em;
    }
  }

</style>