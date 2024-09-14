//  ******************** Question - 33 *********************

// 19. Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces.

// const spinWords = str => {
//   // Your solution
// };

// console.log(spinWords('This is a test')); // 'This is a test'
// console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
// console.log(spinWords('This is another test')); // 'This is rehtona test'

// ********************** Answer - 33 ***********************

const spinWords = str => {
  return str
    .split(' ')
    .map(word => (word.length < 5 ? word : word.split('').reverse('').join('')))
    .join(' ');
};

console.log(spinWords("hii this is ratin Haldar, I am BCA Student and now days I am learning English speaking Course"));

