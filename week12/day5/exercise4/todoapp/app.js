import { TodoList } from './todo.js';

// Create an instance of the TodoList class
const todoList = new TodoList();


todoList.addTask('Complete assignment');
todoList.addTask('Buy groceries');
todoList.addTask('Call mom');


todoList.completeTask(0);
todoList.completeTask(2);


todoList.listTasks();