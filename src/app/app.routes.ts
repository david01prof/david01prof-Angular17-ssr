import { Routes } from '@angular/router';
import { ProductsComponent } from './src/components/products/products.component';
import { CartComponent } from './src/components/cart/cart.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent},
    { path: 'cart', component: CartComponent},
    { path: '', redirectTo: '/products', pathMatch: 'full'},
];
