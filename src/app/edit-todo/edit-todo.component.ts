import { Component, Input } from '@angular/core';

@Component({
  selector: 'edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent {

  @Input() todoTitle : string = "";

}
