import { Component, EnvironmentInjector, OnInit, inject, runInInjectionContext } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EndpointsSimulationService } from '../../services/endpoints-simulation.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {toSignal} from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,CommonModule,CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  productSVT = inject(EndpointsSimulationService);
  products$ = this.productSVT.hitEndpoint();

  productSvc: any;
  private readonly injector = inject(EnvironmentInjector)

  ngOnInit(): void {

    runInInjectionContext(this.injector,()=>{
      this.productSvc = inject(EndpointsSimulationService);
      const result = toSignal(this.products$)
    })

  }
}
