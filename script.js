// display declaration
const display = document.querySelector(".calculator-display");

// calculator declaration
const calculator = document.querySelector(".calculator-container");

// button logic
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
    }

    if (action == "delete") {
        display.textContent = display.textContent.slice(0,display.textContent.length-1);
    }


})

// calculation logic
const operate = (number1, number2, operator) => {   
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "/":
            return divide(number1, number2);
        case "*":
            return multiply(number1, number2);

    }
} 

const add = (a,b) => {
    return a+b;
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