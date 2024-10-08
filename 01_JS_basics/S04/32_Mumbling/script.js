//  ******************** Question - 32 *********************
// 18. Mumbling
// Given a string which includes only letters, write a function that produces the outputs below.

// const accum = str => {
//   // Your solution
// };

// console.log(accum('abcd')); // 'A-Bb-Ccc-Dddd'
// console.log(accum('cwAt')); // 'C-Ww-Aaa-Tttt'
// console.log(accum('RqaEzty')); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'

// ********************** Answer - 32 ***********************

const accum = str => {
  return str 
  .split('')
  .map((ele, index) => ele.toUpperCase() + ele.toLowerCase().repeat(index))
  .join('-')
}

console.log(accum('haldar'))
