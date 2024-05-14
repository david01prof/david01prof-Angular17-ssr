import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EndpointsSimulationService } from '../../services/endpoints-simulation.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,CommonModule,CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  productSVT = inject(EndpointsSimulationService);
  products$ = this.productSVT.hitEndpoint();
}
