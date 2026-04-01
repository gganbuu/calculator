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
