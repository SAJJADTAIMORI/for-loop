// Define an array to store our to-do items
let todoList = [];

// Function to add a new to-do item to the list
function addTodoItem(item) {
  todoList.push(item);
}

// Function to display the to-do list
function displayTodoList() {
  console.log("My To-Do List:");
  for (let i = 0; i < todoList.length; i++) {
    console.log(i + 1 + ". " + todoList[i]);
  }
}

// Adding some items to the to-do list
addTodoItem("Buy groceries");
addTodoItem("Finish homework");
addTodoItem("Call mom");

// Displaying the to-do list
displayTodoList();
