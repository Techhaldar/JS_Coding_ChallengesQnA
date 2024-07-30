// ********************* Question - 4  ***************************

// Write a JavaScript function called fibonacci that takes a number n as an argument and returns an array containing the first n numbers in the Fibonacci sequence.

// Requirements:
// The function should be named fibonacci.
// It should accept a single parameter, which is the number n.
// It should return an array containing the first n Fibonacci numbers.

// ************************ Answer - 4 ****************************

function fibonacci(num) {
    if (num <= 0) {
        return []
    }
    if (num === 1) {
        return [1]
    }
    let fibSequence = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2])
    }
    return fibSequence;
}

alert(fibonacci(prompt("enter the number")));