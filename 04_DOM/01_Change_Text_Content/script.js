//  ******************** Question-01 *********************
// Change Text Content

// Question: Write a function changeTextContent that changes the text content of an HTML element with a specific id.
// Requirements: The function should accept two arguments: the id of the element and the new text content.

// Example Usage:
// <p id="text">Original Text</p>
// <script>
//     changeTextContent('text', 'New Text');
// </script>

// ********************** Answer-01 ***********************

function changeTextContent (Id, newText){
    document.querySelector('#text').textContent = 'New Text'
}

changeTextContent('text', 'newText')


// Short Method
// document.querySelector("#text").innerHTML = 'New Text'





