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

  constructor() { }
  ngOnInit() { }

  setDone() {
    this.item.isDone = !this.item.isDone;
    this.submitDone.emit(this.item);
  }

  removeTodo() {

  }

}
