import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISupplier } from 'src/app/models/supplier.model';
import { Pagination, createRequestOption } from 'src/app/utils/request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private resourceUrl = `${environment.apiUrl}/suppliers`;
  constructor(private http:HttpClient) { }


  save(customer:ISupplier):Observable<ISupplier>{
    return this.http.post<ISupplier>(`${this.resourceUrl}`,customer);
  }

  show(customerId:number):Observable<ISupplier>{
    return this.http.get<ISupplier>(`${this.resourceUrl}/${customerId}`);
  }

  query(req?:Pagination):Observable<ISupplier[]>{
    const options=createRequestOption(req);
    return this.http.get<ISupplier[]>(`${this.resourceUrl}`,{
        params:options
    })
  }

  delete(customerId:number):Observable<void>{
      return this.http.delete<void>(`${this.resourceUrl}/${customerId}`)
  }
}
