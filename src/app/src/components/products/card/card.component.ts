import { Component, Input, numberAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';

function addDiscountProperty(product:any){
  return {discount: false, ...product};
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

    @Input({required: true, transform: addDiscountProperty}) product !: any;
    // Transform permite modificar la data q me llega
}
