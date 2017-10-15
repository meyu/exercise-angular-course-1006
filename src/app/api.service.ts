import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemTodo } from './item-todo';

@Injectable()
export class ApiService {
  private apiBase = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any[]>(this.apiBase);
  }

  post(newTodo: string) {
    let postTodo = { todo: newTodo, isDone: false }
    return this.http.post(this.apiBase, postTodo);
  }

  put(todo: ItemTodo) {
    return this.http.put(`${this.apiBase}/${todo.id}`, todo);
  }

  delete(todo: ItemTodo) {
    return this.http.delete(`${this.apiBase}/${todo.id}`);
  }

}
