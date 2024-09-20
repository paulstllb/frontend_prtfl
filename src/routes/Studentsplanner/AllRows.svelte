<script>

import { createEventDispatcher } from 'svelte';
import DataRow from "./DataRow.svelte";

export let headerRow = [];
export let aktivdataRows = [];
export let selectedRow = [];
export let notSelecable = [];


</script>


<div>
    <div class = "flex flex-col">
      <DataRow type={"header"} row={headerRow}/>
      {#each selectedRow as row}
        <DataRow type={"select"} row={row} on:select/>  
      {/each}
      {#each aktivdataRows as row}
        <DataRow type={"aktiv"} row={row} on:select/>  
      {/each}
      {#each notSelecable as row}
        <DataRow type={"not"} row={row} on:select/>  
      {/each}
    </div>
  </div>