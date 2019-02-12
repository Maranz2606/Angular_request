import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Output()
  SelectTitle = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

}
