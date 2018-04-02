

var todoList = {
  todos : [],
  displayTodos: function(){
    console.log("My todos: ", this.todos);
  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue){
    todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position){
    todos.splice(position, 1);
    this.displayTodos();
  }
};
  