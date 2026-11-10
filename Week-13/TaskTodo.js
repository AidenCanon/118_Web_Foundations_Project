const tasks = [];

const input = document.querySelector('#task-input');
const submit = document.querySelector('#Submit');
const list = document.querySelector('#task-list');

const countDisplayElement = document.querySelector('#countdisplay');

function renderCount() {
    countDisplayElement.textContent = `Total Tasks: ${tasks.length}`;
}

submit.addEventListener('click', addTask);
// Function to add a new task to the list
function addTask() {
    const text = input.value.trim();
    if (!text) return;

    const task = { text };
    tasks.push(task);
    list.appendChild(createTaskItem(task));
    input.value = '';
    renderCount();

}
// Function to create a task list item with a remove button
function createTaskItem(task) {
    const listItem = document.createElement('li');
    listItem.append(document.createTextNode(`${task.text} `));
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
// Function to remove a task from the list
function removeTask(task, listItem) {
    list.removeChild(listItem);

    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        renderCount();
    }
}
function editTask(task, newText, listItem) {
    if (tasks.includes(task)) {
        task.text = newText;
        listItem.firstChild.textContent = `${newText} `;
    }
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
                const loadedTask = { text: task.title };
                loadoutput.appendChild(createTaskItem(loadedTask));
                tasks.push(loadedTask);
            }
        });
        renderCount();
    } catch (error) {
        console.error('Error loading tasks:', error);
    }
}
// check for no duplicate tasks before loading
function loadverify(task) {
    return !tasks.some(existingTask => existingTask.text === task);
}
