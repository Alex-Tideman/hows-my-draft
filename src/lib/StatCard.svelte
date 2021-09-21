<script>
  export let item;

  const positionTag = {
    'QB': 'bg-blue-400',
    'RB': 'bg-teal-300',
    'WR': 'bg-indigo-700',
    'TE': 'bg-orange-300',
    'DEF': 'bg-gray-800',
    'K': 'bg-gray-800',
  }

  const placeholderImg = 'https://s.yimg.com/cv/apiv2/default/20180730/silhouette@x300.png'
</script>

<div class="tile p-1 m-1 {item.team ? 'bg-gray-100' : 'bg-red-600'}  u-round u-items-center">
  <div class="tile__icon">
    {#if item.round === 0}
    <p class="m-0 uppercase keeper">Keeper</p>
    {/if}
    <figure class="avatar">
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
          <div class="tag stat-tag tag--{item.pointsDiff === 0 ? 'black' : 'info'}">{item.pointsDiff >= 0 ? '+' : ''}{item.pointsDiff.toFixed(2)} <span class="tag-label">pts/gm</span></div>
          <div class="tag stat-tag tag--success">x{item.costMultiplier.toFixed(2)} <span class="tag-label">cheaper</span></div>
        </div>
        <div class="uppercase">
          <button class="btn-warning uppercase cost-btn">{item.playerRatio.toFixed(2)}</button>
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
    padding-top: 20px;
    background-color: #fff;
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
      padding-top: 8px;
      background-color: #fff;
    }
    .tag-wrapper {
      width: 60px;
      margin-right: 4px;
      font-size: .85em;
    }
    .stat-tag {
      font-size: .75em;
    }
    .tag-label {
      font-size: .5em;
      margin-left: 1px;
    }
    .cost-btn {
      font-weight: 700;
      font-size: .85em;
      width: 60px;
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