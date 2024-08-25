//  ******************** Question-15 *********************

// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// const even_or_odd = number => {
//     // Your solution
//   };

//   console.log(even_or_odd(0)); // 'Even'
//   console.log(even_or_odd(2)); // 'Even'
//   console.log(even_or_odd(3)); // 'Odd'
//   console.log(even_or_odd(-3)); // 'Odd'

// ********************** Answer-15 ***********************
const result = document.querySelector(".box1");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const input = document.querySelector("input").value;
    if (input % 2 === 0) {
        result.innerHTML = `Number is Even`
    } else {
        result.innerHTML = `Number is Odd`;
    }
})


