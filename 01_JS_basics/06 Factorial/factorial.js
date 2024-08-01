// ********************* Question - 6  ***************************
// Write a JavaScript function called factorial that takes a number as an argument and returns the factorial of that number.

// Requirements:
// The function should be named factorial.
// It should accept a single parameter, which is the number for which you want to calculate the factorial.
// It should return the factorial of the number.

// ************************ Answer - 6 ****************************
function factorial(n){
    let fact = 1;
    if(n<0){
        alert("invalid input");
    }
    for(let i = 1; i <= n; i++){
        fact = fact*i;
    }
    return fact;
}

alert(factorial(parseInt(prompt("enter the number:"))))
