import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrderSupplier } from '../models/lineOrderSupplier.model';
import { handleError } from '../utils/handleError';

@Injectable({
  providedIn: 'root'
})
export class OrderSupplierService {
  private resourceOrderSupplierUrl = `${environment.apiUrl}/order_suppliers`;
  constructor(private http: HttpClient) { }


  saveOrderSupplier(orderSupplier:IOrderSupplier):Observable<any>{
    return this.http.post<any>(`${this.resourceOrderSupplierUrl}`,orderSupplier).pipe(retry(1),catchError(handleError))
  }

}
