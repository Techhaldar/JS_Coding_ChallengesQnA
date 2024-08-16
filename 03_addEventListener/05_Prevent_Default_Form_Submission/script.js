//  ******************** Question-05 *********************
// Prevent Default Form Submission
// Question:
// Create a form with a submit button that, when clicked, does not submit the form but instead displays an alert.

// Requirements:

// Input: Form submission.
// Output: Display an alert instead of submitting the form.

// Example Usage:
/* <form id="myForm">
    <input type="text" placeholder="Enter something">
    <button type="submit">Submit</button>
</form> */


// ********************** Answer-05 ***********************
// Method-1
const submit = document.querySelector("button")

submit.addEventListener('click', () => {
    alert("submitting the form");
})


// Method-2
const form = document.querySelector("#idForm");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form submission prevented');
});