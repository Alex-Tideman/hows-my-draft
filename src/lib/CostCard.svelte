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
    <button class="btn-success uppercase cost-btn">${item.cost}</button>
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

  .cost-btn {
    font-weight: 700;
    font-size: 1.25em;
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
</style>