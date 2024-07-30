//  ********************* Question - 3  **********************

//  Write a JavaScript function called reverseString that takes a string as an argument and returns the reversed version of the string.

//  Requirements:
//  The function should be named reverseString.
//  It should accept a single parameter, which is the string to be reversed.
//  It should return the reversed string.

//  ************************ Answer - 3 ************************

 function reverseString(str){
     let reverseStr = "";
     for(let i= str.length - 1; i>=0; i--){
         reverseStr = reverseStr + str[i];
     }
     return reverseStr;
 }

 let userInput = prompt("enter the string to reverse");
 let finalOutput = reverseString(userInput);

 alert(finalOutput);