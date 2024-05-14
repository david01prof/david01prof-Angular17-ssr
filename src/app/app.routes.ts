import { Routes } from '@angular/router';
import { ProductsComponent } from './src/components/products/products.component';
import { CartComponent } from './src/components/cart/cart.component';
import { DetailsComponent } from './src/components/details/details.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent},
    { path: 'cart', component: CartComponent},
    { path: 'product-details/:id', component: DetailsComponent},
    { path: '', redirectTo: '/products', pathMatch: 'full'},
];
