function getComputerChoice() {
    let weapons = ["Rock", "Paper", "Scissors"];
    return weapons[Math.floor(Math.random() * weapons.length)];
};

function calculateWinner(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log("DRAW");
        return "It's a DRAW!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper") {
        console.log("WON");
        return "You WON!";
    } else {
        console.log("LOST");
        return "You LOST!";
    }
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    console.log("You chose " + ps.toUpperCase() + " Computer chose: " + cs.toUpperCase());
    calculateWinner(ps, cs);
    
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick Rock/Paper/Scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("WON")) {
            playerScore++;
        } else if (result.includes("LOST")) {
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
        console.log("The score is: player " + playerScore + " - " + computerScore + " computer");
        result = "";
    }


    if (playerScore === computerScore) {
        console.log("The game ends in a DRAW");
    } else if (playerScore > computerScore) {
        console.log("You WON the game!");
    } else {
        console.log("You LOST!");
    }
}


//game();

const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');

btnRock.addEventListener('click',() => {
    playRound("Rock", getComputerChoice());
});
btnPaper.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
});
btnScissors.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice());
});