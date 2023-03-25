import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { RoleAddComponent } from './roles/role-add/role-add.component';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserAddComponent } from './users/user-add/user-add.component';


@NgModule({
  declarations: [
    RoleListComponent,
    RoleAddComponent,
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
