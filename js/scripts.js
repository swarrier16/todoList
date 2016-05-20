angular.module("todoApp", [])
.controller("TodoListController", function($scope) {
	var todoList = this;

	todoList.todoItems = [
		{ name: "Take out trash", done: false },
		{ name: "Do homework", done: false},
		{ name: "Do laundry", done: false},
		{ name: "Go to the gym", done: false}
	]

	todoList.addTodo = function () {
		todoList.todoItems.push (
			{name: todoList.todoText, done: false}
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
  			if (!todo.done) 
  				 todoList.todoItems.push(todo);
  		});
  	}

	todoList.remaining = function () {
		var notCompletedCount = 0;
		angular.forEach (todoList.todoItems, function (todo){
			notCompletedCount += todo.done ? 0:1;
		})

		return notCompletedCount
	}
 
  		
}); // end TodoListController

$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });



        