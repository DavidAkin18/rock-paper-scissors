console.log("hi")
const option = ["rock", "paper", "scissors"]
function getComputerChoice(){
    const choice = option[Math.floor(Math.random() * option.length)];
    return choice;
}getComputerChoice();

function checkWinner(playerSelection, ComputerSelection){
    if(playerSelection == ComputerSelection){
        return "Tie!";
    } 
    else if( (playerSelection =="rock" && ComputerSelection == "scissors") ||
    (playerSelection == "scissors" && ComputerSelection =="paper") || 
    (playerSelection == "paper" && ComputerSelection == "rock")){
        return "player";
    }
    else {
        return "Computer";
    }
}checkWinner();

function playRound(playerSelection, ComputerSelection){
    const result = checkWinner(playerSelection, ComputerSelection);
    if(result == "Tie!"){
        return "it's a Tie";
    }
    else if(result == "player"){
        return `you win! ${playerSelection} beats ${ComputerSelection}`
    }
    else{
        return `you lose! ${ComputerSelection} beats ${playerSelection}`
    }
}playRound()

// const playerSelection ="rock";
// const ComputerSelection = getComputerChoice();
// console.log(playRound(playerSelection, ComputerSelection));


function getPlayerChoice(){
    let validationInput = false;
    while(validationInput == false){
        const choice = prompt("rock paper scissors");
        if(choice == null ){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(option.includes(choiceInLower)){
            validationInput = true
            return choiceInLower;
        }
    }
}getPlayerChoice();


function game(){
    let scorePlayer = 0;
    let ComputerPlayer = 0;
    console.log("welcome") 
    for(let i = 0; i < 5 ; i++){
        const playerSelection= getPlayerChoice();
        const ComputerSelection = getComputerChoice();
        console.log(playRound(playerSelection, ComputerSelection));
    console.log("--------")
    if(checkWinner(playerSelection, ComputerSelection) == "player"){
        scorePlayer++;
    }
    else if(checkWinner(playerSelection, ComputerPlayer) == "Computer"){
        ComputerPlayer++;
    }
}
    console.log("game-over")
    if(scorePlayer > ComputerPlayer){
        console.log("player was the winner")
    }else if(scorePlayer < ComputerPlayer){
        console.log("computer was the winner")
    }else{
        console.log("we have a tie");
    }
}game()

