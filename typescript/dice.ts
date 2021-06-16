
class Die {
    private dieValue:number;
    private Total:number;

    constructor() {
        this.roll();
    }

    get dieVal() {
        return this.dieValue;
    }

    roll():number {
        this.dieValue = Math.floor((Math.random() * 6) + 1)
        this.Total += this.dieValue;
        return this.dieValue;
    }
}

class Player {
    Name:String;
    Score:number;

    constructor() {
        this.getName();
    }

    getName(){
        return this.Name;
    }

    getScore() {
        return this.Score;
    }
}

function generateRandomValue():number{
    
    let myDie:Die = new Die();
    myDie.roll();
    let value = myDie.dieVal;


    return value;
}


function changePlayers():void{
    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
    
}

window.onload = function(){
    (<HTMLInputElement>document.getElementById("player1")).value = "";
    (<HTMLInputElement>document.getElementById("player2")).value = "";

    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;

    document.getElementById("roll").onclick = rollDie;

    document.getElementById("hold").onclick = holdDie;
}

function isEmpty(value){
    return (value == null || value.length === 0);
  }

function createNewGame(){
    //set player 1 and player 2 scores to 0
    var playerOne:Player = new Player();
    var playerTwo:Player = new Player();

    playerOne.getName();
    playerTwo.getName();

    playerOne.getScore();
    playerTwo.getScore();

    playerOne.Name = (<HTMLInputElement>document.getElementById("player1")).value;
    playerTwo.Name = (<HTMLInputElement>document.getElementById("player2")).value;

    playerOne.Score = parseInt((<HTMLInputElement>document.getElementById("score1")).value);
    playerTwo.Score = parseInt((<HTMLInputElement>document.getElementById("score2")).value);

    playerOne.Score = 0;
    playerTwo.Score = 0;
    
    console.log(playerOne);
    console.log(playerTwo);
    //verify each player has a name
    //if both players don't have a name display error
    

    //if both players do have a name start the game!
    document.getElementById("turn").classList.add("open");
    (<HTMLInputElement>document.getElementById("total")).value = "0";
    
    //lock in player names and then change players
    document.getElementById("player1").setAttribute("disabled", "disabled");
    document.getElementById("player2").setAttribute("disabled", "disabled");
    changePlayers();
}

function rollDie():void{
    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);
    
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)
    let value = generateRandomValue();
    
    console.log(value);
    console.log(currTotal);
    //if the roll is 1
    //  change players
    //  set current total to 0
    
    //if the roll is greater than 1
    //  add roll value to current total

    //set the die roll to value player rolled
    //display current total on form
}

function holdDie():void{
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score

    //reset the turn total to 0

    //change players

    changePlayers();
}
