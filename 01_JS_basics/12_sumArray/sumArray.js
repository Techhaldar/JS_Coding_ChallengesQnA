//  ******************** Question-12 *********************
// Write a JavaScript function called sumArray that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

// Requirements:
// The function should be named sumArray.
// It should accept a single parameter, which is an array of numbers.
// It should return the sum of all the numbers in the array.

// Example Usage:
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// console.log(sumArray([10, 20, 30, 40])); // Output: 100
// console.log(sumArray([-1, -2, -3, -4])); // Output: -10

// ********************** Answer-12 ***********************

function sumArray(arr) {
    let sum = 0;
    for (const element of arr) {
        sum = sum + element;

    }
    return sum;
}

console.log(sumArray([-112, 6, 7, 6, 2]))