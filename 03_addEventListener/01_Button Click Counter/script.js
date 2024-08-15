//  ******************** Question-01 *********************
// Button Click Counter
// Question:
// Create a button that, when clicked, increments a counter displayed on the screen.

// Requirements:

// Input: None.
// Output: Update the counter each time the button is clicked.
// Example Usage:

// <button id="counterBtn">Click me!</button>
// <p>Count: <span id="count">0</span></p>

// ********************** Answer-01 ***********************

const button = document.querySelector('#counterBtn');

const countDisplay = document.querySelector("#count")

let count = 0;

button.addEventListener('click', () => {
    count++;
    countDisplay.innerHTML = count;  
})