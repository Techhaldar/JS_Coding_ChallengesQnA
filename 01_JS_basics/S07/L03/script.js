// Sum of All Elements in an Array
// Problem:
// Write a function that calculates the sum of all numbers in an array.

// Example:
// Input: [1, 2, 3, 4]
// Output: 10

function sumArray(arr){
  return arr.reduce((sum, current) => sum + current, 0);
}

console.log(sumArray([1, 2, 3, 4]));