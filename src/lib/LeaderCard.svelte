<script>
  export let item;
  export let index;
  export let colorByIndex = false;
  export let top = true;

  const topColorIndex = {
    0: 'bg-green-500 text-gray-000',
    1: 'bg-green-400 text-gray-900',
    2: 'bg-green-300 text-gray-900',
    3: 'bg-green-200 text-gray-900',
    4: 'bg-green-100 text-gray-900',
  }

  const bottomColorIndex = {
    0: 'bg-yellow-200 text-gray-900',
    1: 'bg-yellow-300 text-gray-900',
    2: 'bg-orange-400 text-gray-900',
    3: 'bg-red-500 text-gray-900',
    4: 'bg-red-600 text-gray-000',
  }

  

  const placeholderImg = 'https://s.yimg.com/cv/apiv2/default/20180730/silhouette@x300.png'
</script>

<div class="tile p-1 m-1 bg-gray-100 u-round u-items-center">
  <div class="tile__icon">
    {#if item.round === 0}
    <p class="m-0 uppercase keeper">Keeper</p>
    {/if}
    <figure class="avatar {item.player ? 'player-avatar' : ''}">
      <img src={item.img ? item.img : placeholderImg} alt={item.name} />
    </figure>
  </div>
  <div class="tile__container m-0">
      <p class="tile__title m-0">{item.name}</p>
      {#if item.position && item.team}
        <span class="team">{item.team}</span>
      {/if}
  </div>
  <div class="tile__buttons m-0">
    <div class="u-flex">
        <div class="uppercase">
          <button class="score {colorByIndex ? top ? topColorIndex[index] : bottomColorIndex[index] : ''} uppercase">{item?.playerRatio?.toFixed(2) ?? '0.00'}</button>
        </div>
    </div>  
  </div>
</div>

<style>
  .tile {
    position: relative;
  }
  .avatar {
    height: 3.5rem;
    width: 3.5rem;
    padding-top: 0;
    background-color: #fff;
  }

  .player-avatar {
    padding-top: 6px;
  }

  .team {
    font-size: .8em;
    margin-left: 3px;
  }

  .score {
    font-weight: 900;
    width: 70px;
  }

  .keeper {
    position: absolute;
    bottom: 10px;
    left: 12px;
    width: 3rem;
    font-weight: 500;
    font-size: .55em;
    line-height: .85em;
    padding: 3px 6px;
    background: #0dd157;
    z-index: 10;
    text-align: center;
  }

  @media (max-width: 460px) {
    .tile {

    }
    .tile__title {
      font-size: .6em;
    }
    .avatar {
      height: 3.2rem;
      width: 3.2rem;
      padding-top: 0px;
      background-color: #fff;
    }
    .player-avatar {
      padding-top: 8px;
    }

    .keeper {
      bottom: 7px;
      left: 10px;
    }

  }

</style>