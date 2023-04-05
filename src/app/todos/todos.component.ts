import { Component, Input,Output,EventEmitter } from '@angular/core';
import { faCoffee, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

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
  @Input() todos: ITodo[];

  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();

  handleDeleteTodo(todoId:number){
    this.deleteTodo.emit(todoId)
  }

  constructor() {
    this.todos = [];
  }

  faCoffe = faCoffee;
  trashIcon = faTrash;
  editIcon = faEdit;
}
