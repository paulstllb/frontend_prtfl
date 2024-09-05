
<script>
    export let pixelArray = [];
</script>

<style>
    .pixel-grid {
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
        width: 100px;
        height: 100px;
    }
    .pixel {
        width: 1px;
        height: 1px;
    }
</style>

<div class="pixel-grid">
    {#each pixelArray as pixel}
        <div 
            class="pixel" 
            style="background-color: rgb({pixel[0]}, {pixel[1]}, {pixel[2]})"
        ></div>
    {/each}
</div>
