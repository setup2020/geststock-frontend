import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletorMainComponent } from '../shared/layouts/skeletor-main/skeletor-main.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { FindCategoryResolver } from './resolvers/category.resolver';
import { FindProductResolver } from './resolvers/product.resolver';

const routes: Routes = [
  {
    component: SkeletorMainComponent,
    path: '',
    children: [
      {
        component: CategoryListComponent,
        path: 'categories',
      },
      {
        component: CategoryAddComponent,
        path: 'categories/add',
      },
      {
        component: CategoryAddComponent,
        path: 'categories/:id/update',
        resolve: { category: FindCategoryResolver },
      },
      {
        path: 'products',
        children: [
          {
            component: ProductListComponent,
            path: '',
          },
          {
            component: ProductAddComponent,
            path: 'add',
          },
          {
            component: ProductAddComponent,
            path: ':id/update',
            resolve: { product: FindProductResolver },
          },
          {
            component: ProductDetailComponent,
            path: ':id/details',
            resolve: { product: FindProductResolver },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
