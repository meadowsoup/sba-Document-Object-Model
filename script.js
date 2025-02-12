// caching elements
const todoForm = document.getElementById('to-do');
const todoInput = document.querySelector('to-do input');
const todoList = document.querySelector('to-do list');
const clearButton = document.querySelector('clear');

// event listener for the form submission
todoForm.addEventListener('submit', (e) => {
  e.preventDefault(); // preventing form from submitting

  // check if input is empty using DOM validation
  if (todoInput.value.trim() === '') {
    alert('Enter task!'); // alert if empty
    return; // exit
  }

  // new list creation
  const li = document.createElement('span'); // task text
  taskText.taskContent = todoInput.value; // setting to input
  li.appendChild(taskText); // appending

  
})