//  ******************** Question-03 *********************
// Show/Hide Text
// Question:
// Create a button that toggles the visibility of a paragraph of text.

// Requirements:

// Input: None.
// Output: Toggle the text visibility on each click.
// Example Usage:
/* <button id="toggleBtn">Show/Hide Text</button>
<p id="text" style="display:none;">This is some text!</p> */

// ********************** Answer-03 ***********************

const button = document.querySelector("#toggleBtn");
const text = document.querySelector("#text")

button.addEventListener('click', () => {
    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
});