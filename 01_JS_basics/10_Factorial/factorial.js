//  ******************** Question-10 *********************
// Write a JavaScript function called factorial that takes a non-negative integer as an argument and returns its factorial. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. For example, the factorial of 5 is 5!=5×4×3×2×1=120.

// Requirements:
// The function should be named factorial.
// It should accept a single parameter, which is the non-negative integer whose factorial is to be computed.
// It should return the factorial of the given integer.

// ********************** Answer-10 ***********************
function factorial(num) {
    if (num <= 0) {
        console.log("Not a non-negative number");
    }
    let fact = 1;
    let steps = `${num}! = `
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
        if (i < num) {
            steps = steps + `${i} x `
        } else {
            steps = steps + `${i} `
        }
    }
    fact *= 1;
    steps = steps + `= ${fact}`
    return steps;
}

console.log(factorial(prompt("enter the number")));
