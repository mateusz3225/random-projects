const textareaofaplayername1 = document.getElementById("insert-playername1");
const textareaofaplayername2 = document.getElementById("insert-playername2");
const currentplayertext = document.getElementById("current-player");
const gridCells = document.getElementsByClassName("cell");
const resetButton = document.querySelector(".reset-button");
const displayDiv = document.querySelector(".result-display");
let gameboard = [];
class Gameboard {
static fillGameboard() {
    gameboard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
}
static ShowDisplay() {
    displayDiv.innerHTML = `The winner is ${player1.playerName} [X]`;
}
constructor(name, marker) {
    this.playerName = name;
    this.playerMarker = marker;
}
static insert(position,player) {
    if (gameboard[position]==="-") {
        gameboard[position] = player.playerMarker;
    } Gameboard.Consoledisplaygameboard();
}
show() {console.log(gameboard)}
static Consoledisplaygameboard() {
    console.log (` ${gameboard[0]} | ${gameboard[1]} | ${gameboard[2]} `);
    console.log (` ${gameboard[3]} | ${gameboard[4]} | ${gameboard[5]} `);
    console.log (` ${gameboard[6]} | ${gameboard[7]} | ${gameboard[8]} `);
}
static CheckforWinner() {
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
for (const eachTable of Tableofwinning) {
    if (gameboard[eachTable[0]] === gameboard[eachTable[1]] && gameboard[eachTable[1]] === gameboard[eachTable[2]]) {
        if(gameboard[eachTable[0]] != "-") {
            if (anumber===0)
            displayDiv.innerHTML += `<p style="padding: 0px;">The winner is ${player2.playerName} [O]</p>`;
            else if (anumber===1)
            displayDiv.innerHTML += `<p style="padding: 0px;">The winner is ${player1.playerName} [X]</p>`;
            gameboard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
            anumber = 0;
            for (const cells of gridCells) {
                cells.innerText = "";
            }
        }
    }
}};
static fullboard(){
    if (gameboard.every((cell) => cell !== "-")) {
        displayDiv.innerHTML += `<p style="padding: 0px;">draw!</p>`;
        gameboard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
            anumber = 0;
            for (const cells of gridCells) {
                cells.innerText = "";
            }
    }
};

};
Gameboard.fillGameboard();
const player1 = new Gameboard("player1", "X");
const player2 = new Gameboard("player2", "O");
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
    for (const cells of gridCells) {
        cells.innerText = "";
    }
    anumber = 0;
    currentplayertext.innerText = `${player1.playerName} [${player1.playerMarker}]`;
});

console.log(player1 
+ player2
);