import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddNewTodoComponent } from './add-new-todo/add-new-todo.component';
import { TodosComponent } from './todos/todos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewTodoComponent,
    TodosComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
