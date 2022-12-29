// capture all elements
let inputElement = document.querySelector('#task-input');
let addTaskBtn = document.querySelector('#add-task');
let taskContainer = document.querySelector('#task-drawer');

addTaskBtn.addEventListener('click', function(){
    // capture the value in the input
    // create a new list item element (<li></li>)
    // add the input value as innerText for the newly created list item element <li>Value of input</li>
    // add the new li element into the task container

    let inputValue = inputElement.value;
    let newListElement = document.createElement('li');
    newListElement.innerText = inputValue;

    let iconElement = document.createElement('i');
    iconElement.classList.add("fa-solid","fa-trash");
    iconElement.style.paddingLeft = "30px";
    
    newListElement.appendChild(iconElement);
    

    taskContainer.appendChild(newListElement);
})


