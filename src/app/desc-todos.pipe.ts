import { ItemTodo } from './item-todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descTodos'
})
export class DescTodosPipe implements PipeTransform {
  
  transform(todos: ItemTodo[]): ItemTodo[] {
    let todoView = todos.slice();
    return todoView.reverse();
  }

}
