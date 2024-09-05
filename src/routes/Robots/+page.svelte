<script>
    import Robot from './Robot.svelte';
    import Target from './Target.svelte';
    import {w,h} from "$lib/stores.js";
    import {updatePositions} from "./DirectionsAlgo"

    let TargetRef;

    let robots = [
        { id: 1, x: 50, y: 50 },
        { id: 2, x: 100, y: 50 },
        { id: 3, x: 50, y: 100 },
        { id: 4, x: 100, y: 100 },
        { id: 5, x: 150, y: 150 },
        { id: 6, x: 200, y: 200 },
        { id: 7, x: 250, y: 250 },
        { id: 8, x: 300, y: 300 },
        { id: 9, x: 350, y: 350 },
        { id: 10, x: 400, y: 400 }
    ];

    const frameWidth = $w;
    const frameHeight = $h;

    function update() {
        robots = updatePositions(robots);
        robots = TargetRef.update(robots);
    }

    setInterval(update, 1000/5);
</script>

<div class="frame" style="width:{frameWidth}px; height: {frameHeight}px">
    {#each robots as robot (robot.id)}
        <Robot  x ={robot.x} y = {robot.y} />
    {/each}
    <Target bind:this={TargetRef} />
</div>

<style>
    .frame {

        border: 1px solid black;
        position: relative;
    }
</style>
