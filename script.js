let rockBtn = document.getElementById("rock")
let paperBtn = document.getElementById("paper")
let scissorBtn = document.getElementById("scissor")
let resetBtn = document.getElementById("reset")
let finalText = document.getElementById("final")
let choice;

//Call the win function when conditions are met
function decide() {
    let choiceList = ['rock', 'paper', 'scissor'];
    let randomNumber = Math.floor(Math.random() * choiceList.length);
    let computerChoice = choiceList[randomNumber];
    console.log(computerChoice)
    if (choice === 'rock') {
        if (computerChoice === 'rock') {
            draw();
        } else if (computerChoice === 'paper') {
            lose();
        } else if (computerChoice === 'scissor') {
            win();
        }
    } else if (choice === 'paper') {
        if (computerChoice === 'rock') {
            win();
        } else if (computerChoice === 'paper') {
            draw();
        } else if (computerChoice === 'scissor') {
            lose();
        }
    } else if (choice === 'scissor') {
        if (computerChoice === 'rock') {
            lose();
        } else if (computerChoice === 'paper') {
            win();
        } else if (computerChoice === 'scissor') {
            draw();
        }
    }
}

//On clicking the rock button
function RockClick() {
    choice = 'rock';
    decide();
}


//On clicking the paper button
function PaperClick() {
    choice = 'paper';
    decide();
}

//On clicking the scissor button
function ScissorClick() {
    choice = 'scissor';
    decide();
}

//Create the functions for win, lose and draw
function win() {
    finalText.innerText = "You win!";
}

function lose() {
    finalText.innerText = "You lose!";
}

function draw() {
    finalText.innerText = "Game draw!";
}

function Reset() {
    finalText.innerText = "";
}