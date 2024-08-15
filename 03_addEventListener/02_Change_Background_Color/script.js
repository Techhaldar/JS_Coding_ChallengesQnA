//  ******************** Question-02 *********************
// Change Background Color
// Question:
// Create a button that changes the background color of the page when clicked.

// Requirements:

// Input: None.
// Output: Change the background color on each click.
// Example Usage:
// <button id="colorBtn">Change Background Color</button>

// ********************** Answer-02 ***********************

let colorBtn = document.querySelector('#colorBtn')

colorBtn.addEventListener('click', () => {
    const color = '0123456789ABCDEF';
    colorCode = '#';
    
    for(let i = 0; i < 6; i++){
        let randomNum = Math.floor(Math.random() * 16);
        colorCode = colorCode + color[randomNum];
    }
    // console.log(colorCode)
    
    document.querySelector('body').style.backgroundColor = colorCode;
})

