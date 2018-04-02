var todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
todos[0]="New Item"
console.log(todos);

function displayTodos(){
  console.log(todos);
}

function addNewTodo(todo){
  todos.push(todo);
  displayTodos();
}

function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo(position){
  todos.splice(position, 1);
  displayTodos();
}

displayTodos();
deleteTodo(0);
changeTodo(0, "New Item 1");