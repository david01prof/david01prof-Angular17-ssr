import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Product } from "../src/components/products/card/card.component";

export interface CartState {
    products: Product[];
}

const initialState: CartState = {
    products:[],
};

export const CartStore = signalStore(
    {providedIn:'root'},
    withState(initialState),

    withMethods(({ products, ...store }) => ({
        addToCart( product:Product ):void{
            const  updatedProducts = [ ...products(), product ];
            patchState(store,{ products: updatedProducts})
        },
        removeItemFromCart(id:number){
            const updatedProduct = products().filter(product => product.id  != id);
            patchState(store,{ products: updatedProduct})
        }
    })) 
)