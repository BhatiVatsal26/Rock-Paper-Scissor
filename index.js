const options = ['rock','paper','scissor'];
const playerOption = document.getElementById("player");
const computerOption = document.getElementById("computer");
let computerChoice;
let playerScore = 0;
let computerScore = 0;
const playerScoreTitle = document.getElementById("pScore");
const computerScoreTitle = document.getElementById("cScore");
const resultDisplay = document.getElementById("result");

function Playing(playerChoice){ 

    computerChoice = options[Math.floor(Math.random() * 3)];
    let result = "";

    if(computerChoice === playerChoice){
        result = "IT'S TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissor") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }

    }

    resultDisplay.classList.remove("greenText","redText")
    
    switch(result){
        case "YOU WIN!":
            playerScore++;
            resultDisplay.classList.add("greenText");
            break
        case "YOU LOSE!":
            computerScore++;
            resultDisplay.classList.add("redText");
            break;
        case "IT'S TIE!":
            playerScore++;
            computerScore++;
            break;
    }

    playerScoreTitle.textContent = `${playerScore}`
    computerScoreTitle.textContent = `${computerScore}`;
    playerOption.textContent = `Player: ${playerChoice}`;
    computerOption.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
}