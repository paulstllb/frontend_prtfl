<script>
    export let row; // Declare the row prop to accept data from the parent component
    export let type;
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function forwardEvent() {
        if(type != "not"){
		dispatch('select', {
			key: row[0],
		});
	}}
  </script>
  
  <div class = "flex flex-row items-center justify-items-center p-1">
    
    {#if type == "aktiv"}
    <div class="items-center bg-primary rounded-lg" style="display: grid; grid-template-columns: 1fr 1fr 1fr 5fr 1fr 1fr 5fr 1fr 1fr 1fr; width:80%;margin:auto">
        {#each row as cell}
      <div class="p-2">{cell}</div>
    {/each}
    </div>
    {/if}
    
    {#if type == "header"}
     <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 5fr 1fr 1fr 5fr 1fr 1fr 1fr; width:80%;margin:auto">
        {#each row as cell}
            <div class="p-2">{cell}</div>
        {/each}
    </div>
    {/if}

    {#if type == "not"}
    <div class="flex flex-row  items-center bg-neutral rounded-lg" style="display: grid; grid-template-columns: 1fr 1fr 1fr 5fr 1fr 1fr 5fr 1fr 1fr 1fr; width:80%;margin:auto">
        {#each row as cell}
            <div class="p-2 justify-between">{cell}</div>
        {/each}
    </div>
    {/if}

    {#if type == "select"}
        <div class=" flex flex-row  items-center bg-secondary rounded-lg" style="display: grid; grid-template-columns: 1fr 1fr 1fr 5fr 1fr 1fr 5fr 1fr 1fr 1fr; width:80%;margin:auto">
        {#each row as cell}
            <div class="p-2">{cell}</div>
        {/each}
        </div>
    {/if}

    {#if (type != "header") }
      <button class="btn" on:click={forwardEvent}> > </button>
    {/if}

    
  </div>
  