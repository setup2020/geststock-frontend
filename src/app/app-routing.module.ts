import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './layouts/error/error.component';
import { SkeletorMainComponent } from './shared/layouts/skeletor-main/skeletor-main.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:SkeletorMainComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      }
    ]
  },
  {
    path:'',
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'',
    loadChildren:()=> import('./product/product.module').then(m=>m.ProductModule)
  },
  {
    path:'peoples',
    loadChildren:()=>import('./people/people.module').then(m=>m.PeopleModule)
  },
  {
    path:'404',
    component:ErrorComponent,
    data:{}
  },
  {
    path:'**',
    redirectTo:'/404'

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
