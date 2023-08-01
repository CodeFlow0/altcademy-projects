document.addEventListener('DOMContentLoaded', function () {
  const todoList = document.getElementById('todo-list');
  const todoInput = document.getElementById('todo-input');
  const addButton = document.getElementById('add-button');
  let todoCount = 0;

  const addTodo = function () {
    const todoCol = document.createElement('div');
    todoCol.setAttribute('class', 'col-xs-12 todo');

    const todoRow = document.createElement('div');

    todoRow.setAttribute('class', 'row');

    const removeButton = document.createElement('button');

    removeButton.setAttribute('class', 'btn btn-danger remove-button');

    removeButton.innerHTML = "REMOVE";

    removeButton.onclick = function () {

      const child = this.parentNode.parentNode;

      todoList.removeChild(child);
    };

    const h5 = document.createElement('h5');

    h5.setAttribute('class', 'col-xs-8');

    h5.innerHTML = todoInput.value;

    todoRow.appendChild(h5);

    todoRow.appendChild(removeButton);

    todoCol.appendChild(todoRow);

    todoList.appendChild(todoCol);
  };

  const checkThenAddTodo = function () {

    if (todoCount < 10 && todoInput.value !== '') {

      addTodo();

      todoCount++;

      todoInput.value = '';
    }
  }

  addButton.addEventListener('click', checkThenAddTodo);

  todoInput.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
      checkThenAddTodo();
    }
  });
});

