<script>

    import {w,h} from "$lib/stores.js";

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let x = getRandomNumber(1, $w);
    let y = getRandomNumber(1, $h);


    function update(robot) {
        console.log("update");
        return robot;
    }
    export {update};
</script>

<div class="target" style="top: {y}px; left: {x}px;"></div>

<style>
    .target {
        width: 20px;
        height: 20px;
        background-color: black;
        border-radius: 50%;
        position: absolute;
    }
</style>