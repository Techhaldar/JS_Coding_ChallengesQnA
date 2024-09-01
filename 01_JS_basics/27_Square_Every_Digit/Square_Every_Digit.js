//  ******************** Question - 27 *********************

// Given an integer, your task is to square every digit of it and concatenate them to produce a new integer.

// const squareDigits = num => {
//     // Your solution
//   };

//   console.log(squareDigits(2112)); // 4114
//   console.log(squareDigits(3212)); // 9414
//   console.log(squareDigits(9159)); // 8112581

// ********************** Answer - 27 ***********************

// mathod-1
const squareDigits = number => {
    let count = ""
    let num = number.toString().split('')
    // console.log(num)
    for (const digit of num) {
        count += digit * digit;
    }
    console.log(count);
}

squareDigits(2552);

// mathod-2

const squareDigit = num => {
    return Number(
        num
            .toString()
            .split('')
            .map(e => e * e)
            .join('')
    )
};
console.log(squareDigit(1221))
