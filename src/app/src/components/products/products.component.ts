import { Component, EnvironmentInjector, OnInit, inject, runInInjectionContext } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EndpointsSimulationService } from '../../services/endpoints-simulation.service';
import { CommonModule } from '@angular/common';
import { CardComponent, Product } from './card/card.component';
import {toSignal} from '@angular/core/rxjs-interop'
import { CartStore } from '../../../store/cart.store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,CommonModule,CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
  // styleUrls: ['./products.component.scss','']
  // styles: ['$primary: red; h1 { color : $primary }']
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

  cartStore = inject(CartStore);

  onAddToCart(product:Product):void{
    this.cartStore.addToCart(product);
  }
}
