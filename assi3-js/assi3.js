let firstNum = "";
let secondNum = "";
let currentOperator = null;
let screenValue = "0";

const screen = document.getElementById("screen");


function updateScreen() {
    screen.innerText = screenValue;
}


function pressNum(num) {
    if (currentOperator === null) {
        firstNum += num;
        screenValue = firstNum;
    } else {
        secondNum += num;
        screenValue = secondNum;
    }
    updateScreen();
}

function setOperator(op) {
    
    if (secondNum !== "") {
        calculate();
    }
    currentOperator = op;
}


function calculate() {
    if (firstNum === "" || secondNum === "") return;

    let result = 0;
    let a = parseFloat(firstNum);
    let b = parseFloat(secondNum);

    if (currentOperator === "+") result = a + b;
    if (currentOperator === "-") result = a - b;
    if (currentOperator === "*") result = a * b;
    if (currentOperator === "/") result = a / b;

  
    screenValue = result;
    firstNum = result.toString();
    secondNum = "";
    currentOperator = null;
    updateScreen();
}

function clearAll() {
    firstNum = "";
    secondNum = "";
    currentOperator = null;
    screenValue = "0";
    updateScreen();
}