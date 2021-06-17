function generateRandomValue(minValue, maxValue) {
    var random = Math.floor((Math.random() * maxValue) + minValue);
    return random;
}
function changePlayers() {
    var currentPlayerName = document.getElementById("current").innerText;
    var player1Name = document.getElementById("player1").value;
    var player2Name = document.getElementById("player2").value;
    currentPlayerName = player1Name;
    if (currentPlayerName == player1Name) {
        currentPlayerName = player2Name;
    }
    else {
        currentPlayerName = player1Name;
    }
    console.log(currentPlayerName);
}
window.onload = function () {
    document.getElementById("player1").defaultValue = "";
    document.getElementById("player2").defaultValue = "";
    var newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("hold").onclick = holdDie;
};
function createNewGame() {
    var player1Score = parseInt(document.getElementById("score1").value);
    var player2Score = parseInt(document.getElementById("score2").value);
    player1Score = 0;
    player2Score = 0;
    document.getElementById("score1").value = player1Score.toString();
    document.getElementById("score2").value = player2Score.toString();
    if (document.getElementById("player1").value == ""
        || document.getElementById("player2").value == "") {
        alert("Both players must have a name.");
    }
    else {
        document.getElementById("turn").classList.add("open");
        changePlayers();
    }
}
function rollDie() {
    var currTotal = parseInt(document.getElementById("total").value);
    var dieRoll = parseInt(document.getElementById("die").value);
    dieRoll = generateRandomValue(1, 6);
    console.log(dieRoll);
    console.log(currTotal);
    if (dieRoll == 1) {
        changePlayers();
        currTotal = 0;
    }
    if (dieRoll > 1) {
        currTotal += dieRoll;
    }
}
function holdDie() {
    changePlayers();
}
