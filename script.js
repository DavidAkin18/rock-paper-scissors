let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('.container');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const result = document.querySelector('.result');
const spanPlayer = document.querySelector(".plaScore");
const spanComp= document.querySelector('.comScore');

   
//event
rockButton.addEventListener('click', ()=>{
    const playerSelection = "rock";
    const ComputerSelection = getComputerChoice();
    playRound(playerSelection, ComputerSelection);
    scoreBoard(playerScore, computerScore)
    
    runScore(playerScore, computerScore);
});

paperButton.addEventListener('click', ()=>{
    const playerSelection = "paper";
    const ComputerSelection = getComputerChoice();
    playRound(playerSelection, ComputerSelection);
    scoreBoard(playerScore, computerScore)
   
    runScore(playerScore, computerScore);
});

scissorsButton.addEventListener('click', ()=>{
    const playerSelection = "scissors";
    const ComputerSelection = getComputerChoice();
    playRound(playerSelection, ComputerSelection);
    scoreBoard(playerScore, computerScore)
    runScore(playerScore, computerScore);
});


//to check computer choice
function getComputerChoice(){
    const option = ["rock", "paper", "scissors"];
    const choice = option[Math.floor(Math.random() * option.length)];
    console.log(choice);
    return choice;
};getComputerChoice();

//score board
function scoreBoard(playerScore, computerScore){
    spanPlayer.innerText = `Player score: ${playerScore}`;
    spanComp.innerText = `Computer score: ${computerScore}`;
}scoreBoard()

//to check who wins
function playRound(playerSelection, ComputerSelection){
    if(playerSelection === ComputerSelection){
        console.log('Tie');
        const p = document.createElement('p');
        p.textContent =("it's a Tie");
        result.appendChild(p);


    }
    else if( (playerSelection === "rock" && ComputerSelection === "scissors") ||
            (playerSelection === "scissors" && ComputerSelection ==="paper") || 
            (playerSelection === "paper" && ComputerSelection === "rock"))
        {
        console.log(`you win! ${playerSelection} beats ${ComputerSelection}`);
        const p = document.createElement('p');
        p.textContent =(`you win! ${playerSelection} beats ${ComputerSelection}`)
        result.appendChild(p);
        playerScore++;
    }else{
        console.log(`you lose! ${ComputerSelection} beats ${playerSelection}`);
        const p = document.createElement('p');
        p.textContent =(`you lose! ${ComputerSelection} beats ${playerSelection}`)
        result.appendChild(p);
        computerScore++;
    };
}playRound();



//to check how many times of who wins

function runScore(playerScore, computerScore){
    console.log(playerScore, computerScore)
    if(playerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('header-player');
        h2.innerText = `You won ${playerScore} to ${computerScore}. Great job you beat Computer`;
        result.append(h2)
        playerScore++
    }
    if(computerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('header-computer');
        h2.innerHTML = `You lost ${playerScore} to ${computerScore}. try again next time`;
        console.log('hey');
        result.append(h2)
        computerScore++
    }
}runScore()

