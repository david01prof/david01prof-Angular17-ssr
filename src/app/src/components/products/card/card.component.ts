import { Component, Input, OnChanges, Output, computed, input, numberAttribute, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventEmitter } from 'stream';

function addDiscountProperty(product:Product):Product{
  return {discount: false, ...product};
}

interface Rating{
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price:number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  discount?:boolean;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent{

    // Esto esta en fase beta
    
    // product = input.required({transform: addDiscountProperty})
    //product = input.required()
    @Input() product !: Product;

    addToCart = output<Product>();

    // rating = computed(() =>{
    //     const { rating } = this.product();
    //     return Object.values(rating);
    // });

    onAddToCart(product:Product){
      this.addToCart.emit(product)
    }

    /* @Input({required: true, transform: addDiscountProperty}) product !: any;
    // Transform permite modificar la data q me llega

    rating : string[] = [];

    ngOnChanges(changes:any):void{

      if(changes.product){
        const { rating } = this.product;
        this.rating = Object.values(rating);
      }
    }*/
    
}
