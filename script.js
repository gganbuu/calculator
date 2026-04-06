// display declaration
const display = document.querySelector(".calculator-display");

// calculator declaration
const calculator = document.querySelector(".calculator-container");

// button logic
let number1 = null;
let number2 = null;
let operator = null;
calculator.addEventListener("click", (e) => {
    const target = e.target;

    if (!target.classList.contains("btn")) return;

    const value = target.dataset.value;
    const action = target.dataset.action;

    if (value) {
        display.textContent += value;
    }

    if (action == "clear") {
        display.textContent = "";
        number1 = null;
        number2 = null;
        operator = null;
    }

    if (action == "delete") {
        display.textContent = display.textContent.slice(0,-1);
    }

    if (action == "equals") {
        if (number1 !== null && operator !== null) {
            number2 = display.textContent
            display.textContent = String(operate(number1, number2, operator))
            number1 = display.textContent
            number2 = null;
            operator = null;
        } 

    }
    
    if (["+", "-", "×", "÷"].includes(action)) {
        if (operator == null) {
            number1 = Number(display.textContent)
            operator = action
            display.textContent = ""
        } else if (operator !== null && number1 !== null) {
            number2 = Number(display.textContent)
            display.textContent = operate(number1, number2, operator)
            number1 = display.textContent
            number2 = null
            operator == null
        } else if (number1 !== null && number2 == null && operator == null) {
            operator = action
            display.textContent = ""
        }
    }
})

    

    


    // return number1, number2 and operator
    


// calculation logic
const operate = (number1, number2, operator) => {       
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "×":
            return multiply(number1, number2);
        case "÷":
            return divide(number1, number2);

    }
} 

const add = (a,b) => {
    return Number(a)+Number(b);
};

const subtract = (a,b) => {
	return a-b; 
};

const divide = (a,b) => {
	return a/b; 
};

const multiply = (a,b) => {
	return a*b; 
};

// prevous declarations
// const deleteBtn = document.querySelector(".calculator-delete")
// const clearAllBtn = document.querySelector(".calculator-clearall")
// const sevenBtn = document.querySelector(".calculator-7")
// const eightBtn = document.querySelector(".calculator-8")
// const nineBtn = document.querySelector(".calculator-9")
// const fourBtn = document.querySelector(".calculator-4")
// const fiveBtn = document.querySelector(".calculator-5")
// const sixBtn = document.querySelector(".calculator-6")
// const oneBtn = document.querySelector(".calculator-1")
// const twoBtn = document.querySelector(".calculator-2")
// const threeBtn = document.querySelector(".calculator-3")
// const addBtn = document.querySelector(".calculator-add")
// const subtractBtn = document.querySelector(".calculator-subtract")
// const multiplyBtn = document.querySelector(".calculator-multiply")
// const divideBtn = document.querySelector(".calculator-divide")
// const zeroBtn = document.querySelector(".calculator-0")
// const dotBtn = document.querySelector(".calculator-dot")
// const equalsBtn = document.querySelector(".calculator-equals")