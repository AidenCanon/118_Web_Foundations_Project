const tasks = [];

const input = document.querySelector('#task-input');
const submit = document.querySelector('#Submit');
const list = document.querySelector('#task-list');

const countDisplayElement = document.querySelector('#countdisplay');

function renderCount() {
    countDisplayElement.textContent = `Total Tasks: ${tasks.length}`;
}

submit.addEventListener('click', addTask);

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

const feedback = document.querySelector('#task-feedback');

function addTask() {
    const text = input.value.trim();

    if (!text) {
        feedback.textContent = 'Enter a task before adding it.';
        input.focus();
        return;
    }

    // New tasks start unchecked; the checkbox updates this value when clicked.
    const task = { text, completed: false };
    tasks.push(task);

    list.appendChild(createTaskItem(task));

    input.value = '';
    renderCount();
    feedback.textContent = `Added "${text}".`;
}

function createTaskItem(task) {
    const listItem = document.createElement('li');

    // A native checkbox shows a check mark when selected.
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'task-checkbox';

    // Show the saved completion state if this task is already complete.
    check.checked = task.completed === true;

    check.setAttribute('aria-label', 'Mark task complete');

    // Save the new completion state whenever the checkbox is clicked.
    check.addEventListener('change', () => {
        task.completed = check.checked;
    });
    listItem.appendChild(check);

    // Keep the text separate so editing it won't replace the checkbox.
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = `${task.text} `;
    listItem.appendChild(taskText);

    const taskActions = document.createElement('span');
    taskActions.className = 'task-actions';
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'task-btn task-btn-edit';
    taskActions.appendChild(editButton);
    editButton.addEventListener('click', () => {
        const newTask = prompt('Edit task:', task.text);
        if (newTask === null) return;

        const newTaskTrimmed = newTask.trim();
        if (!newTaskTrimmed) return;

        if (newTaskTrimmed.length > input.maxLength) {
            alert(`Tasks must be ${input.maxLength} characters or fewer.`);
            return;
        }

        editTask(task, newTaskTrimmed, listItem);
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'task-btn task-btn-remove';
    removeButton.addEventListener('click', () => removeTask(task, listItem));

    taskActions.appendChild(removeButton);
    listItem.appendChild(taskActions);
    return listItem;
}

function removeTask(task, listItem) {
    list.removeChild(listItem);

    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        renderCount();
    }
    feedback.textContent = `Removed "${task.text}".`;
}

function editTask(task, newText, listItem) {
    if (tasks.includes(task)) {
        task.text = newText;
        listItem.querySelector('.task-text').textContent = `${newText} `;
    }
    feedback.textContent = `Edited to "${newText}".`;
}

const loadbtn = document.querySelector('#load');
const loadoutput = document.querySelector('#task-list');
loadbtn.addEventListener('click', loadTasks);

async function loadTasks() {
    try {
        const response = await fetch('TaskTodo.json');
        const data = await response.json();
        const tasklist = data.tasklist;

        tasklist.forEach(task => {
            if (loadverify(task.title)) {
                // Loaded tasks also start unchecked.
                const loadedTask = { text: task.title, completed: false };
                loadoutput.appendChild(createTaskItem(loadedTask));
                tasks.push(loadedTask);
            }
        });
        renderCount();
    } catch (error) {
        console.error('Error loading tasks:', error);
    }
}

function loadverify(task) {
    return !tasks.some(existingTask => existingTask.text === task);
}
