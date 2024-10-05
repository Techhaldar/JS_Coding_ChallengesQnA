// Find the Smallest Number in an Array
// Problem:
// Write a function to find the smallest number in an array.

// Example:
// Input: [3, 5, 7, 2, 8]
// Output: 2

function smallestNum(arr) {
  let smallestNumber = arr[0]   // [3, 5, 7, 2, 8]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}

console.log(smallestNum([3, 5, 7, 2, 8]));