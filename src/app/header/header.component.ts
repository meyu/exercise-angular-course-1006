import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'todos';
  hint4Input = 'What needs to be done?';
  inputTodo = '';
  
  @Output() submitNewTodo = new EventEmitter();

  constructor() {}
  ngOnInit() {}
}
