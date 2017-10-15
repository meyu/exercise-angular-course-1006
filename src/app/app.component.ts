import { ItemTodo } from './item-todo';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todos = []; //由於會被http.get回傳的資料所覆寫，所以不先指定ItemTodo[]的型別
  catAll: boolean = true;

  private apiBase = 'http://localhost:3000/todos';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTodos();
  }

  // TODO: 不明所以，清單在套用 descTodos Pipe 後，沒有這個方法，則清單不會更新顯示；footer 的待辦統計亦同。
  triggerViewBind() {
    this.todos = this.todos.slice();
  }

  getTodos() {
    this.http.get<any[]>(this.apiBase)
      .subscribe(data => {
        this.todos = data;
      });
  }


  addTodo(newTodo: string) {
    if (newTodo !== '') {
      let postTodo = { todo: newTodo, isDone: false }
      this.http.post(this.apiBase, postTodo)
        .subscribe(data => {
          this.todos.push(data);
          this.triggerViewBind();
        });
    }
  }


  chgTodo(item?: ItemTodo) {
    this.http.put(`${this.apiBase}/${item.id}`, item).subscribe();
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


  rmvTodo(item: ItemTodo) {
    this.http.delete(`${this.apiBase}/${item.id}`)
      .subscribe(data => {
        this.todos = this.todos.filter(i => i !== item); //TODO: 藉由異動todos來更新清單的顯示。但有沒有更好的方案？
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
