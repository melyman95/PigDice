function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  } 

function generateRandomValue(minValue:number, maxValue:number):number{
    var random = Math.floor((Math.random() * maxValue) + minValue)
    
    //TODO: use random to generate a number between min and max

    return random;
}


function changePlayers():void{
    let currentPlayerName = document.getElementById("current").innerText;
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;


    if (currentPlayerName == player1Name) {
        document.getElementById("current").innerText = player2Name;
    }

    if (currentPlayerName == player2Name) {
        document.getElementById("current").innerText = player1Name;
    }
    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
}

window.onload = function(){
    (<HTMLInputElement>document.getElementById("player1")).defaultValue = "";
    (<HTMLInputElement>document.getElementById("player2")).defaultValue = "";

    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;

    document.getElementById("roll").onclick = rollDie;

    document.getElementById("hold").onclick = holdDie;
}

function createNewGame(){
    //set player 1 and player 2 scores to 0

    let player1Score = parseInt((<HTMLInputElement>document.getElementById("score1")).value);
    let player2Score = parseInt((<HTMLInputElement>document.getElementById("score2")).value);

    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;

    player1Score = 0;
    player2Score = 0;

    document.getElementById("winner").innerText = "";

    (<HTMLInputElement>document.getElementById("score1")).value = player1Score.toString();
    (<HTMLInputElement>document.getElementById("score2")).value = player2Score.toString();
    //verify each player has a name
    //if both players don't have a name display error
    if ((<HTMLInputElement>document.getElementById("player1")).value == "" 
    || (<HTMLInputElement>document.getElementById("player2")).value == "") {
        alert("Both players must have a name.");
    }
    else {
        player1Score = 0;
        player2Score = 0;
        document.getElementById("current").innerText = player1Name;

        (<HTMLInputElement>document.getElementById("die")).value = "0";
        (<HTMLInputElement>document.getElementById("total")).value = "0";
    //if both players do have a name start the game!
    document.getElementById("turn").classList.add("open");
    //lock in player names and then change players
    document.getElementById("player1").setAttribute("disabled", "disabled");
    document.getElementById("player2").setAttribute("disabled", "disabled");
    changePlayers();
    }
}

function rollDie():void{
    var diceSound = new sound("dice.mp3");
    
    diceSound.play();

    let dieImages = ["dieFaces/die1.png", "dieFaces/die2.png", "dieFaces/die3.png", 
    "dieFaces/die4.png", "dieFaces/die5.png", "dieFaces/die6.png"];
    let dice = document.querySelectorAll("img");

    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);
    let dieRoll = parseInt((<HTMLInputElement>document.getElementById("die")).value);
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)
    
    dieRoll = generateRandomValue(1, 6);

    console.log(dieRoll);
    console.log(currTotal);
    //if the roll is 1
    //  change players
    //  set current total to 0
    if (dieRoll == 1) {
        currTotal = 0;
        (<HTMLInputElement>document.getElementById("die")).value = dieRoll.toString();
        (<HTMLInputElement>document.getElementById("total")).value = currTotal.toString();
        changePlayers();
    }
    //if the roll is greater than 1
    //  add roll value to current total
    if (dieRoll > 1) {
        currTotal += dieRoll;
        (<HTMLInputElement>document.getElementById("die")).value = dieRoll.toString();
        (<HTMLInputElement>document.getElementById("total")).value = currTotal.toString();
    }

    switch(dieRoll) {
        case 1:
            (<HTMLImageElement>document.getElementById("dieFace")).src = "dieFaces/die1.png";
            break;
        case 2:
            (<HTMLImageElement>document.getElementById("dieFace")).src = "dieFaces/die2.png";
            break;
        case 3:
            (<HTMLImageElement>document.getElementById("dieFace")).src = "dieFaces/die3.png";
            break;
        case 4:
            (<HTMLImageElement>document.getElementById("dieFace")).src = "dieFaces/die4.png";
            break;
        case 5:
            (<HTMLImageElement>document.getElementById("dieFace")).src = "dieFaces/die5.png";
            break;
        case 6:
            (<HTMLImageElement>document.getElementById("dieFace")).src = "dieFaces/die6.png";
            break;
    }
    //set the die roll to value player rolled
    //display current total on form

}

function holdDie():void{
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score

    let currTurnTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);
    let player1Score = parseInt((<HTMLInputElement>document.getElementById("score1")).value);
    let player2Score = parseInt((<HTMLInputElement>document.getElementById("score2")).value);
    let currentPlayer = document.getElementById("current").innerText;

    if (currentPlayer == ((<HTMLInputElement>document.getElementById("player1")).value)) {
        player1Score += currTurnTotal;
        (<HTMLInputElement>document.getElementById("score1")).value = player1Score.toString();
    }

    if (currentPlayer == (<HTMLInputElement>document.getElementById("player2")).value) {
        player2Score += currTurnTotal;
        (<HTMLInputElement>document.getElementById("score2")).value = player2Score.toString();
    }
    //reset the turn total to 0
    (<HTMLInputElement>document.getElementById("total")).value = "0";

    //change players
    changePlayers();

    if (parseInt((<HTMLInputElement>document.getElementById("score1")).value) >= 100) {
        document.getElementById("winner").innerText = (<HTMLInputElement>document.getElementById("player1")).value + " wins!";
        let winner = new sound("cheer.mp3");
        winner.play();
    }

    if (parseInt((<HTMLInputElement>document.getElementById("score2")).value) >= 100) {
        document.getElementById("winner").innerText = (<HTMLInputElement>document.getElementById("player2")).value + " wins!";
        let winner = new sound("cheer.mp3");
        winner.play();
    }
    
}