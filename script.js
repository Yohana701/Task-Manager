// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create new task list item
function createTaskElement(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    li.appendChild(completeBtn);
    li.appendChild(removeBtn);

    taskList.appendChild(li);

    // Add event listener for completing a task
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Add event listener for removing a task
    removeBtn.addEventListener('click', function() {
        li.remove();
    });
}

// Add task event listener
addTaskBtn.addEventListener('click', function() {
    const task = taskInput.value.trim();
    if (task !== '') {
        createTaskElement(task);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});
