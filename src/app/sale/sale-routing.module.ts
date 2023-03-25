import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletorMainComponent } from '../shared/layouts/skeletor-main/skeletor-main.component';
import { SaleAddComponent } from './sale-add/sale-add.component';
import { SaleListComponent } from './sale-list/sale-list.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletorMainComponent,
    children: [
      {
        path: 'list',
        component: SaleListComponent,
      },
      {
        path: 'add',
        component: SaleAddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
