function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    };
    this.stop = function () {
        this.sound.pause();
    };
}
function generateRandomValue(minValue, maxValue) {
    var random = Math.floor((Math.random() * maxValue) + minValue);
    return random;
}
function changePlayers() {
    var currentPlayerName = document.getElementById("current").innerText;
    var player1Name = document.getElementById("player1").value;
    var player2Name = document.getElementById("player2").value;
    if (currentPlayerName == player1Name) {
        document.getElementById("current").innerText = player2Name;
    }
    if (currentPlayerName == player2Name) {
        document.getElementById("current").innerText = player1Name;
    }
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
    var player1Name = document.getElementById("player1").value;
    var player2Name = document.getElementById("player2").value;
    player1Score = 0;
    player2Score = 0;
    document.getElementById("winner").innerText = "";
    document.getElementById("score1").value = player1Score.toString();
    document.getElementById("score2").value = player2Score.toString();
    if (document.getElementById("player1").value == ""
        || document.getElementById("player2").value == "") {
        alert("Both players must have a name.");
    }
    else {
        player1Score = 0;
        player2Score = 0;
        document.getElementById("current").innerText = player1Name;
        document.getElementById("die").value = "0";
        document.getElementById("total").value = "0";
        document.getElementById("turn").classList.add("open");
        document.getElementById("player1").setAttribute("disabled", "disabled");
        document.getElementById("player2").setAttribute("disabled", "disabled");
        changePlayers();
    }
}
function rollDie() {
    var diceSound = new sound("dice.mp3");
    diceSound.play();
    var dieImages = ["dieFaces/die1.png", "dieFaces/die2.png", "dieFaces/die3.png",
        "dieFaces/die4.png", "dieFaces/die5.png", "dieFaces/die6.png"];
    var dice = document.querySelectorAll("img");
    var currTotal = parseInt(document.getElementById("total").value);
    var dieRoll = parseInt(document.getElementById("die").value);
    dieRoll = generateRandomValue(1, 6);
    console.log(dieRoll);
    console.log(currTotal);
    if (dieRoll == 1) {
        currTotal = 0;
        document.getElementById("die").value = dieRoll.toString();
        document.getElementById("total").value = currTotal.toString();
        changePlayers();
    }
    if (dieRoll > 1) {
        currTotal += dieRoll;
        document.getElementById("die").value = dieRoll.toString();
        document.getElementById("total").value = currTotal.toString();
    }
    switch (dieRoll) {
        case 1:
            document.getElementById("dieFace").src = "dieFaces/die1.png";
            break;
        case 2:
            document.getElementById("dieFace").src = "dieFaces/die2.png";
            break;
        case 3:
            document.getElementById("dieFace").src = "dieFaces/die3.png";
            break;
        case 4:
            document.getElementById("dieFace").src = "dieFaces/die4.png";
            break;
        case 5:
            document.getElementById("dieFace").src = "dieFaces/die5.png";
            break;
        case 6:
            document.getElementById("dieFace").src = "dieFaces/die6.png";
            break;
    }
}
function holdDie() {
    var currTurnTotal = parseInt(document.getElementById("total").value);
    var player1Score = parseInt(document.getElementById("score1").value);
    var player2Score = parseInt(document.getElementById("score2").value);
    var currentPlayer = document.getElementById("current").innerText;
    if (currentPlayer == (document.getElementById("player1").value)) {
        player1Score += currTurnTotal;
        document.getElementById("score1").value = player1Score.toString();
    }
    if (currentPlayer == document.getElementById("player2").value) {
        player2Score += currTurnTotal;
        document.getElementById("score2").value = player2Score.toString();
    }
    document.getElementById("total").value = "0";
    changePlayers();
    if (parseInt(document.getElementById("score1").value) >= 100) {
        document.getElementById("winner").innerText = document.getElementById("player1").value + " wins!";
        var winner = new sound("cheer.mp3");
        winner.play();
    }
    if (parseInt(document.getElementById("score2").value) >= 100) {
        document.getElementById("winner").innerText = document.getElementById("player2").value + " wins!";
        var winner = new sound("cheer.mp3");
        winner.play();
    }
}
