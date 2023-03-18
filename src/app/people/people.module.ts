import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PeopleRoutingModule } from './people.routing.module';
import { ClientAddComponent } from './clients/client-add/client-add.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { SupplierAddComponent } from './suppliers/supplier-add/supplier-add.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';



@NgModule({
  declarations: [
    ClientAddComponent,
    ClientListComponent,
    SupplierAddComponent,
    SupplierListComponent
  ],
  imports: [
    SharedModule,
    PeopleRoutingModule
  ],

})
export class PeopleModule { }
