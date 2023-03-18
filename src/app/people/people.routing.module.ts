import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { SkeletorMainComponent } from "../shared/layouts/skeletor-main/skeletor-main.component";
import { ClientAddComponent } from "./clients/client-add/client-add.component";
import { ClientListComponent } from "./clients/client-list/client-list.component";
import { FindCustomerResolver } from "./resolvers/customer.resolver";
import { FindSupplierResolver } from "./resolvers/supplier.resolver";
import { SupplierAddComponent } from "./suppliers/supplier-add/supplier-add.component";
import { SupplierListComponent } from "./suppliers/supplier-list/supplier-list.component";


const routes:Routes=[
   {
    component:SkeletorMainComponent,
    path:'',
    children:[
        {
            path:'clients',
            children:[
                {
                    path:'',
                    component:ClientListComponent
                },
                {
                    path:'add',
                    component:ClientAddComponent
                },
                {
                    path:':id/edit',
                    component:ClientAddComponent,
                    resolve:{ customer:FindCustomerResolver}
                },
                
            ]
        },
        {
            path:'suppliers',
            children:[
                {
                    path:'',
                    component:SupplierListComponent
                },
                {
                    path:'add',
                    component:SupplierAddComponent
                },

                {
                    path:':id/edit',
                    component:SupplierAddComponent,
                    resolve:{ supplier:FindSupplierResolver}
                },
               
                
            ]
        }
    ]
   }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PeopleRoutingModule{}