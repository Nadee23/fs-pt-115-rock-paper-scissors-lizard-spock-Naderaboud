//write your code here
const posibilities = ["Paper", "Scissors", "Rock", "Lizard", "Spock"]
const AIChoice = posibilities[Math.floor(Math.random() * posibilities.length)]

function GameLogic(Choose) {

    console.log("User chose: " + Choose);
    console.log("Computer chose: " + AIChoice);

    if (AIChoice === Choose) {
        return "It´s a draw!"

    }

    if (Choose === "Rock") {
        if (AIChoice === "Scissors") {
            return "You win! 🎉"
        }
        if (AIChoice === "Lizard") {
            return "You win! 🎉"
        }
    }

    if (Choose === "Paper") {
        if (AIChoice === "Rock") {
            return "You win! 🎉"
        }
        if (AIChoice === "Spock") {
            return "You win! 🎉"
        }
    }

    if (Choose === "Scissors") {
        if (AIChoice === "Paper") {
            return "You win! 🎉"
        }
        if (AIChoice === "Lizard") {
            return "You win! 🎉"
        }
    }

    if (Choose === "Lizard") {
        if (AIChoice === "Paper") {
            return "You win! 🎉"
        }
        if (AIChoice === "Spock") {
            return "You win! 🎉"
        }
    }

    if (Choose === "Spock") {
        if (AIChoice === "Scissors") {
            return "You win! 🎉"
        }
        if (AIChoice === "Rock") {
            return "You win! 🎉"
        }
    }
    return "You lose 😢"
}
console.log(posibilities);
console.log(AIChoice);

let answer = prompt("Write 1 of the next options to play: Scissors, Rock, Paper, Lizard, Spock:");

console.log(GameLogic(answer));
