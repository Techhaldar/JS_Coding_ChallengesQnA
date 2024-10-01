// Find the Largest Number in an Array
// Problem:
// Write a function that finds the largest number in an array.

// Explanation:
// Use the Math.max() function combined with the spread operator (...) to pass all elements of the array into the function.

function findLargest(arr){ // [1, 5, 8, 9] output : 9
  return Math.max(...arr);
}

console.log(findLargest([1, 5, 8, 9, 10, 101]))