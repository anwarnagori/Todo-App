let input = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');


function addTodos() {
    let text = input.value;

    let todoItem = document.createElement('DIV');

    todoItem.classList.add('todo-item');

    let pEl = document.createElement('P');

    pEl.textContent = text;

    let editButton = document.createElement('BUTTON');

    editButton.textContent = 'Edit';

    editButton.classList.add('edit');

    editButton.addEventListener('click', function () {

        let newText = prompt('Edit Text:', pEl.textContent);

        pEl.textContent = newText;

    });

    let deleteButton = document.createElement('BUTTON');

    deleteButton.textContent = 'Delete';

    deleteButton.classList.add('delete');

    deleteButton.addEventListener('click', function () {

        todoList.removeChild(todoItem);

    });

    todoItem.appendChild(pEl);

    todoItem.appendChild(editButton);

    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);

    input.value = '';
};
