import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemTodo } from './item-todo';
import { NotifyService } from './notify.service';
import 'rxjs/add/operator/do'; //關鍵的一行，原因參見：https://angular.io/guide/http#logging

@Injectable()
export class ApiService {
  private apiBase = 'http://localhost:3000/todos';
  private iconUrl = 'favicon.ico';

  constructor(private http: HttpClient, private noti: NotifyService) { }

  get() {
    return this.http.get<any[]>(this.apiBase);
  }

  post(newTodo: string) {
    let postTodo = { todo: newTodo, isDone: false }
    return this.http.post(this.apiBase, postTodo)
      .do(data => {
        this.noti.pop('已新增：' + newTodo,'',this.iconUrl,false);
      });
  }

  put(todo: ItemTodo, isAll: boolean) {
    return this.http.put(`${this.apiBase}/${todo.id}`, todo)
    .do(data => {
      let message = isAll ? '全部事項' : todo.todo;
      let action = todo.isDone ? '已完成' : '已取消完成';
      this.noti.pop(action + '：' + message,'',this.iconUrl,false);
    });
  }

  delete(todo: ItemTodo, isAll: boolean) {
    return this.http.delete(`${this.apiBase}/${todo.id}`)
    .do(data => {
      let message = isAll ? '全部事項' : todo.todo;
      this.noti.pop('已刪除：' + message,'',this.iconUrl,false);
    });
  }

}
