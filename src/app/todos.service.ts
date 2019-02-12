import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
 BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {

    return this.http.get(this.BASE_URL)
    .pipe(
      map((response: Todo[]) => {
        return response.map(todoJson => Todo.fromJson(todoJson));
      }
    ));
  }

  getTodosID(id: number) {
    const url = this.BASE_URL + '/' + id;
    return this.http.get(url)
    .pipe(
    map((response: any) => {
      return Todo.fromJson(response);
    }
  ));

  }
}
