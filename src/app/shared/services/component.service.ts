import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createRequestOption, Pagination } from 'src/app/utils/request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private resourceUrl = `${environment.apiUrl}/`;
  constructor(private http:HttpClient) { }


  public autoComplete<T>(url:string,req?:Pagination):Observable<T>{
      const options=createRequestOption(req);
    return this.http.get<T>(`${this.resourceUrl}${url}`,{
      params:options
    })
  }
}
