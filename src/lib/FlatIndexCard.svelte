<script>
  export let item;

  const positionTag = {
    'QB': 'bg-blue-600',
    'RB': 'bg-teal-500',
    'WR': 'bg-indigo-700',
    'TE': 'bg-yellow-300',
    'DEF': 'bg-gray-800',
    'K': 'bg-gray-800',
  }
</script>

<div class="tile p-1 m-1 bg-gray-100 u-round u-items-center">
  <div class="tile__icon">
    {#if item.round === 0}
    <p class="m-0 uppercase keeper">Keeper</p>
  {/if}
    <figure class="avatar">
    {#if item.img}
        <img src={item.img} alt={item.name} />
    {/if}
    </figure>
  </div>
  <div class="tile__container m-0">
      <div class="tag tag--info {positionTag[item.position]}">{item.position}</div>
      <p class="tile__title m-0">{item.name}</p>
      <p class="tile__subtitle m-0">{item.team}</p>
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
    font-size: 1.5em;
    width: 80px;
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