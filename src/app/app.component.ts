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
  catAll: boolean = true;


  // TODO: 不明所以，清單在套用 descTodos Pipe 後，沒有這個方法，則清單不會更新顯示；footer 的待辦統計亦同。
  triggerViewBind() {
    this.todos = this.todos.slice();
  }
  genUniqID(): string {
    return Math.random().toString(36).substr(2, 9);
  }




  addTodo(newTodo: string) {
    if (newTodo !== '') {
      this.todos.push({ idx: this.genUniqID(), todo: newTodo, isDone: false });
      this.triggerViewBind();
    }
  }


  notTodo(item?: ItemTodo) {
    this.todos.forEach(i => {
      if (i.idx == item.idx) {
        i.isDone = item.isDone;
      }
    })
    this.triggerViewBind();
  }

  notTodoAll() {
    this.todos.forEach(item => {
      item.isDone = this.catAll;
    })
    this.triggerViewBind();
    this.catAll = !this.catAll;
  }


  rmvTodo(item: ItemTodo) {
    this.todos = this.todos.filter(it => it !== item);
    this.triggerViewBind();
  }

  rmvNotTodo() {
    this.todos = this.todos.filter(it => it.isDone !== true);
    this.triggerViewBind();
  }

}
