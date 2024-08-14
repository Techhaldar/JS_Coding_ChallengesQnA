//  ******************** Question-09 *********************
// Question:
// Write a function that moves all zeroes in an array to the end while maintaining the order of non-zero elements.

// Requirements:

// Input: An array of numbers.
// Output: An array with all zeroes moved to the end.
// Example Usage:
// console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]


// ********************** Answer-09 ***********************

function moveZeroes(){
    let userInput = document.querySelector("#userInput").value;

    let arrValue = userInput.split(" ").map(Number);

    let nonZero = arrValue.filter(num => num !== 0);
    
    let zero = arrValue.filter(num => num === 0);
   
    
    let final =  nonZero.concat(zero);
    document.querySelector('.output').innerHTML = final
}

 