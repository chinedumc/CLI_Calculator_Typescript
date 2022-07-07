"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter a number:\n');
    var operator = (0, readline_sync_1.question)('Enter an operator:\n');
    var secondStr = (0, readline_sync_1.question)('Enter a second number:\n');
    // const firstNum = isNumber(firstStr)
    // console.log(firstNum);
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // console.log(validInput);
    if (validInput) {
        // console.log(validInput);
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log('The result is:', result);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum * secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
