import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../helper/angular-material';
import { AddProductComponent } from './add-product/add-product.component';
import {SharedModule} from '../helper/shared/shared.module'
import { EditDialogeBoxComponent } from './edit-dialoge-box/edit-dialoge-box.component';

@NgModule({
  declarations: [ProductsComponent, ProductListComponent, AddProductComponent ,EditDialogeBoxComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class ProductsModule { }
