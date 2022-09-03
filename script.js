function getComputerChoice() {
    let weapons = ["Rock", "Paper", "Scissors"];
    return weapons[Math.floor(Math.random() * weapons.length)];
};

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    console.log("You chose " + ps.toUpperCase() + " Computer chose: " + cs.toUpperCase());

    if (ps == "rock") {
        if (cs == "scissors") {
            return "Rock beats scissors, you WON!"
        } else if (cs == "paper") {
            return "Paper beats Rock, you LOST!"
        } else {
            return "It's a DRAW!"
        }
    } else if (ps == "paper") {
        if (cs == "scissors") {
            return "Scissors beats paper, you LOST!"
        } else if (cs == "rock") {
            return "Paper beats Rock, you WON!"
        } else {
            return "It's a DRAW!"
        }
    } else if (ps == "scissors"){
        if (cs == "paper") {
            return "Scissors beats paper, you WON!"
        } else if (cs == "rock") {
            return "Rock beats scissors, you LOST!"
        } else {
            return "It's a DRAW!"
        }
    }

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


game();