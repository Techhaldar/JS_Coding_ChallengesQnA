//  ******************** Question-06 *********************
// Hover to Change Text
// Question:
// Create a paragraph that changes its text content when the mouse hovers over it.

// Requirements:

// Input: Mouse hover.
// Output: Change the paragraph text.

// Example Usage:
/* <p id="hoverText">Hover over me!</p> */

// ********************** Answer-06 ***********************

const hoverText = document.querySelector('#hoverText');

hoverText.addEventListener('mouseover', () => {
    hoverText.innerHTML = "Thanks for hovering";
});

hoverText.addEventListener('mouseout', () => {
    hoverText.innerHTML = 'Hover over me?'
})
