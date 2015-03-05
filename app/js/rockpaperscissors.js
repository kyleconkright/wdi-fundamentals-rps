////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if(
        playerMove === 'paper' && computerMove === 'rock',
        playerMove === 'rock' && computerMove === 'scissors',
        playerMove === 'scissors' && computerMove === 'paper'
    ){
        winner = "Player wins!";
    } else if(playerMove === computerMove) {
        winner = "It is a tie!";
    } else {
        winner = "Computer Wins!";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    while(playerWins < 5 && computerWins < 5) {
        var computerMove = getComputerMove();
        var playerMove = getPlayerMove();
        winner = getWinner(playerMove, computerMove);
        if(winner === 'player') {
            console.log("player wins");
            playerWins++;
        } else if(winner === 'computer') {
            computerWins++;
            console.log("computer wins");
        } else {
            console.log("it's a tie");
        }
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
        console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    }
    return [playerWins, computerWins];
}
playToFive();
