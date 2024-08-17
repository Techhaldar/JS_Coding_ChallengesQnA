//  ******************** Question-08 *********************
// Input Field Focus Alert
// Question:
// Create an input field that displays an alert when it gains focus.

// Requirements:

// Input: Focus on input field.
// Output: Display an alert.
// Example Usage:
/* <input type="text" id="focusInput" placeholder="Click here"> */

// ********************** Answer-08 ***********************

const focusInput = document.querySelector('#focusInput')

focusInput.addEventListener('focus', () => {
    alert("Input field is focused!");
});

