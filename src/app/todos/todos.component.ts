import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  faCoffee,
  faTrash,
  faEdit,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  editStatus: boolean = false;

  @Input() editedTodoTitle : string = '';

  @Input() todos: ITodo[];

  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();
  @Output() completeTodo: EventEmitter<number> = new EventEmitter<number>();

  handleDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }

  handleCompleteTodo(todoId: number) {
    this.completeTodo.emit(todoId);
  }

  editHandler() {
    console.log(this.editedTodoTitle );
    this.editStatus = false; 
  }

  constructor() {
    this.todos = [];
  }

  faCoffe = faCoffee;
  trashIcon = faTrash;
  editIcon = faEdit;
  doneIcon = faCheckCircle;
}
