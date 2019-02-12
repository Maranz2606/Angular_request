import { Component, Output, Input } from '@angular/core';
import { TodosService } from './todos.service';
import { Todo } from './model/todo';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';

  @Input()
  todos: Todo[] = [];
  selectedTodo: Todo;
  loading = false;

  constructor(private todoservice: TodosService) {
    const successhandler = (response) => {
     this.todos = response;

    };

    const errorHandler = (error) => {
      console.log('error', error);
    };
    this.todoservice.getTodos().pipe(
      finalize(() => this.loading = false
      ))
    .subscribe(successhandler, errorHandler);


  }


  selectedTitle(todo: Todo) {
    this.loading = true;
    this.todoservice.getTodosID(todo.id).pipe(
      finalize(() => this.loading = false
      ))
    .subscribe(tododetail => {
      this.selectedTodo = tododetail;
    });
  }
}
