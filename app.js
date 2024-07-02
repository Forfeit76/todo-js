const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.todo-filter');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteOrCheck);
todoFilter.addEventListener('click', filterTodo);

function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);

    todoInput.value = '';

}

function deleteOrCheck(event) {
    //console.log(event.target);
    const todoItem = event.target;
    if (todoItem.classList[0] === 'delete-button') {
        todoItem.parentElement.remove();
    }

    if (todoItem.classList[0] === 'complete-button') {
        todoItem.parentElement.classList.toggle('completed');
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    //console.log(todos);
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'none';
                } else {
                    todo.style.display = 'flex';
                }
                break;
        }
    });
}