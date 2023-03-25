import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { ProductRoutingModule } from './product-routing.module';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CommonModule } from '@angular/common';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    CategoryListComponent,
    CategoryAddComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductDetailComponent,
  
  ],
  imports: [
   // CommonModule,
    ProductRoutingModule,
    SharedModule,
  ]
})
export class ProductModule { }
