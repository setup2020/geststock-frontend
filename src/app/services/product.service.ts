import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/product.model';
import { handleError } from '../utils/handleError';
import { createRequestOption, Pagination } from '../utils/request';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private resourceUrl = `${environment.apiUrl}/articles`;
  constructor(private http: HttpClient) { }

  save(product:IProduct):Observable<any>{
    return this.http.post<any>(`${this.resourceUrl}`,product).pipe(retry(1),catchError(handleError))
  }

  query(req?: Pagination): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl, {
      params: options,
    }).pipe(retry(1), catchError(handleError))
  }

  delete(id:number):Observable<any>{
    return this.http.delete(`${this.resourceUrl}/${id}`).pipe(retry(1),catchError(handleError))
  }

  show(id:number):Observable<any>{
    return this.http.get(`${this.resourceUrl}/${id}`).pipe(retry(1),catchError(handleError))
  }
}
