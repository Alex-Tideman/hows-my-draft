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
    background-color: var(--tertiary-color);
	}

  .content {
    margin: 0 1em 1.5em;
  }

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 100px;
    height: auto;
  }

  .name {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 700;
    line-height: .75em;
  }

  .team {
    font-size: 12px;
  }

  .cost {
    position: absolute;
    bottom: 15px;
    border-radius: 5px;
    font-size: 24px;
    border-radius: 5px;
    width: 60px;
    height: 40px;
    text-align: center;
    letter-spacing: 0rem;
    background: white;
    box-shadow: -5px 0 5px -7px #333;
    left: 10px;
    color: #333;
    background: #00e047;
    font-weight: bold;
  }

  .keeper {
    position: absolute;
    bottom: 52px;
    left: 18px;
    font-size: 10px;
    font-weight: bold;
  }

</style>