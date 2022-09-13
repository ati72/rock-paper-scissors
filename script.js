function getComputerChoice() {
    let weapons = ["Rock", "Paper", "Scissors"];
    return weapons[Math.floor(Math.random() * weapons.length)];
};


function calculateWinner(playerSelection, computerSelection) {
   
    if(playerSelection === computerSelection) {
        console.log("DRAW");
        computerScore++;
        playerScore++;
        displayWinner.textContent = "It's a DRAW";
        return "It's a DRAW!";
        
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper") {
        console.log("WON");
        playerScore++;
        displayWinner.textContent = "You win this round."
        return "You WON!";
    
    } else {
        console.log("LOST");
        computerScore++;
        displayWinner.textContent = "Computer wins this round."
        return "You LOST!";
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    console.log("You chose " + ps.toUpperCase() + " Computer chose: " + cs.toUpperCase());
    announcer.textContent = "You chose " + ps.toUpperCase() + " Computer chose: " + cs.toUpperCase()
    calculateWinner(ps, cs);
    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;
    console.log("The score is: player " + playerScore + " - " + computerScore + " computer");

    if(parseInt(computerScore) === 5) {
        alert("Game Over. Computer won.");
        resetScore();

    } else if(parseInt(playerScore) === 5) {
        alert("Congratulations, You Won!");
        resetScore();
    }
    
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;
}

const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const announcer = document.querySelector('.announcer');
const displayWinner = document.querySelector('.announcer-winner');


btnRock.addEventListener('click',() => {
    playRound("Rock", getComputerChoice());
});
btnPaper.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
});
btnScissors.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice());
});


