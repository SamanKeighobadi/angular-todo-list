import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

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
export class AppComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addNewTodo(todo: ITodo) {
    this.todos.push(todo);
  }

  removeTodo(todoId: number) {
    const filteredTodo = this.todos.filter((todo) => todo.id !== todoId);
    this.todos = filteredTodo;
  }

  toggleDoneTodo(todoId: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  }
}
