//  ******************** Question-03 *********************
// Question:
// Write a function that takes an array of numbers and returns the minimum value.

// Requirements:

// Input: An array of numbers.
// Output: The minimum number in the array.
// Example Usage:
// console.log(findMin([4, 2, 9, -1, 5])); // Output: -1

// ********************** Answer-03 ***********************

function minNum () {
    const inputNumbers = document.querySelector('#inputNumbers').value;
    // const result = document.querySelector('.result');

    const arrayNum = inputNumbers.split(' ').map(Number);

    const min = minValue(arrayNum);

    document.querySelector('.result').innerText = `Out of ${inputNumbers} smallest number is: ${min}`;
};
function minValue(value){
    let num = [0];
    if(value.length === 0){
        return 'No numbers provided';
    }
    return Math.min(...value);
}