//  ******************** Question - 16 *********************
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0.

// const solution = number => {
//     // Your solution
//   };

//   console.log(solution(0)); // 0
//   console.log(solution(-15)); // 0
//   console.log(solution(10)); // 23
//   console.log(solution(20)); // 78
//   console.log(solution(200)); // 9168

// ********************** Answer - 16 ***********************

function solution(number) {
    let sum = 0;
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(solution(7));