// 2. Find the Second Largest Number in an Array
// Problem:
// Write a function that finds the second largest number in an array.

// Example:
// Input: [3, 5, 2, 5, 7, 7, 1]
// Output: 5


function secondLargest(arr) {
  let uni = [...new Set(arr)];
  uni.sort((a, b) => b - a);
  return uni[1];
}

console.log(secondLargest([3, 5, 2, 5, 7, 7, 1])) // output : 5
