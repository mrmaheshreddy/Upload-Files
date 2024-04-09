let playerText=document.querySelector("#playerText");
let computerText=document.querySelector("#computerText");
let resultText=document.querySelector("#resultText");

let btn=document.querySelectorAll(".btn")

let player;
let computer;
let result;

btn.forEach(button => button.addEventListener("click",()=>{

    player = button.textContent
    computerTurn();
    playerText.textContent= `Player: ${player}`
    computerText.textContent= `Computer : ${computer}`
    resultText.textContent= checkWinner();
}));


function computerTurn(){
    let randNum=Math.floor(Math.random()*3)+1;

    switch(randNum){
        case 1: 
            computer="ROCK";
            break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCISSORS";
            break;
    }
}

function checkWinner(){

    if(player == computer){
        return "Draw";
    }

    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You Win!" : "You Lose!"
    }

    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }

    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}
