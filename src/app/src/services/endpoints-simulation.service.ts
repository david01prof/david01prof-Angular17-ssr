import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsSimulationService {

  http = inject(HttpClient);

  constructor() { }

  hitEndpoint(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
