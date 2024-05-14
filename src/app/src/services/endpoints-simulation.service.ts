import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointsSimulationService {

  http = inject(HttpClient);

  constructor() { }

  hitEndpoint() : Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
