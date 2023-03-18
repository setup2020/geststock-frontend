import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from 'src/app/models/customer.model';
import { createRequestOption, Pagination } from 'src/app/utils/request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private resourceUrl = `${environment.apiUrl}/customers`;
  constructor(private http:HttpClient) { }


  save(customer:ICustomer):Observable<ICustomer>{
    return this.http.post<ICustomer>(`${this.resourceUrl}`,customer);
  }

  show(customerId:number):Observable<ICustomer>{
    return this.http.get<ICustomer>(`${this.resourceUrl}/${customerId}`);
  }

  query(req?:Pagination):Observable<ICustomer[]>{
    const options=createRequestOption(req);
    return this.http.get<ICustomer[]>(`${this.resourceUrl}`,{
        params:options
    })
  }

  delete(customerId:number):Observable<void>{
      return this.http.delete<void>(`${this.resourceUrl}/${customerId}`)
  }
}
