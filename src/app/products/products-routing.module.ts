import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', 
  component: ProductsComponent,
  children:[
    {
      path:'product-list' , component:ProductListComponent,
     
    },
    {
      path:'add-product' , component:AddProductComponent,
     
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
