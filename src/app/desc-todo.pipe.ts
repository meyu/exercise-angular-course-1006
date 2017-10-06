import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descTodo'
})
export class DescTodoPipe implements PipeTransform {
  
  transform(value: any[]): any {
    let todoView: any[] = [];
    todoView = value.slice();
    todoView.reverse();
    return todoView;
  }

}
