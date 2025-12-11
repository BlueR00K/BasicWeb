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

// Buttons Lab

// Variavble Declaration Methods
let cartQuantity = 0; //modern var
const MESSAGE = "Hello"; //constant
var variable = 5; //old

// console.log(typeof variable);
// console.log(typeof MESSAGE);

// Calculator Lab

let calculation = '';

// Booleans Lab

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

// Functions Lab

// function func1() {
//     console.log('Hello from func1');
//     return 0;
// }

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

// console.log(result = func1());


// End of website-v2.js