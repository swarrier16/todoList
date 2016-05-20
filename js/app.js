angular.module("todoApp", []) //initializes angular for "todo.html"
.controller("TodoListController", function($scope) { //creates controller
	var todoList = this; //initializes variable for itmes to be in list

	todoList.todoItems = [                 //intializes array
		{ name: "Take out trash", done: false }, //item 1
		{ name: "Do homework", done: false}, //item 2
		{ name: "Do laundry", done: false}, //item 3
		{ name: "Go to the gym", done: false} //item 4
	]

	todoList.addTodo = function () {	//creates add function			
		todoList.todoItems.push (       //creates new entry in aray
			{name: todoList.todoText, done: false}  //keeps text black
		)
			todoList.todoText = ""; // adds the user's item to array
  	};
	
  	todoList.remove = function () {    //remove function
  		var oldTodos = todoList.todoItems;  //creates variable for items that need to be removed
  		$scope.deleteItem = function (index) {  //navigates to the item that is clicked
		items.data.splice(index, 0); //removes item from array
	};

	todoList.todoItems = []; //reinitializes array with new values
  		angular.forEach(oldTodos, function (todo) {  //goes through each item in array
  			if (!todo.done) 
  				 todoList.todoItems.push(todo); //reprints existing items
  		});
  	}

	todoList.remaining = function () {  //function for remaining counter
		var notCompletedCount = 0;  //initializes variable for tasks that have not been checked off
		angular.forEach (todoList.todoItems, function (todo){ //sets counter for completed tasks
			notCompletedCount += todo.done ? 0:1; //adds to counter everytime something is checked off
		})

		return notCompletedCount
	}
 
  		
}); // end TodoListController

//collapsible for title change

$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });



        