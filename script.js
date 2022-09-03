function  getComputerChoice() {
    let  weapons = ["Rock", "Paper", "Scissors"];
    return weapons[Math.floor(Math.random() * weapons.length)];
};

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if(ps == "rock"){
        if(cs == "scissors"){
            return "Rock beats scissors, you WON!"
        } else if(cs == "paper") {
            return "Paper beats Rock, you LOST!"
        } else {
            return "It's a DRAW!"
        }
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));