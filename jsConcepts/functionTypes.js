// Function Declaration
// 1. Function Declarations are hoisted.
// 2. The function definition is moved to the top during compilation, so it can be called before the declaration.
// 3. Can be called before or after the function is defined in the code.

sum(2, 3); // Works, as the function is hoisted
function sum(num1, num2) {
    console.log(num1 + num2); // Output: 5
}

// .................. 

// Function Expression
// 1. Function Expressions are not hoisted.
// 2. We cannot call the function before its definition because the function is assigned to a variable after execution starts.
// 3. The function is assigned to a variable and can be invoked only after the assignment.

// product(2, 3); // Error: Cannot access 'product' before initialization
const product = function (num1, num2) {
    console.log(num1 * num2); // Output: 6
};
