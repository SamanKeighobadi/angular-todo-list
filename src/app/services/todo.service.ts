// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

export class TodoService {
  todos = [{ id: 1, title: 'new todo', completed: false }];

  constructor() {}

  getTodos() {
    return this.todos;
  }

  addNewTodo(todo: ITodo) {
    this.todos.push(todo);
  }

  deleteTodo(todoId: number) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
    this.todos.splice(todoIndex, 1);
  }

  toggleDoneTodo(todoId: number) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
    this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
  }
}
