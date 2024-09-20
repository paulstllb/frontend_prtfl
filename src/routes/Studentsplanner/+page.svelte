<script>
    import AllRows from "./AllRows.svelte";
import DataRow from "./DataRow.svelte";
  
    let fileUploaded = false; // Reactive variable to track the upload state
    let csvData = []; // Array to store parsed CSV data
    let headerRow = [];
    let aktivdataRows = [];
    let selectedRow = [];
    let notSelecable = [];
    let stateApp = 0;
    
    // Function that gets called when a file is selected
    function handleFileChange(event) {
      const files = event.target.files;
      if (files.length > 0) {
        fileUploaded = true; // Set fileUploaded to true if a file is selected
        parseCSV(files[0]); // Call the parseCSV function to process the file
      }
    }
  
    // Function to read and parse the CSV file
    function parseCSV(file) {
      const reader = new FileReader();
    
      reader.onload = function(event) {
        const content = event.target.result;
        const rows = content.split('\n').map(row => row.split(';')); // Split content into rows and columns
        csvData = rows;
        console.log(csvData); // You can log the parsed data to verify it
        [headerRow, ...aktivdataRows] = csvData;
      };
    
      reader.readAsText(file); // Read the file as a text string
    }

    function thisfunc(event) {
  const key = event.detail.key; // Unique identifier for the row
  console.log(event)
  // Check if the row is in aktivdataRows
  const rowIndexInAktiv = aktivdataRows.findIndex(row => row[0] === key);
  
  // Check if the row is in selectedRow
  const rowIndexInSelected = selectedRow.findIndex(row => row[0] === key);

  if (rowIndexInAktiv !== -1) {
    // Move from aktivdataRows to selectedRow
    const selected = aktivdataRows.splice(rowIndexInAktiv, 1)[0]; // Remove the selected row from aktivdataRows
    aktivdataRows = [...aktivdataRows]; // Trigger reactivity
    selectedRow = [...selectedRow, selected]; // Add the row to selectedRow array

    // Check for rows with matching values at index 6 and 7
    const value6 = selected[7]; // Value at index 6 of the selected row
    const value7 = selected[8]; // Value at index 7 of the selected row

    // Filter rows that have the same values in columns 6 and 7
    const matchingRows = aktivdataRows.filter(row => row[7] === value6 && row[8] === value7);

    // Move matching rows to notSelectable
    notSelecable = [...notSelecable, ...matchingRows];

    // Remove matching rows from aktivdataRows
    aktivdataRows = aktivdataRows.filter(row => row[7] !== value6 || row[8] !== value7);
    
  } else if (rowIndexInSelected !== -1) {
    // Move from selectedRow back to aktivdataRows
    const deselected = selectedRow.splice(rowIndexInSelected, 1)[0]; // Remove the row from selectedRow
    selectedRow = [...selectedRow]; // Trigger reactivity for selectedRow
    aktivdataRows = [...aktivdataRows, deselected]; // Add the row back to aktivdataRows

    // Get the values at index 7 and 8 for the deselected row
    const value7 = deselected[7];
    const value8 = deselected[8];

    // Filter and remove rows from notSelecable that have matching values in index 7 and 8
    const matchingRowsInNotSelectable = notSelecable.filter(row => row[7] === value7 && row[8] === value8);

    // Add the matching rows to selectedRow and remove them from notSelecable
    if (matchingRowsInNotSelectable.length > 0) {
        aktivdataRows = [...aktivdataRows, ...matchingRowsInNotSelectable]; // Copy matching rows to selectedRow

        // Remove the matching rows from notSelecable
        notSelecable = notSelecable.filter(row => !(row[7] === value7 && row[8] === value8));
    }
}

}



  </script>
<div class="flex flex-col">
  <div class="flex flex-row justify-between items-center">
    <div class="font-bold p-8 text-center flex-grow pl-32">Studentsplanner</div>
    {#if fileUploaded}
    <div class="pr-32">
        <ul class="menu menu-horizontal bg-base-200 rounded-box">
            <li>
                <a on:click={()=>stateApp=0}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </a>
            </li>
            <li>
                <a on:click={()=>stateApp=1}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </li>
            <li>
                <a on:click={()=>stateApp = 2}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
    {/if}
</div>
<div>
    <div>
      {#if !fileUploaded}
        <div class="flex flex-col p-32">
          <div class="p-8">Lade die formatierte Tabelle hoch:</div>
          <input type="file" accept=".csv" on:change={handleFileChange} />
        </div>
      {:else}
        {#if stateApp == 0}
            <AllRows headerRow={headerRow} aktivdataRows={aktivdataRows} selectedRow={selectedRow} notSelecable={notSelecable} on:select={thisfunc} />
        {/if}
        {#if stateApp == 1}
            hello 
        {/if}
        {#if stateApp == 2}
            hello2
        {/if}
      {/if}
    </div>
</div>
</div>
  