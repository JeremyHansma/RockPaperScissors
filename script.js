function computerPlay(min, max) {
    let computerSelection = "";
    let result = function (min, max) { Math.floor(Math.random() * (max - min)) + min;}

    if(result = 1){
        computerSelection = "Rock";
    } else if (result = 2){
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
     return computerSelection;
}
let computerSelection = computerPlay(1, 3);
console.log(computerSelection);


let playerSelection_nocase = prompt("Your choice? ", " ");
let playerSelection = playerSelection_nocase.toLowerCase(); //changes the players input to lowercase variable. 
console.log(playerSelection);
//alert(computerSelection);
//alert(playerSelection);

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection === "rock" && computerSelection === "Paper"){
        result = "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "Scissors"){
        result = "You Win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "Rock"){
        result = "You Win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors"){
        result = "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        result = "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        result = "You Win! Scissors beats Paper";
    } else {
        result = "Tie!";
    }
    return result;
}

let roundResult = playRound(playerSelection, computerSelection);

alert(roundResult);