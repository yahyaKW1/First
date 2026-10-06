
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : "Cannot divide by zero";
}

function calculate(num1, num2, operationCallback) {
  return operationCallback(num1, num2);
}

let num3 = Number(prompt("Enter the first number:"));
let num4 = Number(prompt("Enter the second number:"));
let op = prompt("Enter operation (+, -, *, /):");

let result;
if (op === "+") {
  result = calculate(num3, num4, add);
} else if (op === "-") {
  result = calculate(num3, num4, subtract);
} else if (op === "*") {
  result = calculate(num3, num4, multiply);
} else if (op === "/") {
  result = calculate(num3, num4, divide);
} else {
  result = "Invalid operation";
}
console.log("Result: " + result);