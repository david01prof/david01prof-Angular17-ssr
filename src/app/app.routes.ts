import { Routes } from '@angular/router';
import { ProductsComponent } from './src/components/products/products.component';
import { CartComponent } from './src/components/cart/cart.component';
import { SignalsComponent } from './src/components/signals/signals.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent},
    { path: 'signals', component: SignalsComponent},
    { path: 'product-details/:id', loadComponent:() => import('./src/components/details/details.component') },
    { path: 'cart', loadComponent:() => import('./src/components/cart/cart.component').then( (c) => c.CartComponent ) },
    { path: '', redirectTo: '/products', pathMatch: 'full'},
];
