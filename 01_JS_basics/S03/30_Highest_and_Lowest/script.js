//  ******************** Question - 30 *********************
// Given a string of space-separated numbers, write a function that returns the highest and lowest numbers. There will always be at least one number in the input string.

// const highAndLow = numbers => {
//     // Your solution
//   };

//   console.log(highAndLow('1 2 3 4 5')); // '5 1'
//   console.log(highAndLow('1 2 -3 4 5')); // '5 -3'
//   console.log(highAndLow('1 9 3 4 -5')); // '9 -5'
//   console.log(highAndLow('0 -214 542')); // '542 -214'

// ********************** Answer - 30 ***********************
const userInput = document.querySelector("#userInput").value;
const btn = document.querySelector("#btn");
const output = document.querySelector(".box");

const highAndLow = numbers => {
    const arr = numbers.split(' ').map(Number);
    return `${Math.max(...arr)} ${Math.min(...arr)}`

}


btn.addEventListener('click', () =>{
    const result = highAndLow(userInput);
    output.textContent = result;
});

console.log(highAndLow('1 8 3 4 5 6'));
