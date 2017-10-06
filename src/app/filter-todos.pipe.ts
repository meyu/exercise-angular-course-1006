import { ItemTodo } from './item-todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: ItemTodo[], fltType: number): ItemTodo[] {
    switch (fltType) {
      case 1:
        return todos.filter(item => item.isDone == false);
      case 2:
        return todos.filter(item => item.isDone == true);
      default:
        return todos;
    }
  }

}
