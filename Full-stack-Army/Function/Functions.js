// Function Declarations:
function add(a, b) {
  return a + b;
}
const result = add(2, 3); // Calls the add function and stores the result in 'result'
console.log(result); // Outputs 5

// --------------------------------------------------------
// Arrow Functions:
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Outputs 20

// --------------------------------------------------------
// Default Parameters:
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Outputs "Hello, Guest!"
console.log(greet("John")); // Outputs "Hello, John!"

// --------------------------------------------------------
// Function Expressions:
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("John")); // Outputs "Hello, John!"

// --------------------------------------------------------
//Rest Parameters:
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Outputs 15

// --------------------------------------------------------
// Spread Operator:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Outputs [1, 2, 3, 4, 5, 6]

// --------------------------------------------------------
// Higher-Order Functions:
function operate(num1, num2, operation) {
  return operation(num1, num2);
}

const add = (a, b) => a + b;
const multiply1 = (a, b) => a * b;

console.log(operate(2, 3, add)); // Outputs 5
console.log(operate(2, 3, multiply1)); // Outputs 6
