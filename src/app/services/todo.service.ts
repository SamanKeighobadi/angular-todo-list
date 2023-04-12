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

 
}
