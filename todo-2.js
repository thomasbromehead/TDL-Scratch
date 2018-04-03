

var todoList = {
  todos : [],
  displayTodos: function(){
    var listContainer = document.querySelector('ul');
    var todoLi = document.createElement('li');
    
    if(this.todos.length === 0){
      alert("Your to-list is empty!");
    } else {
      for(var i = 0; i<this.todos.length; i++){
        if (this.todos[i].completed === true){
          console.log('(x)', this.todos[i].todoText);
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
    view.displayTodos();
  },
  addTodo: function(){
    var newTodo = document.getElementById('addTodoTextInput');
    var newTodoText = newTodo.value;
    todoList.addTodo(newTodoText);
    newTodo.value="";
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoIndex = document.getElementById('changeTodoNumberInput');
    var changeTodoText = document.getElementById('changedTodoTextInput');
    todoList.changeTodo(changeTodoIndex.valueAsNumber, changeTodoText.value);
    changeTodoIndex.value="";
    changeTodoText.value="";
    view.displayTodos();
  },
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleTodo: function(){
    var toggleTodo= document.getElementById('toggleSingleTodo');
    todoList.toggleCompleted(toggleTodo.valueAsNumber);
    toggleTodo.value="0";
    view.displayTodos();
  }
};

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = "";
    for(var i = 0; i < todoList.todos.length; i++){
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      
      var todoTextWithCompletion = '';
      if(todo.completed === true){
        todoTextWithCompletion = '(x)' + todo.todoText;
      } else {
        todoTextWithCompletion = '( )' + todo.todoText;
      }
      
      todoLi.id = i;
      todoLi.innerHTML = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
   
  },
  createDeleteButton : function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete item";
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function(){
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function(event){
      
        //Get the element that was clicked on.
      
        var elementClicked = event.target;
        // var parentElementClicked = event.target.parentNode.id
        if (elementClicked.className === "deleteButton"){
        // Delete LI item, ie: run handlers.deleteTodo();
          handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();

//s
