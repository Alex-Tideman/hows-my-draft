<script>
	import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let item;

  function sendOwner() {
    dispatch('message', {
      owner: item
    });
  }
</script>

<div 
  class="card" 
  on:click={sendOwner}>
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
</div>

<style>
	.card {
    position: relative;
    height: 120px;
    width: 100%;
    margin: 5px 0 10px 0;
    background-color: #00e047;
	}

  .content {
    position: relative;
    height: 100%;
    box-shadow: -5px 0 5px -7px #333;
  }

  img {
    position: absolute;
    bottom: 5px;
    right: 0;
    border-radius: 100%;
    width: 80px;
    height: auto;
  }

  .name {
    padding: 10px 0 0 10px;
    font-size: 16px;
  }

  .team {
    padding: 0 0 0 10px;
    font-size: 12px;
  }

  .cost {
    position: absolute;
    bottom: 5px;
    font-size: 32px;
    border-radius: 5px;
    padding: 6px;
    width: 60px;
    height: 36px;
    text-align: center;
    letter-spacing: 0rem;
    background: white;
    box-shadow: -5px 0 5px -7px #333;
    left: 10px;
    background: #333;
    color: #fff;
  }

  .keeper {
    position: absolute;
    bottom: 58px;
    left: 18px;
    font-size: 12px;
    font-weight: bold;
  }

</style>