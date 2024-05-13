import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointsSimulationService } from '../../services/endpoints-simulation.service';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [CommonModule,JsonPipe],
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss'
})
export class AsyncComponent {

  endPointSimulationService = inject(EndpointsSimulationService);

  data$ : Observable<any> = this.endPointSimulationService.hitEndpoint();

  constructor(){
  }
}
