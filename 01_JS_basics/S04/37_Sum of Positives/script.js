//  ******************** Question - 37 *********************

// 23. Sum of Positives
// Given an array of numbers, write a function that returns the sum of all of the positives ones. If the array is empty, the sum should be 0.

// const positiveSum = arr => {
//   // Your solution
// };

// console.log(positiveSum([1, 2, 3, 4, 5])); // 15
// console.log(positiveSum([1, -2, 3, 4, 5])); // 13
// console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
// console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
// console.log(positiveSum([])); // 0

// ********************** Answer - 37 ***********************

const positiveSum = arr => {
  return arr.reduce((acc, cur) => (cur > 0 ? acc + cur : acc), 0);
};

console.log(positiveSum([1, 2, 3, 4, -1, -5, 0, 56]))

