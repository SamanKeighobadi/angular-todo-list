// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class TodoService {
  todos = [{ id: 1, title: 'new todo', completed: false }];

  getTodos() {
    return this.todos;
  }

  constructor() {}
}
