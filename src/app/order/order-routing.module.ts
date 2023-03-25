import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletorMainComponent } from '../shared/layouts/skeletor-main/skeletor-main.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletorMainComponent,
    children: [
      {
        path: 'list',
        component: OrderListComponent,
      },
      {
        path:'add',
        component:OrderAddComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
