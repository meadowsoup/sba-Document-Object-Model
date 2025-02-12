// caching elements
const todoForm = document.getElementById('to-do');
const todoInput = document.querySelector('todo-input');
const todoList = document.querySelector('todo-list');
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
  const li = document.createElement('li');

  // adding task text
  const taskText = document.createElement('span'); // task text
  taskText.textContent = todoInput.value; // setting to input
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
  if (e.target.tagName === 'BUTTON') {
    // parent node to access parent of button
    const li = e.target.parentNode;
    li.remove(); // remove from list
  }
});

// listener for clearing tasks
clearButton.addEventListener('click', () => {
  // iterate over all child elements
  while (todoList.firstChild) {
    // remove one by one
    todoList.removeChild(todoList.firstChild);
  }
});

// hover effect
todoList.addEventListener('mouseover', (e) => {
  // checking if hovered ele is an li
  if (e.target.tagName === 'LI') {
    // reset background color
    e.target.style.backgroundColor = '#f0f0f0';
  }
});

todoList.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.backgroundColor = '';
  }
})

// using BOM
console.log('Window location:', window.location.href);
window.alert('Welcome to the To-Do List!')
