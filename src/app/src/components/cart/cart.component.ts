import { Component, Input, inject } from '@angular/core';
import { CartStore } from '../../../store/cart.store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartStore = inject(CartStore);
}
