import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
    { path: 'test-error', component: TestErrorComponent, data: { breadcrumb: 'Test Error' } },
    { path: 'not-found', component: NotFoundComponent, data: { breadcrumb: 'Not Found' } },
    { path: 'server-error', component: ServerErrorComponent, data: { breadcrumb: 'Server Error' } },
    {
      path: 'shop',
      loadComponent: () => import('./shop/shop.component').then(m => m.ShopComponent),
      data: { breadcrumb: 'Shop' } 
    },
    {
      path: 'basket',
      loadComponent: () => import('./basket/basket.component').then(m => m.BasketComponent),
    },
    {
      path: 'checkout',
      loadComponent: () => import('./checkout/checkout.component').then(m => m.CheckoutComponent),
    },
    {
      path: 'shop/:id',
      loadComponent: () => import('./shop/product-details.component').then(m => m.ProductDetailsComponent),
      data: { breadcrumb: { alias: 'productDetails' } }
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
