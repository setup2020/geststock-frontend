import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleAddComponent } from './sale-add/sale-add.component';
import { SharedModule } from '../shared/shared.module';
import { SaleRoutingModule } from './sale-routing.module';



@NgModule({
  declarations: [
    SaleListComponent,
    SaleAddComponent,

  ],
  imports: [
    SharedModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }
