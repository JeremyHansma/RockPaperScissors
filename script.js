function computerPlay(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let computerSelection = "";
    let result = Math.floor(Math.random() * 4) + min;

    if(result === 1 ){
        computerSelection = "Rock";
    } else if (result === 2){
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    
    return computerSelection;
}


function askPlayer(){
    let playerSelection_nocase = prompt("Your choice? ", " ");
    let playerSelection = playerSelection_nocase.toLowerCase();
    return playerSelection;
}


function playRound() {
    let playerSelection = askPlayer();
    let computerSelection = computerPlay(1, 3);
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
        result = "It's a Tie!";
    }
    console.log(result);
    let resultCode = result.slice(0,7);
    return resultCode;
}

function game(){
    let userScore = 0
    let winner = "";
    
    for(i = 0; i < 5; i++){
        let resultCode = playRound();
        
        if(resultCode === "You Win"){
            userScore += 1;
        } else if(resultCode === "You Los") {
            userScore -= 1;
        } else {
            userScore = userScore;
            i = i - 1;
        }
    }
    
    alert(userScore);
    if (userScore >= 3){
        winner = "You are the winner!!";
    } else {
        winner = "You have lost to technology, how embarrassing";
    }

    return winner;
}
   
winner = game();
alert(winner);