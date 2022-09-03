function  getComputerChoice() {
    let  weapons = ["Rock", "Paper", "Scissors"];
    return weapons[Math.floor(Math.random() * weapons.length)];
};