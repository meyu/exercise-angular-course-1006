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

  constructor() { }
  ngOnInit() { }

  setDone() {
    this.item.isDone = !this.item.isDone;
    this.submitDone.emit(this.item);
  }

  removeTodo() {
    this.submitRemove.emit(this.item);
  }

  editTodo() {
    this.isEditing = true;
  }

}
