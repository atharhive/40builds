const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearCompletedButton = document.getElementById('clearCompletedBtn');

// Load tasks from local storage on startup
const storedTasks = JSON.parse(localStorage.getItem('tasks'));

if (storedTasks) {
    storedTasks.forEach(task => addTaskToDOM(task));
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTaskToDOM();
});

clearCompletedButton.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.task-list li.completed');
    completedTasks.forEach(task => task.remove());
    updateLocalStorage();
});

function addTaskToDOM(task = {}) {
    let taskText = taskInput.value;
    let isCompleted = task.completed || false;
    let dueDate = task.dueDate || ''; // New: Due date

    if (task.text) {
        taskText = task.text;
    }

    if (taskText) {
        const taskItem = document.createElement('li');
        if (isCompleted) {
            taskItem.classList.add('completed');
        }

        taskItem.innerHTML = `
            <span>${taskText}</span>
            <div class="task-meta">
                ${dueDate ? `<span class="due-date">Due: ${dueDate}</span>` : ''}
                <button class="delete-task-btn">X</button>
            </div>
        `;

        // New Feature: Add due date input dynamically
        const dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.classList.add('due-date-input');
        dueDateInput.value = dueDate;
        dueDateInput.style.marginLeft = '10px';
        dueDateInput.style.padding = '5px';
        dueDateInput.style.border = '1px solid #ccc';
        dueDateInput.style.borderRadius = '3px';
        dueDateInput.style.display = 'none'; // Hidden by default

        const taskTextSpan = taskItem.querySelector('span');
        taskTextSpan.after(dueDateInput); // Insert after the task text

        // Toggle completed on left click
        taskTextSpan.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
            updateLocalStorage();
        });

        // Delete task on right click
        taskItem.querySelector('.delete-task-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent toggling completed
            taskItem.remove();
            updateLocalStorage();
        });

        // Show due date input on double click on task text
        taskTextSpan.addEventListener('dblclick', () => {
            dueDateInput.style.display = dueDateInput.style.display === 'none' ? 'inline-block' : 'none';
            if (dueDateInput.style.display === 'inline-block') {
                dueDateInput.focus();
            }
        });

        // Update due date on change
        dueDateInput.addEventListener('change', () => {
            taskItem.querySelector('.due-date').textContent = `Due: ${dueDateInput.value}`;
            updateLocalStorage();
        });

        taskList.appendChild(taskItem);
        taskInput.value = '';
        updateLocalStorage();
    }
}

function updateLocalStorage() {
    const allTaskItems = document.querySelectorAll('.task-list li');
    const tasksData = [];

    allTaskItems.forEach(taskItem => {
        tasksData.push({
            text: taskItem.querySelector('span').innerText,
            completed: taskItem.classList.contains('completed'),
            dueDate: taskItem.querySelector('.due-date-input').value || '',
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasksData));
}
