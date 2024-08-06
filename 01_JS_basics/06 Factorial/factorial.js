// ********************* Question - 6  ***************************
// Write a JavaScript function called factorial that takes a number as an argument and returns the factorial of that number.

// Requirements:
// The function should be named factorial.
// It should accept a single parameter, which is the number for which you want to calculate the factorial.
// It should return the factorial of the number.

// ************************ Answer-6 ****************************
// ******* method-1 ********

// function factorial(n) {
//     let fact = 1;
//     if (n < 0) {
//         alert("invalid input");
//     }
//     for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// alert(factorial(parseInt(prompt("enter the number:"))))

// ******* method-2 ********

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

