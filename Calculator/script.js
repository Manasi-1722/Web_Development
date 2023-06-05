const display = document.querySelector('#display');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let currentOperator = '';
let firstNumber = '';
let secondNumber = '';
let result = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperator === '') {
            firstNumber += button.value;
            display.innerText = firstNumber;
        }
        else {
            secondNumber += button.value;
            display.innerText = secondNumber;
        }
    }) 
})

operatorButtons.forEach(button =>{
    button.addEventListener('click', () => {
        if(firstNumber !== '' && secondNumber !== ''){
            calculate();
        }
        currentOperator = button.value
    })
})

equalsButton.addEventListener('click', () => {
    if(firstNumber !== '' && secondNumber !== ''){
        calculate();
    }
})

clearButton.addEventListener('click', () => {
    currentOperator='';
    firstNumber='';
    secondNumber='';
    result='';
    display.innerText = '0'
})

function calculate(){
    switch (currentOperator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;

        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;

        case '%':
            result = parseFloat(firstNumber) / 100;
    
        default:
            return;
    }

    display.innerText = result;
    firstNumber = result.toString();
    secondNumber = '';
    currentOperator = '';
}