let display = document.getElementById('display');
let currentInput = '0';
function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function appendToDisplay(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function operate(operator) {
    currentInput += operator;
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    display.innerText = currentInput;
}
