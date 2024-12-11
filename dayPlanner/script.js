// const inputTask = document.getElementById('inputTask');
// const addBtn = document.getElementById('btn');
// const taskList = document.getElementsById('task-list');

// function addItem(){
//     const taskValue = inputTask.value.trim();
//     if(taskValue === '') return;

//     // create list item
//     const listItem = document.createElement('li');
//     listItem.textContent = taskValue;

//     // create delete button
//     // const deleteButton = document.createElement('button');
//     // deleteButton.textContent = 'Delete';
//     // deleteButton.classList.add('delete-button');

//     // Add delete button to list item 
//     // listItem.appendChild(deleteButton);

//     // deleteButton.addEventListener('click',()=>{
//     //     listItem.remove();
//     // })

//     taskList.appendChild(listItem);

//     inputTask.value = '';
// }
const inputTask = document.getElementById('inputTask');
const addBtn = document.getElementById('btn');
const taskList = document.getElementById('task-list');

function addItem() {
    const taskValue = inputTask.value.trim(); // Trim to remove leading/trailing spaces
    if (taskValue === '') return; // Do nothing if input is empty

    // Create list item
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = addBtn.className; // Use same class as Add button

    // Create edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.className = addBtn.className; // Use same class as Add button

    // Append buttons to the list item
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    inputTask.value = '';

    // Add functionality for delete button
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(listItem); // Remove the task item
    });

    // Add functionality for edit button
    editBtn.addEventListener('click', () => {
        const newTask = prompt('Edit your task:', taskValue); // Prompt for new task value
        if (newTask !== null && newTask.trim() !== '') {
            listItem.firstChild.textContent = newTask; // Update the task text
        }
    });
}

// Add 'Enter' key functionality
inputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItem();
    }
});

