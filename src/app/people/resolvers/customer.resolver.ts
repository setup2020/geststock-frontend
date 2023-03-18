import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ICustomer } from 'src/app/models/customer.model';
import { CustomerService } from '../services/customer.service';

@Injectable({
  providedIn: 'root'
})


export class FindCustomerResolver implements Resolve<ICustomer> {
  constructor(private customerService: CustomerService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.customerService.show(Number(route.paramMap.get('id')));
  }
}

