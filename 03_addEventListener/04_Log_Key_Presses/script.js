//  ******************** Question-03 *********************
// Log Key Presses
// Question:
// Write a script that logs every key press to the console.

// Requirements:

// Input: Key presses.
// Output: Log the key that was pressed.
// Example Usage:
// document.addEventListener('keydown', (event) => {
//     console.log(`Key pressed: ${event.key}`);
// });


// ********************** Answer-03 ***********************

document.addEventListener('keydown', (event) => {
        //  (`Key pressed: ${event.key}`);
         document.querySelector("#key").innerHTML = (`${event.key}`);
         
         document.querySelector("#code").innerHTML = (`${event.code}`);

         document.querySelector("#keyCode").innerHTML = (`${event.keyCode}`);
     });


