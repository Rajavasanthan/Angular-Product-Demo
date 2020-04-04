import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {
    path : '',
    component : LandingComponent
  },
  {
    path : 'products',
    component : ProductListComponent
  },
  {
    path : 'product/:id',
    component : ProductComponent
  },
  {
    path : 'auth',
    loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule) // Lazy Loading
  },
  {
    path : 'admin',
    loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
