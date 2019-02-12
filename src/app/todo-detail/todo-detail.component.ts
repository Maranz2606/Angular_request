import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  @Input()
  todo: Todo[] = [];




  constructor() { }

  ngOnInit() {
  }

}
