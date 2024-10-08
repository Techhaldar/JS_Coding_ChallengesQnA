//  ******************** Question - 35 *********************

// 21. Bit Counting
// Write a function that takes an integer as input, and returns the number of bits that are equal to 1 in the binary representation of that number. You can guarantee that input is non-negative. For example the binary representation of 1234 is 10011010010, so the function should return 5 in this case.

// const countBits = n => {
//   // Your solution
// };

// console.log(countBits(0)); // 0
// console.log(countBits(4)); // 1
// console.log(countBits(7)); // 3
// console.log(countBits(9)); // 2

// ********************** Answer - 35 ***********************

const countBits = n => {
  return n.toString(2).split('0').join('').length;
};

console.log(countBits(11))