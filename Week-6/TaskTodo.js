const tasks = [];


function createAddTaskInput() {
    const page = document.querySelector('.page');
    const card = document.createElement('div');
    card.className = 'card';
    const input = createInput();
    const submit = createSubmitButton(input);
    card.appendChild(input);
    card.appendChild(submit);
    page.insertBefore(card, page.firstChild);   
    
    const list = document.createElement('ul');
    list.className = 'task-list';
    card.appendChild(list);
}

function createInput() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter a new task';
    return input;
}

function createSubmitButton(input) {
    const submit = document.createElement('button');
    submit.textContent = 'Add';
    submit.addEventListener('click', () => {
        const task = input.value;
        if (task) {
            tasks.push(task);
            input.value = '';
            addTaskToList(task);
        }
    });
    return submit;
}

function addTaskToList(task) {
    const list = document.querySelector('.task-list');
    const listItem = document.createElement('li');
    listItem.textContent = task;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        list.removeChild(listItem);
        const index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
        }
    });
    listItem.appendChild(removeButton);
    list.appendChild(listItem); 
}



// Call the function to create the add task input when the script loads
createAddTaskInput();
