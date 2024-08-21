//  ******************** Question-04 *********************

// Remove Element

// Question: Write a function removeElement that removes an element from the DOM based on its id.
// Requirements: The function should take one argument: the id of the element to be removed.

// Example Usage:
/* <div id="toRemove">This will be removed</div>
<script>
    removeElement('toRemove');
</script> */

// ********************** Answer-04 ***********************

function removeElement(id){
    const toRemove = document.getElementById(id);
    toRemove.remove();
}

// removeElement('toRemove');

let button = document.getElementById("button")
button.addEventListener('click', () => {
     removeElement('toRemove');
 })