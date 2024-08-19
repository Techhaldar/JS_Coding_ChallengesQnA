//  ******************** Question-09 *********************

// Submit Button Enable/Disable
// Question:
// Create a form with a checkbox. Enable the submit button only when the checkbox is checked.

// Requirements:

// Input: Checkbox state.
// Output: Enable or disable the submit button based on the checkbox.

// Example Usage:
/* <form id="checkboxForm">
    <input type="checkbox" id="agreeCheck"> I agree
    <button type="submit" id="submitBtn" disabled>Submit</button>
</form> */


// ********************** Answer-09 ***********************
const agreeCheck = document.getElementById('agreeCheck');
const submitBtn = document.getElementById('submitBtn');

agreeCheck.addEventListener('change', () => {
    submitBtn.disabled = agreeCheck.checked;
});
