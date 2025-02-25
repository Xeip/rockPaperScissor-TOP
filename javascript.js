// Declare
const hand = ["rock", "paper", "scissor"];
let computerScore = 0;
let humanScore = 0;
let state, win, lose, computerNumber, humanNumber;
const condition = [0, 1, 2];
const redo = document.querySelector("#redo");
const btn = document.querySelectorAll("#select");
const div = document.querySelector("div");

// below to break line in textContent
div.setAttribute('style', 'white-space: pre;');

// event listeners

btn.forEach((btn) => btn.addEventListener("click", () => {
    humanNumber = Number(btn.className);
    computerNumber = getComputerChoice();
    playRound();
    if (computerScore == 5 || humanScore == 5){
        whoWins();
    }
}));

redo.addEventListener("click", reset);

// functions
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
    }

function playRound() {
    list = String(computerNumber)+ ',' + String(humanNumber);
    if (list == "1,0" || list == "2,1" || list == "0,2"){
        state = "You Lose!";
        win = computerNumber;
        lose = humanNumber;
        computerScore += 1;
        console.log("state: " + state);
    } else if(list == "0,0" || list == "1,1" || list == "2,2"){
        div.textContent = "It's a draw! Both are " + hand[computerNumber] + "\nLet's do it again\nYour score:" +humanScore + "\nComputer score:"+computerScore;
        return;
    } else {
        state = "You Win!";
        win = humanNumber;
        lose = computerNumber;
        humanScore += 1;
        console.log("state: " + state);
    }
    div.textContent = state +" "+ hand[win] + " beats " + hand[lose] + "\nYour score:" +humanScore + "\nComputer score:"+computerScore;
}

function whoWins(){
    alert(state +" "+ hand[win] + " beats " + hand[lose] + "\nYour score:" +humanScore + "\nComputer score:"+computerScore);
    if (humanScore == 5){
        alert("Congratulations! You win");
        reset();
    } else if (computerScore == 5){
        alert("HAHAHAH You lose..");
        reset();
    }
}

function reset() {
    computerScore = 0;
    humanScore = 0;
    div.textContent = "Your score:" +humanScore + "\nComputer score:"+computerScore;
}