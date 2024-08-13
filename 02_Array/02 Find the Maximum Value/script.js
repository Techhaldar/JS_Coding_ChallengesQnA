//  ******************** Question-02 *********************
// Write a function that takes an array of numbers and returns the maximum value.

// Requirements:
// Input: An array of numbers.
// Output: The maximum number in the array.

// Example Usage:
// console.log(findMax([1, 3, 7, 0, -2]));  Output: 7


// ********************** Answer-02 ***********************

function maxNum () {
    const inputNumbers = document.querySelector('#inputNumbers').value;
    // const result = document.querySelector('.result');

    const arrayNum = inputNumbers.split(' ').map(Number);

    const max = maxValue(arrayNum);

    document.querySelector('.result').innerText = `Out of ${inputNumbers} largest number is: ${max}`;
};

function maxValue(value){
    let num = [0];
    if(value.length === 0){
        return 'No numbers provided';
    }
    return Math.max(...value);
}

// console.log(maxValue([1, 5, 8, 9, 5, 7, 6, 4]));