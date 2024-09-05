<script>
    // Corrected array initialization
    let data = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];
    let name1 = "Player 1";
    let name2 = "Player 2";
    let playerturn = "X";
    let winner = false;
    
    function playerswitch(rowIndex, cellIndex){
        if (data[rowIndex][cellIndex] === 1 && !winner) {
            data[rowIndex][cellIndex] = playerturn;
            if (checkwinner()) {
                winner = playerturn;
            } else {
                playerturn = playerturn === "X" ? "0" : "X";
            }
        }
    }

    function checkwinner() {
        // Check rows and columns
        for (let i = 0; i < 3; i++) {
            if (data[i][0] !== 1 && data[i][0] === data[i][1] && data[i][0] === data[i][2]) {
                return true;
            }
            if (data[0][i] !== 1 && data[0][i] === data[1][i] && data[0][i] === data[2][i]) {
                return true;
            }
        }
        // Check diagonals
        if (data[0][0] !== 1 && data[0][0] === data[1][1] && data[0][0] === data[2][2]) {
            return true;
        }
        if (data[0][2] !== 1 && data[0][2] === data[1][1] && data[0][2] === data[2][0]) {
            return true;
        }
        return false;
    }
</script>

<p class="title">Tic Tac Toe</p>
<div class="info">
    <p>{winner ? (winner === "X" ? name1 : name2) + " wins!" : (playerturn === "X" ? name1 + "'s turn" : name2 + "'s turn")}</p>
</div>
<div class="playername">
    <div class="name-input">
        <label>Player 1 Name: </label>
        <input bind:value={name1}>
    </div>
    <div class="name-input">
        <label>Player 2 Name: </label>
        <input bind:value={name2}>
    </div>
</div>
<div class="mid">
    <button on:click={() => {data = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]; playerturn = "X"; winner = false;}}>Reset</button>
</div>
<div class="gameboard">
    {#each data as row, rowIndex}
        <div class="row">
            {#each row as cell, cellIndex}
                <div class="cell" on:click={() => playerswitch(rowIndex, cellIndex)}>
                    {cell === 1 ? "" : cell}
                </div>
            {/each}
        </div>
    {/each}
</div>

<!-- Add some basic styles for clarity -->
<style>
    .title {
        font-size: 2em;
        text-align: center;
        margin-top: 20px;
    }
    .info {
        text-align: center;
        font-size: 1.5em;
        margin-bottom: 20px;
    }
    .playername {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        flex-direction: column;
        align-items: center;
    }
    .name-input {
        margin-bottom: 10px;
    }
    .name-input label {
        font-size: 1em;
        margin-right: 10px;
    }
    .name-input input {
        padding: 5px;
        font-size: 1em;
    }
    .mid{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .mid button {
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
    }
    .row {
        display: flex;
    }
    .cell {
        width: 60px;
        height: 60px;
        border: 2px solid #444;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 2em;
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
    }
    .cell:hover {
        background-color: #ddd;
    }
    .gameboard {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }
</style>
