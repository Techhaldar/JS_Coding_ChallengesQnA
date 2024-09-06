//  ******************** Question - 28 *********************
// Write a function that accepts an array of 10 integers (between 0 and 9), and returns a string of those numbers in the form of a phone number.

// const createPhoneNumber = numbers => {
//     // Your solution
//   };

//   console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
//   console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
//   console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'

// ********************** Answer - 28 ***********************

const createPhoneNumber = numbers => {
    const str = numbers.join('');
    return `(+${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)})`
};
const generateRandomNumber = () => {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
};
console.log(createPhoneNumber(generateRandomNumber()));
