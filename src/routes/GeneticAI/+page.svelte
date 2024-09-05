<script>
    import {NUM_OF_POPULATION,POPULATION,PIXEL_Array} from './store.js';
    import {evaluatePopulation} from './costfunction.js';
    import {generatenew} from './generate.js';
    import PixelGrid from './PixelGrid.svelte';
    import "../../app.css";
    
    let pixelArray = [];
    let population = [];
    let populationFitness= []
    let newPop 
    let intervalID;
    let stopintervall = false;

    function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = 100;
                canvas.height = 100;
                ctx.drawImage(img, 0, 0, 100, 100);
                const imageData = ctx.getImageData(0, 0, 100, 100);
                const data = imageData.data;

                let grayArray = [];
                let rgbArray = [];
                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    // Luminanz-Formel zur Umwandlung in Grauwert
                    rgbArray.push([r, g, b]);
                    const gray = 0.299 * r + 0.587 * g + 0.114 * b;
                    grayArray.push([gray]);
                }
                console.log(rgbArray); // Log the gray array for debugging
                // @ts-ignore
                PIXEL_Array.set(rgbArray);
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}


    function generatePopulation() {
        const newPopulation = [];
        for (let i = 0; i < $NUM_OF_POPULATION; i++) {
            let individual = [];
            for (let j = 0; j < 10000; j++) {
                individual.push([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]);
            }
            newPopulation.push(individual);
        }
        population = newPopulation;
        console.log(population); // Log the population array for debugging
        POPULATION.set(population);
        console.log("Population ingenrate: ",$POPULATION)
    }
    function start() {
        console.log("Poplution in start: ")
        console.log($POPULATION)

        populationFitness = evaluatePopulation($POPULATION,$PIXEL_Array);
        console.log("Population Fitness: ")
        console.log(populationFitness)
       
        
        newPop = generatenew($POPULATION,populationFitness,$NUM_OF_POPULATION);
        population = newPop
        }
    
    function generate() {
        
        intervalID = setInterval(start, 500); // Store the interval ID
        console.log("done");
        stopintervall = true;
    }

    function stop() {
        clearInterval(intervalID); // Clear the interval
        stopintervall = false;
        
        console.log("Interval stopped");
    }
    

</script>


<div class="image-container">
    <input type="file" accept="image/*" on:change={handleImageUpload} />
    <button class="btn" on:click={generatePopulation}>Generate Population</button>
    <button class = "btn " on:click={start}>Start one Time the Calc Funktion</button>
    <button class = "btn" on:click={generate}>Start the Calc Function in an Intervall</button>
    {#if stopintervall}
        <button class = "btn" on:click={stop}>Stop the intervall</button>
    {/if}
    
    <div class="population" style="padding-top:30px">
        <label>Wunsch: <label>
        <PixelGrid pixelArray = {$PIXEL_Array} />
    </div> 
    <div class="population-grid">
        {#each population as individual}
            <div class="pixel-grid-wrapper">
                <PixelGrid pixelArray={individual} />
            </div>
        {/each}
    </div>
</div>


<style lang="postcss">
    .image-container {
        gap: 10px;
         display: flex;
         flex-direction: column;
         align-items: center;
         margin-top: 20px;
     }
     .population-grid {
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         gap: 10px;
         margin-top: 20px;
     }
     .pixel-grid-wrapper {
         width: 100px;
         height: 100px;
     }
 </style>