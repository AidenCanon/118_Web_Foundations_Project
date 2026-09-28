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

submit.addEventListener('click', addTask);
// Function to add a new task to the list
function addTask() {
    const task = input.value.trim();
    if (!task) return;

    list.appendChild(createTaskItem(task));
    tasks.push(task);
    input.value = '';
}
// Function to create a task list item with a remove button
function createTaskItem(task) {
    const listItem = document.createElement('li');
    listItem.append(document.createTextNode(`${task} `));

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
    }
}
