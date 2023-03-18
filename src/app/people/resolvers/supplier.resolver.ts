import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ICustomer } from 'src/app/models/customer.model';
import { SupplierService } from '../services/supplier.service';

@Injectable({
  providedIn: 'root',
})
export class FindSupplierResolver implements Resolve<ICustomer> {
  constructor(private supplierService: SupplierService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.supplierService.show(Number(route.paramMap.get('id')));
  }
}
