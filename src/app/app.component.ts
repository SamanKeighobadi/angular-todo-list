import { Component } from '@angular/core';

interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos = [{ id: 1, title: 'read book', completed: false }];

  addNewTodo(todo: ITodo) {
    this.todos.push(todo);
  }

  removeTodo(todoId:number){
    const filteredTodo = this.todos.filter(todo => todo.id !== todoId)
    this.todos = filteredTodo;
  }
}
