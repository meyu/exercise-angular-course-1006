import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todos = [];
  catAll: boolean = true;

  constructor(private Api: ApiService) { }
  

  ngOnInit() {
    this.getTodos();
  }

  // TODO: 不明所以，清單在套用 descTodos Pipe 後，沒有這個方法，則清單不會更新顯示；footer 的待辦統計亦同。
  triggerViewBind() {
    this.todos = this.todos.slice();
  }

  getTodos() {
    this.Api.get()
      .subscribe(data => {
        this.todos = data;
      });
  }


  addTodo(newTodo: string) {
    if (newTodo.trim() !== '') {
      this.Api.post(newTodo)
        .subscribe(data => {
          this.todos.push(data);
          this.triggerViewBind();
        });
    }
  }


  chgTodo(todo) {
    this.Api.put(todo).subscribe();
    this.triggerViewBind();    
  }

  chgTodoAll() {
    //若皆已勾選，則將行為改為取消勾選
    if (this.isAllDone()) {
      this.catAll = false;
    }
    this.todos.forEach(item => {
      item.isDone = this.catAll;
      this.chgTodo(item);
    })
    this.catAll = !this.catAll;
  }

  // 偵測是否有未完成的
  isAllDone() {
    let ad = this.todos.filter(item => item.isDone == false)
    return ad.length === 0;
  }


  rmvTodo(todo) {
    this.Api.delete(todo)
      .subscribe(data => {
        this.todos = this.todos.filter(i => i !== todo); //TODO: 藉由異動todos來更新清單的顯示。但有沒有更好的方案？
      });
  }

  rmvNotTodo() {
    this.todos.forEach(i => {
      if (i.isDone) {
        this.rmvTodo(i);
      }
    });
  }

}
