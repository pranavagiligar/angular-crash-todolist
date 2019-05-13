import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
  }

  toggleCompleted(todo) : Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}

// return [
//   {
//     id: 1,
//     title: 'Todo one',
//     completed: false
//   },
//   {
//     id: 2,
//     title: 'Todo two',
//     completed: false
//   },
//   {
//     id: 3,
//     title: 'Todo three',
//     completed: false
//   }
// ];