//  ******************** Question-01 *********************
// Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

// Requirements:

// The function should handle both positive and negative numbers.
// If the array is empty, return 0.

// Example Usage:
// sumArray([1, 2, 3, 4, 5]); // 15
// sumArray([-1, -2, -3, -4, -5]); // -15
// sumArray([]); // 0

// ********************** Answer-01 ***********************
function calculateSum() {
    // Get the input value
    const inputArray = document.querySelector('#inputNumbers').value;
    // Convert input string to an array of numbers
    const numberArray = inputArray.split(' ').map(Number);
    console.log(numberArray)

    // Calculate the sum
    const sum = sumArray(numberArray);

    // Display the result

    document.querySelector('.result').innerText = `Output: ${sum}`;
}

function sumArray(arr) {
    let add = 0;
    for (const element of arr) {
        add = add + element;
    }
    return add;
}






