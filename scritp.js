const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit-button");
const operationButtons = document.querySelectorAll(".operation-button");
const equalsButton = document.querySelector(".equals-button");
const clearButton = document.querySelector(".clear-button");
const dotButton = document.querySelector(".dot-button");

let parameter = 0;
let operation = '';
let dotCount = 0;

clearButton.addEventListener('click', () => {
    display.textContent = '0';
    parameter = 0;
    operation = '';
});

dotButton.addEventListener('click', () => {
    if(dotCount == 0) {
        display.textContent += '.';
        dotCount++;
    }
});

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(display.textContent == '0') {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        parameter = display.textContent;
        display.textContent = '0';
        dotCount = 0;

        if(button.textContent == '+') {
            operation = '+';
        } else if (button.textContent == '-') {
            operation = '-';
        } else if (button.textContent == '×') {
            operation = '*';
        } else if(button.textContent == '÷') {
                operation ='/';
        }
        
    })
});

equalsButton.addEventListener('click', () => {
    if(operation == '+') {
        display.textContent = parseFloat(parameter) + parseFloat(display.textContent);
    } else if (operation == '-') {
        display.textContent = parseFloat(parameter) - parseFloat(display.textContent);
    } else if (operation == '*') {
        display.textContent = parseFloat(parameter) * parseFloat(display.textContent);
    }  else if (operation == '/') {
        display.textContent = parseFloat(parameter) / parseFloat(display.textContent);
    }
})


