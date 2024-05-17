import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Product } from "../src/components/products/card/card.component";
import { computed } from "@angular/core";

export interface CartState {
    products: Product[];
    count:number;
}

const initialState: CartState = {
    products:[],
    count: 0
};

export const CartStore = signalStore(
    {providedIn:'root'},
    withState(initialState),
    withComputed(({products})=>({
        count: computed(()=> products().length)
    })),
    withMethods(({ products, ...store }) => ({
        addToCart( product:Product ):void{
            const  updatedProducts = [ ...products(), product ];
            patchState(store,{ products: updatedProducts})
        },
        removeItemFromCart(id:number){
            const updatedProduct = products().filter(product => product.id  != id);
            patchState(store,{ products: updatedProduct})
        }
    })) ,

    withHooks({
        onInit: (store)=> console.log('Store init', store),
        onDestroy: (store)=> console.log('Store Destroy',store)                
    })
)