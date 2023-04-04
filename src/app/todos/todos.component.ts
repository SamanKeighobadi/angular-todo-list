import { Component } from '@angular/core';
import { faCoffee,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos = [
    {id:1,title:"go gym",completed:false},
    {id:2,title:"read book",completed:false},
    {id:3,title:"coding",completed:false},
  ]
  faCoffe = faCoffee
  trashIcon=faTrash;
  editIcon = faEdit;
}
