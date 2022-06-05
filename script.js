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
            return "You Lose! Paper beats Rock";
        }else if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors";
        }
    }
    if (lowSelect == "paper"){
        if (computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper";
        }else if (computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        }
    }
    if (lowSelect == "scissors"){
        if (computerSelection == "rock"){
            return "You Lose! Rock beats Scissors";
        }else if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper";
        }
    }
}
function game(){
    let playerWins = 0;
    let compWins = 0;
    /*for (let i = 0; i < 5; ++i){
        let playerSelection = prompt("Enter your choice");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.search("Draw") != -1){
            continue;
        }
        else if (result.search("Win") == -1){
            ++compWins;
        }else{
            ++playerWins;
        }
    }*/
    if (playerWins > compWins){
        console.log("You Win!");
    }else if (playerWins < compWins){
        console.log("You Lose!");
    }else{
        console.log("It's a Draw!")
    }
}
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const computer = computerPlay();
    console.log(playRound('rock', computer));
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const computer = computerPlay();
    console.log(playRound('paper', computer));
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    const computer = computerPlay();
    console.log(playRound('scissors', computer));
});
game();