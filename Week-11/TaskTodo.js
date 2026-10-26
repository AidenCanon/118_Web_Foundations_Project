// const tasks = [];

// const input = document.querySelector('#task-input');
// const submit = document.querySelector('#Submit');
// const list = document.querySelector('#task-list');

// submit.addEventListener('click', () => {
//     const task = input.value.trim();
//     if (!task) return;

//     const listItem = document.createElement('li');
//     listItem.textContent = task;

//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.addEventListener('click', () => {
//         list.removeChild(listItem);
//         const index = tasks.indexOf(task);
//         if (index > -1) {
//             tasks.splice(index, 1);
//         }
//     });

//     listItem.appendChild(removeButton);
//     list.appendChild(listItem);
//     tasks.push(task);
//     input.value = '';
// });

//  the simplified version is above the original version is in week 6.

const tasks = [];

const input = document.querySelector('#task-input');
const submit = document.querySelector('#Submit');
const list = document.querySelector('#task-list');
const save = document.querySelector('#Save');

const countDisplayElement = document.querySelector('#countdisplay');
let countDisplay = 0;

function renderCount() {
    countDisplayElement.textContent = `Total Tasks: ${countDisplay}`;
}

submit.addEventListener('click', addTask);
// Function to add a new task to the list
function addTask() {
    const task = input.value.trim();
    if (!task) return;

    list.appendChild(createTaskItem(task));
    tasks.push(task);
    input.value = '';
    countDisplay += 1;
    renderCount();

}
// Function to create a task list item with a remove button
function createTaskItem(task) {
    const listItem = document.createElement('li');
    listItem.append(document.createTextNode(`${task} `));
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    listItem.appendChild(editButton);
    editButton.addEventListener('click', () => {
        const newTask = prompt('Edit task:', task);
        if (newTask) {
            editTask(task, newTask);
        }
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeTask(task, listItem));

    listItem.appendChild(removeButton);
    return listItem;
}
// Function to remove a task from the list
function removeTask(task, listItem) {
    list.removeChild(listItem);

    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        countDisplay -= 1;
        renderCount();
    }
}
function editTask(oldTask, newTask) {
    const index = tasks.indexOf(oldTask);
    if (index > -1) {
        tasks[index] = newTask;
        const listItem = list.children[index];
        listItem.firstChild.textContent = `${newTask} `;
        editButton.addEventListener('click', () => {
            const newTask = prompt('Edit task:', tasks[index]);
            if (newTask) {
                editTask(tasks[index], newTask);
            }
        });
    }
}

