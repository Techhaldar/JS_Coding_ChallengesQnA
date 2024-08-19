//  ******************** Question-03 *********************
// Question: Write a function changeImageSrc that changes the src attribute of an image element with a specific id.
// Requirements: The function should accept two arguments: the id of the image element and the new src.
// Example Usage:
/* <img id="image" src="old.jpg" />
<script>
    changeImageSrc('image', 'new.jpg');
</script> */

// ********************** Answer-03 ***********************

function changeImageSrc (id, newSrc){
    document.getElementById(id).src = newSrc;
}
const button = document.querySelector('button');

button.addEventListener('click', () =>{
    changeImageSrc('image', 'new.jpg');
    
})


