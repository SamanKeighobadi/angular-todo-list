import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../services/todo.service';

interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

@Component({
  selector: 'add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.css'],

})
export class AddNewTodoComponent {
  todoText: string;


  constructor(private todoService:TodoService) {
    this.todoText = '';
  }

  onSubmit() {
    if (this.todoText.length > 0) {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
        title: this.todoText,
        completed: false,
      };
      this.todoService.addNewTodo(newTodo)
      this.todoText = '';
    }
  }
}
