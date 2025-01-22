let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('.container');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const result = document.querySelector('.result');
const spanPlayer = document.querySelector(".plaScore");
const spanComp = document.querySelector('.comScore');
const delate = document.querySelector('.btn-restart');

// Event Listeners for Player Choices
rockButton.addEventListener('click', () => {
    playGame("rock");
});

paperButton.addEventListener('click', () => {
    playGame("paper");
});

scissorsButton.addEventListener('click', () => {
    playGame("scissors");
});

// Restart Button Event
delate.addEventListener('click', restartGame);

// Main Game Logic
function playGame(playerSelection) {
    if (playerScore >= 5 || computerScore >= 5) return; // Prevent playing after game ends

    const ComputerSelection = getComputerChoice();
    playRound(playerSelection, ComputerSelection);
    scoreBoard(playerScore, computerScore);
    checkGameEnd();
}

// Computer Choice
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

// Update Scoreboard
function scoreBoard(playerScore, computerScore) {
    spanPlayer.innerText = `Player score: ${playerScore}`;
    spanComp.innerText = `Computer score: ${computerScore}`;
}

// Determine Winner of a Round
function playRound(playerSelection, ComputerSelection) {
    if (playerSelection === ComputerSelection) {
        displayResult("It's a Tie!", "tie");
    } else if (
        (playerSelection === "rock" && ComputerSelection === "scissors") ||
        (playerSelection === "scissors" && ComputerSelection === "paper") ||
        (playerSelection === "paper" && ComputerSelection === "rock")
    ) {
        playerScore++;
        displayResult(`You win! ${playerSelection} beats ${ComputerSelection}`, "win");
    } else {
        computerScore++;
        displayResult(`You lose! ${ComputerSelection} beats ${playerSelection}`, "loss");
    }
}

// Display Result Message
function displayResult(message, id) {
    const p = document.createElement('p');
    p.textContent = message;
    p.setAttribute('id', id);
    result.appendChild(p);
}

// Check for Game End
function checkGameEnd() {
    if (playerScore === 5 || computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('game-end');
        if (playerScore === 5) {
            h2.innerText = `You won ${playerScore} to ${computerScore}. Great job!`;
            h2.setAttribute('id', 'win');
        } else {
            h2.innerText = `You lost ${playerScore} to ${computerScore}. Try again next time.`;
            h2.setAttribute('id', 'loss');
        }
        result.appendChild(h2);

        // Disable buttons
        disableButtons();
    }
}

// Disable Buttons
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    rockButton.style.opacity = 0.5;
    paperButton.style.opacity = 0.5;
    scissorsButton.style.opacity = 0.5;
}

// Restart Game
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    result.innerHTML = ""; // Clear results
    scoreBoard(playerScore, computerScore); // Reset scoreboard

    // Enable buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    rockButton.style.opacity = 1;
    paperButton.style.opacity = 1;
    scissorsButton.style.opacity = 1;
}
