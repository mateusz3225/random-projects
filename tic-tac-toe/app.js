//gameboard as an array inside of the Gameboard oject
//another object to keep track of the players
const textareaofaplayername1 = document.getElementById("insert-playername1");
const textareaofaplayername2 = document.getElementById("insert-playername2");
const currentplayertext = document.getElementById("current-player");
const gridCells = document.getElementsByClassName("cell");
const resetButton = document.querySelector(".reset-button");
const displayDiv = document.querySelector(".result-display");
const Gameboard = ( function () {
const fillGameboard = () => {
    gameboard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
}
const ShowDisplay = () => {
    displayDiv.innerHTML = `The winner is ${player1.playerName} [X]`;
}
const Player = (name, marker) => {
    const playerName=name;
    const playerMarker=marker;
    return {playerName, playerMarker};
}
const insert = (position,player) => {
    
    if (gameboard[position]==="-") {
        gameboard[position] = player.playerMarker;
    } Gameboard.Consoledisplaygameboard();
}
const show = () => {console.log(gameboard)}
const Consoledisplaygameboard = () => {
    console.log (` ${gameboard[0]} | ${gameboard[1]} | ${gameboard[2]} `);
    console.log (` ${gameboard[3]} | ${gameboard[4]} | ${gameboard[5]} `);
    console.log (` ${gameboard[6]} | ${gameboard[7]} | ${gameboard[8]} `);
}
const CheckforWinner = () => {
const Tableofwinning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
for (eachTable of Tableofwinning) {
    if (gameboard[eachTable[0]] === gameboard[eachTable[1]] && gameboard[eachTable[1]] === gameboard[eachTable[2]]) {
        if(gameboard[eachTable[0]] != "-") {
            if (anumber===0)
            displayDiv.innerHTML += `<p style="padding: 0px;">The winner is ${player2.playerName} [O]</p>`;
            else if (anumber===1)
            displayDiv.innerHTML += `<p style="padding: 0px;">The winner is ${player1.playerName} [X]</p>`;
            gameboard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
            anumber = 0;
            for (cells of gridCells) {
                cells.innerText = "";
            }
        }
    }
}};
const fullboard = () => {
    if (gameboard.every(cell => cell !== "-")) {
        displayDiv.innerHTML += `<p style="padding: 0px;">draw!</p>`;
        gameboard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
            anumber = 0;
            for (cells of gridCells) {
                cells.innerText = "";
            }
    }
};

return {fillGameboard, Player, insert, show, Consoledisplaygameboard, CheckforWinner, fullboard};
})();
Gameboard.fillGameboard();
const player1 = Gameboard.Player("player1", "X");
const player2 = Gameboard.Player("player2", "O");
let anumber=0;
textareaofaplayername1.addEventListener("input", (e) => {
    player1.playerName = e.target.value;
    if (anumber === 0) {
        currentplayertext.innerText = `${player1.playerName} [${player1.playerMarker}]`;
    }
});

textareaofaplayername2.addEventListener("input", (e) => {
    player2.playerName = e.target.value;
    if (anumber === 1) {
        currentplayertext.innerText = `${player2.playerName} [${player2.playerMarker}]`;
    }
});
    for (let i=0; i<gridCells.length; i++) {
        gridCells[i].addEventListener("click", () => {
            if (anumber === 0 && gridCells[i].innerText === ""){
            gridCells[i].innerText = 'X';
            anumber++;
            currentplayertext.innerText = `${player2.playerName} [${player2.playerMarker}]`;
            Gameboard.insert(i, player1);
            Gameboard.CheckforWinner();
            Gameboard.fullboard();
            } else if (anumber === 1 && gridCells[i].innerText === "") {
            gridCells[i].innerText = 'O';
            anumber--;
            currentplayertext.innerText = `${player1.playerName} [${player1.playerMarker}]`;
            Gameboard.insert(i, player2);
            Gameboard.CheckforWinner();
            Gameboard.fullboard();
            }
        });
    };

resetButton.addEventListener("click", () => {
    Gameboard.fillGameboard();
    for (cells of gridCells) {
        cells.innerText = "";
    }
    anumber = 0;
    currentplayertext.innerText = `${player1.playerName} [${player1.playerMarker}]`;
});

