let bodyElement = document.querySelector('body');
// create an element to be added to the DOM (a paragraph)
// add the new paragraph element into the body

let newParagraphElement = document.createElement('p'); // <p></p>

newParagraphElement.innerText = "Hello World"; // <p>Hello World</p>

console.log(newParagraphElement)

// Add element to DOM
// bodyElement.appendChild(newParagraphElement)

// Remove the h1 element
let h1Element = document.querySelector('h1');
h1Element.remove()



// ................................................

// Creating a ToDo App

// capture the input element
let todoInput = document.querySelector('#todo-input');
// capture the button element
let addToDoBtn = document.querySelector('#add-todo-btn');
// capture the todos container
let toDosContainer = document.querySelector('#todo-container');


// adding event listener to the button
addToDoBtn.addEventListener('click', function(){
    console.log("Button was clicked...")

    // capture the value of the input element
    let inputValue = todoInput.value;
    // create new list element (<li></li>)
    let newListElement = document.createElement('li');
    // add to the new list element innerText equal to the value of the input element (<li>Value of Input</li>)
    newListElement.innerText = inputValue;
    // add the listElement into the todoContainer
    toDosContainer.appendChild(newListElement)
})



