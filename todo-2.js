

var todoList = {
  todos : [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log("Your to-list is empty!");
    } else {
      //console.log("My todos: ", this.todos);
      for(var i = 0; i<this.todos.length; i++){
        if (this.todos[i].completed === true){
          console.log('(x) ', this.todos[i].todoText);
        } else {
           console.log('( ) ', this.todos[i].todoText);
          }
      }
    }
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText : todoText,
      completed : false,
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
    toggleAll : function(){
      var totalTodos = this.todos.length;
      var completedTodos = 0;

      //Get number of completedTodos.
      for (var i = 0; i < totalTodos; i++){
        if(this.todos[i].completed === true){
          completedTodos++;
        }
      }
      // Case 1 : if everything's true, make everything false/
      if(completedTodos === totalTodos) {
      //Make everything false
        for (var i = 0; i<totalTodos; i++) // NEEDED TO RESET EVERYTHING
        {
          this.todos[i].completed = false;
        }
      //Make everything true    
        } else {
          for(var i =0; i < totalTodos; i++){
            this.todos[i].completed = true;
          }
        
      }
      this.displayTodos();
    }
};

var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
  },
  addTodo: function(){
    var newTodo = document.getElementById('addTodoTextInput');
    var newTodoText = newTodo.value;
    todoList.addTodo(newTodoText);
    newTodo.value="";
  },
  changeTodo: function(){
    var changeTodoIndex = document.getElementById('changeTodoNumberInput');
    var changeTodoText = document.getElementById('changedTodoTextInput');
    todoList.changeTodo(changeTodoIndex.valueAsNumber, changeTodoText.value);
    changeTodoIndex.value="";
    changeTodoText.value="";
  },
  deleteTodo: function(){
    var deleteToDoNumber = document.getElementById('deleteTodoNumberInput');
    todoList.deleteTodo(deleteToDoNumber.valueAsNumber);
    deleteToDoNumber.value = 0;
  },
  toggleTodo: function(){
    var toggleTodo= document.getElementById('toggleSingleTodo');
    todoList.toggleCompleted(toggleTodo.valueAsNumber);
    toggleTodo.value="0";
  }
};


var displayTodosButton = document.getElementById('displayTodos');
var toggleAllButton = document.getElementById('toggleAll');

displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
})

toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
  })
  
  
  