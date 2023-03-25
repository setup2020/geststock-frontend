import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ICustomer } from 'src/app/models/customer.model';
import { IRole } from 'src/app/models/role.model';
import { IUser } from 'src/app/models/user.model';
import { RoleService } from '../services/role.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})


export class FindRoleResolver implements Resolve<IRole> {
  constructor(private roleService: RoleService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.roleService.show(Number(route.paramMap.get('id')));
  }
}



