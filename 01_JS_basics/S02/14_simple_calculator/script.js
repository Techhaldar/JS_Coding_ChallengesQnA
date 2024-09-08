const inputNum = document.querySelectorAll('.num');
const operation = document.querySelectorAll('.oper');
const output = document.getElementById('output');

let currentInput = '';
let firstOperand = '';
let operator = '';
let result = '';


inputNum.forEach(function (button) {
    button.addEventListener('click', function () {
        currentInput += button.id;
        updateDisplay();
    });
});

operation.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.id === 'C') {
            // Clear the calculator
            currentInput = '';
            firstOperand = '';
            operator = '';
            result = '';
            output.textContent = '';
        } else if (button.id === '=') {
            // Calculate the result
            if (firstOperand !== '' && currentInput !== '' && operator !== '') {
                result = eval(firstOperand + operator + currentInput);
                output.textContent = result;
                currentInput = result;
                firstOperand = '';
                operator = '';
            }
        } else {
            // Store the first operand and operator
            if (currentInput !== '') {
                if (firstOperand === '') {
                    firstOperand = currentInput;
                } else {
                    firstOperand = eval(firstOperand + operator + currentInput);
                }
                operator = button.id;
                currentInput = '';
                updateDisplay();
            }
        }
    });
});

function updateDisplay() {
    output.textContent = `${firstOperand} ${operator} ${currentInput}`;
}
