let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('.container');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const result = document.querySelector('.result');
const spanPlayer = document.querySelector(".plaScore");
const spanComp= document.querySelector('.comScore');
const delate = document.querySelector('.btn-restart');

   
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

function reset(index){
    container.splice(index, 1)
}reset()



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
        p.setAttribute('id','tie')
        result.appendChild(p);
    }
    else if( (playerSelection === "rock" && ComputerSelection === "scissors") ||
            (playerSelection === "scissors" && ComputerSelection ==="paper") || 
            (playerSelection === "paper" && ComputerSelection === "rock"))
        {
        console.log(`you win! ${playerSelection} beats ${ComputerSelection}`);
        const p = document.createElement('p');
        p.textContent = (`you win! ${playerSelection} beats ${ComputerSelection}`)
        p.setAttribute('id','win')
        result.appendChild(p);
        playerScore++;
        delate.addEventListener('click', ()=>{
            playerScore=0
            spanPlayer.textContent=`Player score: ${playerScore}`
        })
    }else{
        console.log(`you lose! ${ComputerSelection} beats ${playerSelection}`);
        const p = document.createElement('p');
        p.textContent =(`you lose! ${ComputerSelection} beats ${playerSelection}`)
        p.setAttribute('id','loss')
        result.appendChild(p);
        computerScore++;
        delate.addEventListener('click', ()=>{
            computerScore= 0  
            spanComp.textContent=`Computer score: ${computerScore}`
        })
    };
}playRound();



//to check how many times of who wins

function runScore(playerScore, computerScore){
    if(playerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('header-player');
        h2.innerText = `You won ${playerScore} to ${computerScore}. Great job you beat Computer`;
        h2.setAttribute('id','win')
        result.append(h2)
        playerScore++
    }
    if(computerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('header-computer');
        h2.innerHTML = `You lost ${playerScore} to ${computerScore}. try again next time`;
        p.setAttribute('id','loss')
        console.log('hey');
        result.append(h2)
        computerScore++
    }
    delate.addEventListener('click', (nu)=>{
        nu=''
        result.innerHTML=nu
    })
}




