<script>
  const ticks = [...Array(1000).keys()]
  const days = [...Array(100).keys()]
  const notes = [...Array(20).keys()]
  const epics = [...Array(10).keys()]

</script>


<div id="container">
    <div class="ticker-container">
      <div class="ticker">
        {#each ticks as tick}
          <div class="tick">{tick + 1}</div>
        {/each}  
      </div>  
    </div>
    <div class="days-container">
      <div class="days">
        {#each days as day}
          <div class="day">{day + 1}</div>
        {/each}  
      </div>
    </div>
    <div class="notes-container">
      <div class="notes">
        {#each notes as note}
          <div class="note">{note + 1}</div>
        {/each}  
      </div>
    </div>
    <div class="epic-container">
      <div class="epics">
        {#each epics as epic}
          <div class="epic">{epic + 1}</div>
        {/each}  
      </div>
    </div>
</div>

<style>
	#container {
    position: relative;
		height: 100vh;
    width: 100%;
    overflow: auto;
	}
	
  .ticker-container {
    position: absolute;
    top: 50px;
    left: 0;
    bottom: 0;
    width: 25%;
		height: auto;
    overflow: auto;
		background-color: lightgoldenrodyellow;
    border-top: 1px solid black;
	}

  .days-container {
    position: absolute;
    top: 50px;
    left: 25%;
    bottom: 0;
    width: 25%;
		height: auto;
    overflow: auto;
		background-color: var(--accent-color, lightgray);
    border-top: 1px solid black;
	}

  .notes-container {
    position: absolute;
    top: 50px;
    left: 50%;
    bottom: 0;
    width: 50%;
		height: auto;
    overflow: auto;
		background-color: #f2f2f2;
    border-top: 1px solid black;
	}

  .epic-container {
    position: absolute;
    top: 50px;
    left: 100%;
    bottom: 0;
    width: 100%;
		height: auto;
    overflow: auto;
		background-color: greenyellow;
    border-top: 1px solid black;
	}

  .tick {
    height: 40px;
    border: 1px solid black;
    border-top: none;
    padding: 3px;
  }

  .day {
    height: 87px;
    border: 1px solid black;
    border-top: none;
    padding: 3px;
  }

  .note {
    height: 181px;
    border: 1px solid black;
    border-top: none;
    padding: 3px;
  }

  .epic {
    height: 369px;
    overflow: auto;
    border: 1px solid black;
    border-top: none;
    padding: 3px;
  }

</style>
