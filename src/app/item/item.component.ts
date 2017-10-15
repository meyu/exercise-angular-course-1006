import { ItemTodo } from './../item-todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: ItemTodo;
  @Output() submitDone = new EventEmitter();
  @Output() submitRemove = new EventEmitter();
  @Output() submitRename = new EventEmitter();
  isEditing = false;
  oldItem = '';

  constructor() { }
  ngOnInit() { }

  setDone() {
    this.item.isDone = !this.item.isDone;
    this.submitDone.emit(this.item);
  }

  removeTodo() {
    this.submitRemove.emit(this.item);
  }

  //TODO: 待尋雙擊後定位至input框內。因雙擊後，雖然進入了編輯模式，但游標未定位至input，以致在雙繫另外項目時，原項目的blur事件未被觸發
  editTodo() {
    this.oldItem = this.item.todo;
    this.isEditing = true;
  }

  giveUpEdit() {
    this.isEditing = false;
    this.item.todo = this.oldItem;
  }

}
