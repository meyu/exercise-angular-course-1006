import { DescTodoPipe } from './desc-todo.pipe';
import { ItemTodo } from './item-todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todos: ItemTodo[] = [];
  todoView: ItemTodo[] = [];

  descView() {
    this.todoView = this.todos.slice();
    this.todoView;
  }

  addTodo(newTodo: string) {
    this.todos.push({idx: this.todos.length, todo: newTodo,isDone: false});
    this.descView();
  }

  notTodo(item: ItemTodo) {
    this.todos[item.idx].isDone = item.isDone;
    this.descView();
  }


}
