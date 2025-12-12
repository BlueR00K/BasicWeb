// Files/Scripts/website-v2.js
// JavaScript code for Website-v2

// This code performs basic arithmetic operations and logs the results to the console
// let calculation = 5 + 3;
// console.log(`The result of 5 + 3 is: ${calculation}`);
// calculation = calculation * 2;
// console.log(`After multiplying by 2, the result is: ${calculation}`);
// calculation = calculation - 4;
// console.log(`After subtracting 4, the final result is: ${calculation}`);

// End of arithmetic operations

// Mini Market Lab

// Variavble Declaration Methods
let cartQuantity = 0; //modern var
const MESSAGE = "Hello"; //constant
var variable = 5; //old

// console.log(typeof variable);
// console.log(typeof MESSAGE);

// Calculator Lab

let calculation = '';

// Rock Paper Scissors Lab

// console.log(5 === 5.00);
// console.log(5 === "5.00");

// if (calculation) {
//     console.log(calculation);
// }
// else if (calculation === '0') {
//     console.log(calculation)
// }
// else {
//     console.log("Enter Instruction");
// }

let randomNumber = 0;
let computerMove = '';
let result = '';

// Falsy Values: false 0 '' NaN undefined null

// Short Condision: Condision ? Truethy : Falsy
// Guard Operator: Condision && Instruction
// let message;
// if (condition) {
//     message = 'Hello';
// }
// Shortcut >> let message = condition && 'Hello

// const currency = 'EUR' || 'USD';
// console.log(currency) --> EUR

// Rock Paper Scissors Functional Lab

// function func1() {
//     console.log('Hello from func1');
//     return 0;
// }

const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

function pickComputerMove() {
    randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissors';
    }

    return computerMove;
}

function playGame(playerMove) {

    computerMove = pickComputerMove();
    console.log(`Computer Move: ${computerMove}`);

    switch (playerMove) {

        // Player Picked Rock
        case 'rock':
            if (computerMove === 'Rock') {
                result = 'Tie.';
            }
            else if (computerMove === 'Paper') {
                result = 'You Lose.';
            }
            else {
                result = 'You Win.';
            }
            break;

        // Player Picked Paper
        case 'paper':
            if (computerMove === 'Rock') {
                result = 'You Win.';
            }
            else if (computerMove === 'Paper') {
                result = 'Tie.';
            }
            else {
                result = 'You Lose.';
            }
            break;

        // Player Picked Scissors
        case 'scissors':
            if (computerMove === 'Rock') {
                result = 'You Lose.';
            }
            else if (computerMove === 'Paper') {
                result = 'You Win.';
            }
            else {
                result = 'Tie.';
            }
    }

    switch (result) {

        case 'You Win.':
            score.wins++;
            break
        case 'You Lose.':
            score.losses++;
            break;
        case 'Tie.':
            score.ties++;

    }



    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

}

function resetScore() {
    score.wins = score.losses = score.ties = 0;
}

// console.log(result = func1());

// Tax Lab

function calculateTax(cost = Number, taxPercent = Number) {
    taxPercent = taxPercent || 0.1;
    return (cost * taxPercent);
}

// Object Lab

// Object Declaration
// const product = {
//     name: 'socks',
//     price: 1090
// };

// console.log(product);
// console.log(product.name);
// console.log(product.price);

// product.name = 'cotton socks';
// console.log(product);

// product.newProperty = true;
// console.log(product);

// delete product.newProperty;
// console.log(product);

// End of website-v2.js