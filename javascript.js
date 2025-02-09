const hand = ["rock", "paper", "scissor"];
let computerScore = 0;
let humanScore = 0;
let state, win, lose, computerNumber, humanNumber;
let round = 1;
const condition = [0, 1, 2];

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
//     console.log(hand[computerNumber]);
//     console.log(typeof(computerNumber));
    }

function getHumanChoice() {
    number = prompt("Please input your choice: \n0: rock \n1: paper \n2: scissor");
    number = Number(number);
    console.log("number:" + number);
    console.log("tipe:" + typeof(number));
    cek = number + 1;
    console.log("cek: " + cek);
    if (!condition.includes(number)){
        alert ("Please return either 0, 1, or 2");
        playGame();
    }
    return Number(number);
    
}

function playRound(computerNumber, humanNumber) {
    list = String(computerNumber)+ ',' + String(humanNumber);
    if (list == "1,0" || list == "2,1" || list == "0,2"){
        state = "You Lose!";
        win = computerNumber;
        lose = humanNumber;
        computerScore += 1;
        console.log("state: " + state);
    } else if(list == "0,0" || list == "1,1" || list == "2,2"){
        alert("It's a draw!\nBoth are " + hand[computerNumber] + "\nLet's do it again");
        playGame();
    } else {
        state = "You Win!";
        win = humanNumber;
        lose = computerNumber;
        humanScore += 1;
        console.log("state: " + state);
    }

    alert(state +" "+ hand[win] + " beats " + hand[lose]);
}

function playGame() {
    if (round == 1){
        alert("Welcome to rock, paper, scissor game!\nWe'll play in 5 rounds\nThis is your round "+ round)
    }
    computerNumber = getComputerChoice();
    console.log("computerNumber: " + computerNumber);
    humanNumber = getHumanChoice();
    console.log("humanNumber: " + humanNumber);
    playRound(computerNumber, humanNumber);
    round += 1;
    alert("Your score:" + humanScore + "\nComputer score:" + computerScore)
    if (round <= 5){
        playGame();
    }
}