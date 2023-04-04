import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddNewTodoComponent } from './add-new-todo/add-new-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewTodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
