angular.module("todoApp", [])
.controller("TodoListController", function($scope) {
	var todoList = this;
	todoList.todoItems = [
		{ name: "Take out trash" },
		{ name: "Do homework" },
		{ name: "Do laundry" },
		{ name: "Go to the gym" }
	]

	todoList.addTodo = function () {
		todoList.todoItems.push (
			{name: todoList.todoText}
		)
			todoList.todoText = "";
  	};
	
  	todoList.remove = function () {
  		var oldTodos = todoList.todoItems;
  		$scope.deleteItem = function (index) {
		items.data.splice(index, 0);
	};
 
  		todoList.todoItems = [];
  		angular.forEach(oldTodos, function (todo) {
  			if (!todo.done) todoList.todoItems.push(todo);
  		});
  	}
}); // end TodoListController