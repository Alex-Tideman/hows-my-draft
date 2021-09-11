<script>
	import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let item;
  export let tag;

  function sendOwner() {
    dispatch('message', {
      owner: item
    });
  }
</script>

<div class="tile p-1 m-1 bg-gray-300 u-round u-items-center" on:click={sendOwner}>
  <div class="tile__icon">
    <figure class="avatar">
    {#if item.img}
        <img src={item.img} alt={item.name} />
    {/if}
    </figure>
  </div>
  <div class="tile__container m-0">
      <div class="tag tag--info {tag}">{item.position}</div>
      <p class="tile__title m-0">{item.name}</p>
      <p class="tile__subtitle m-0">{item.team}</p>
  </div>
  <div class="tile__buttons m-0">
    <button class="btn-warning uppercase">34.43 pts</button>
    <button class="btn-success uppercase cost-btn">${item.cost}</button>
  </div>
</div>

<!-- <div 
  class="card" 
  >
    <div class="content">
      <div class="name">{item.name}</div>
      {#if item.team}
        <div class="team">{item.team}</div>
      {/if}
      {#if item.img}
        <img src={item.img} alt={item.name} />
      {/if}
      {#if item.cost}
        <div class="cost">${item.cost}</div>
      {/if}
      {#if item.round === 0}
        <div class="keeper">KEEPER</div>
      {/if}
    </div>
</div> -->

<style>

  .tile {
    width: 100%;
  }
  .tile__icon {
  }

  .avatar {
    height: 6rem;
    width: 6rem;
    background-color: transparent;
    padding-top: 20px;
  }

  .cost-btn {
    width: 80px;
    font-weight: 700;
  }
</style>