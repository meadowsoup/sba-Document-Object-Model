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
  li.appendChild(taskText); // appending to li

  // adding delete button
  const deleteButton = document.createElement('button'); // creating delete button
  deleteButton.textContent = 'Delete'; // button text set
  li.appendChild(deleteButton); // appending
  
  // appending to the to-do list
  todoList.appendChild(li);

  // clear input after adding task
  todoInput.value = '';
});

// listener for delete using event delegation
todoList.addEventListener('click', (e) => {
  // check if element works
  if (e.target.tagName === 'Button') {
    // parent node to access parent of button
    const li = e.target.parentNode;
    li.remove(); // remove from list
  }
});

