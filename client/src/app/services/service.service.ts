import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../modles/task';
import { Observable } from 'rxjs/Observable';
import { Siblings } from '../modles/siblings';

@Injectable()
export class ServiceService {

  constructor(private httpClient: HttpClient) { }
  get(): Observable<Task>{
     return this.httpClient.get<Task>('http://localhost:1212/tasks');
   }
   onClick(t: Task): Observable<any> {
    return this.httpClient.post<any>('http://localhost:1212/add', t);
    };
    gets(): Observable<any>{
      return this.httpClient.get<Siblings>('http://localhost:1212/siblings');
    }
    delete(id: number) {
      return this.httpClient.delete<Task>('http://localhost:1212/dtask');
    }
}
    
