var Die = (function () {
    function Die() {
        this.roll();
    }
    Object.defineProperty(Die.prototype, "dieVal", {
        get: function () {
            return this.dieValue;
        },
        enumerable: false,
        configurable: true
    });
    Die.prototype.roll = function () {
        this.dieValue = Math.floor((Math.random() * 6) + 1);
        this.Total += this.dieValue;
        return this.dieValue;
    };
    return Die;
}());
var Player = (function () {
    function Player() {
        this.getName();
    }
    Player.prototype.getName = function () {
        return this.Name;
    };
    Player.prototype.getScore = function () {
        return this.Score;
    };
    return Player;
}());
function generateRandomValue() {
    var myDie = new Die();
    myDie.roll();
    var value = myDie.dieVal;
    return value;
}
function changePlayers() {
}
window.onload = function () {
    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";
    var newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("hold").onclick = holdDie;
};
function isEmpty(value) {
    return (value == null || value.length === 0);
}
function createNewGame() {
    var playerOne = new Player();
    var playerTwo = new Player();
    playerOne.getName();
    playerTwo.getName();
    playerOne.getScore();
    playerTwo.getScore();
    playerOne.Name = document.getElementById("player1").value;
    playerTwo.Name = document.getElementById("player2").value;
    playerOne.Score = parseInt(document.getElementById("score1").value);
    playerTwo.Score = parseInt(document.getElementById("score2").value);
    playerOne.Score = 0;
    playerTwo.Score = 0;
    console.log(playerOne);
    console.log(playerTwo);
    document.getElementById("turn").classList.add("open");
    document.getElementById("total").value = "0";
    document.getElementById("player1").setAttribute("disabled", "disabled");
    document.getElementById("player2").setAttribute("disabled", "disabled");
    changePlayers();
}
function rollDie() {
    var currTotal = parseInt(document.getElementById("total").value);
    var value = generateRandomValue();
    console.log(value);
    console.log(currTotal);
}
function holdDie() {
    changePlayers();
}
