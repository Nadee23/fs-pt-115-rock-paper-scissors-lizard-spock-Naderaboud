//write your code here
const posibilities = ["Paper", "Scissors", "Rock", "Lizard", "Spock"]
const AIChoice = posibilities[Math.floor(Math.random() * posibilities.length)]

function GameLogic(playerChoose) {

    console.log("User chose: " + playerChoose);
    console.log("Computer chose: " + AIChoice);

    // draw condition
    if (AIChoice === playerChoose) {
        return "It´s a draw!"

    }
    //if player choose rock win conditions
    if (playerChoose === "Rock" && (AIChoice === "Scissors" || AIChoice === "Lizard")) {
        return "You win! 🎉"

    }
    //if player choose paper win conditions
    if (playerChoose === "Paper" && (AIChoice === "Rock" || AIChoice === "Spock")) {
        return "You win! 🎉"

    }
    //if player choose scissors win conditions
    if (playerChoose === "Scissors" && (AIChoice === "Paper" || AIChoice === "Lizard")) {
        return "You win! 🎉"

    }
    //if player choose lizard win conditions
    if (playerChoose === "Lizard" && (AIChoice === "Paper" || AIChoice === "Spock")) {
        return "You win! 🎉"

    }
    //if player choose Spock win conditions
    if (playerChoose === "Spock" && (AIChoice === "Scissors" || AIChoice === "Rock")) {
        return "You win! 🎉"

    }
    //if player doesn´t wins, he lose.
    return "You lose 😢"
}

console.log(posibilities);
console.log(AIChoice);

let answer = prompt("Write 1 of the next options to play: Scissors, Rock, Paper, Lizard, Spock:");

console.log(GameLogic(answer));