import { Component, EventEmitter, Output } from '@angular/core';

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

  @Output() addTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  constructor() {
    this.todoText = '';
  }

  onSubmit() {
    if (this.todoText.length > 0) {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
        title: this.todoText,
        completed: false,
      };
      this.addTodo.emit(newTodo);
      this.todoText = '';
    }
  }
}
