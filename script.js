/*
Inputs: Player's selection
Outputs: who wins the game

Create function called computerPlay
    Generate a random number from 1-3
    Each number represents rock, paper, or scissors
    Return the string the number chose

Create function called playRound
    It takes two parameters: playerSelection and computerSelection
    Compare the values and return if the player wins or loses

Create a function called game
    Create a loop that loops 5 times
    Prompt the user for their input
    call computerPlay
    call playRound
    Display the result of the round
    At the end of the round declare who wins the game
*/

function computerPlay() {
    let x = Math.floor(Math.random()*3)+1;
    if (x == 1){
        return "rock";
    }else if (x == 2){
        return "paper";
    }else if (x == 3){
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    const lowSelect = playerSelection.toLowerCase();
    if (lowSelect == computerSelection){
        return "It's a Draw!";
    }
    if (lowSelect == "rock"){
        if (computerSelection == "paper"){
            ++compWins;
            return "You Lose! Paper beats Rock";
        }else if (computerSelection == "scissors") {
            ++playerWins;
            return "You Win! Rock beats Scissors";
        }
    }
    if (lowSelect == "paper"){
        if (computerSelection == "scissors"){
            ++compWins;
            return "You Lose! Scissors beats Paper";
        }else if (computerSelection == "rock") {
            ++playerWins;
            return "You Win! Paper beats Rock";
        }
    }
    if (lowSelect == "scissors"){
        if (computerSelection == "rock"){
            ++compWins;
            return "You Lose! Rock beats Scissors";
        }else if (computerSelection == "paper") {
            ++playerWins;
            return "You Win! Scissors beats Paper";
        }
    }
}
let playerWins = 0;
let compWins = 0;
//Displays Score
const playerScore = document.querySelector(".player-score");
playerScore.textContent = playerWins;
const compScore = document.querySelector(".computer-score");
compScore.textContent = compWins;

function game(playerChoice, computer){
    const result = document.querySelector('.result');
    result.textContent = playRound(playerChoice, computer);
    playerScore.textContent = playerWins;
    compScore.textContent = compWins;
    if(playerWins == 5){
        result.textContent = "Game Over! You Win";
    }else if(compWins == 5){
        result.textContent = "Game Over! You Lose";
    }
}
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    if(playerWins < 5 && compWins < 5){
        const computer = computerPlay();
        game('rock', computer)
    }
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    if(playerWins < 5 && compWins < 5){
        const computer = computerPlay();
        game('paper', computer);
    }
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    if(playerWins < 5 && compWins < 5){
        const computer = computerPlay();
        game('scissors', computer);
    }
});
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    playerWins = 0;
    compWins = 0;
    playerScore.textContent = playerWins;
    compScore.textContent = compWins;
});
//game();