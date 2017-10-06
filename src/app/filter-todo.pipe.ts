import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: any[], fltType?: number): any {
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
