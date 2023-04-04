import { Component } from '@angular/core';

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
}
