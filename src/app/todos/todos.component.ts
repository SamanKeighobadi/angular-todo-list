import { Component, Input } from '@angular/core';
import { faCoffee, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  @Input() todos: { title: string; id: number; completed: boolean }[];

  constructor() {
    this.todos = [];
  }

  faCoffe = faCoffee;
  trashIcon = faTrash;
  editIcon = faEdit;
}
