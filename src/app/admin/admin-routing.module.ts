import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletorMainComponent } from '../shared/layouts/skeletor-main/skeletor-main.component';
import { FindRoleResolver } from './resolvers/admin.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { RoleAddComponent } from './roles/role-add/role-add.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component:SkeletorMainComponent,
    children:[
      {
        path:'roles',
        children:[
          {
            path:'list',
            component:RoleListComponent
          },
          {
            path:'add',
            component:RoleAddComponent
          },
          {
            path:':id/update',
            component:RoleAddComponent,
            resolve:{role:FindRoleResolver}
          }


          
        ]

      },
      {
        path:'users',
        children:[
          {
            path:'list',
            component:UserListComponent
          },
          {
            path:'add',
            component:UserAddComponent
          },
          {
            path:':id/update',
            component:UserAddComponent,
            resolve:{user:UserResolver}
          }


          
        ]

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
