//  ******************** Question-07 *********************
// Double Click to Highlight

// Question:
// Create a paragraph that gets highlighted (background color changes) when double-clicked.

// Requirements:

// Input: Double click.
// Output: Change the background color of the paragraph.

// Example Usage:
// <p id="highlightText">Double-click to highlight me!</p>

// ********************** Answer-07 ***********************

const paragraph = document.querySelector("#highlightText")

paragraph.addEventListener('dblclick', () => {
    paragraph.style.backgroundColor = "red";
    
})
