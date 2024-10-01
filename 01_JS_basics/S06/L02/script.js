// Fibonacci Sequence
// Problem:
// Write a function that prints the Fibonacci sequence up to n numbers.

// Explanation:
// The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.
// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, ...
// We use a loop to generate the sequence and print it.


// let n = 10;


function Fibonacci(n){
  let a = 0;
  let b = 1;
  let c;
  for(let i = 1; i <= n; i++){
    console.log(a)
    c = a + b;
    a = b;
    b = c;
  }
}

Fibonacci(5);