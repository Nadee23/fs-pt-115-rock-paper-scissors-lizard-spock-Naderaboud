//write your code here
const posibilities = ["Paper", "Scissors", "Rock", "Lizard", "Spock"]
const AIChoice = posibilities[Math.floor(Math.random() * posibilities.length)]

function GameLogic(playerChoose) {

    console.log("User chose: " + playerChoose);
    console.log("Computer chose: " + AIChoice);

    if (AIChoice === playerChoose) {
        return "It´s a draw!"

    }

    if (playerChoose === "Rock" && (AIChoice === "Scissors" || AIChoice === "Lizard")) {
        return "You win! 🎉"

    }

    if (playerChoose === "Paper" && (AIChoice === "Rock" || AIChoice === "Spock")) {
        return "You win! 🎉"

    }

    if (playerChoose === "Scissors" && (AIChoice === "Paper" || AIChoice === "Lizard")) {
        return "You win! 🎉"

    }

    if (playerChoose === "Lizard" && (AIChoice === "Paper" || AIChoice === "Spock")) {
        return "You win! 🎉"

    }

    if (playerChoose === "Spock" && (AIChoice === "Scissors" || AIChoice === "Rock")) {
        return "You win! 🎉"

    }

    return "You lose 😢"
}

console.log(posibilities);
console.log(AIChoice);

let answer = prompt("Write 1 of the next options to play: Scissors, Rock, Paper, Lizard, Spock:");

console.log(GameLogic(answer));