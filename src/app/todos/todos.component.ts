import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  faCoffee,
  faTrash,
  faEdit,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../services/todo.service';

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
  @Input() editedTodoTitle: string = '';

  @Input() todos: ITodo[];


  constructor(private todoService:TodoService) {
    this.todos = [];
  }

  handleDeleteTodo(todoId: number) {
    
    this.todoService.deleteTodo(todoId)
  }

  handleCompleteTodo(todoId: number) {
    this.todoService.toggleDoneTodo(todoId)
  }

  editHandler() {
    console.log(this.editedTodoTitle);
    this.editStatus = false;
  }

  faCoffe = faCoffee;
  trashIcon = faTrash;
  editIcon = faEdit;
  doneIcon = faCheckCircle;
}
