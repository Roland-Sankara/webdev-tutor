// Updating
const heading = document.querySelector('#heading');

heading.innerText = "Vanessa World";

// Creating an element
// method - function
const newParagraph = document.createElement('p') // <p></p>
newParagraph.innerText = "Welcome to the DOM" // <p> Welcome to the DOM </p>
console.log(newParagraph) // <p> Welcome to the DOM </p>

// add to the DOM
const bodyElement = document.querySelector('body')
console.dir(bodyElement)
bodyElement.appendChild(newParagraph)


// removing from the DOM
heading.remove()






