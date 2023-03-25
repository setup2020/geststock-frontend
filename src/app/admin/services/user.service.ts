import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError } from 'rxjs';
import { ICategory } from 'src/app/models/category.model';
import { IRole } from 'src/app/models/role.model';
import { IUser } from 'src/app/models/user.model';
import { handleError } from 'src/app/utils/handleError';
import { Pagination, createRequestOption } from 'src/app/utils/request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private resourceUrl = `${environment.apiUrl}/users`;
  constructor(private http: HttpClient) { }

  query(req?: Pagination): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl, {
      params: options,
    }).pipe(retry(1), catchError(handleError))
  }

  save(role:IUser):Observable<any>{
    return this.http.post<any>(`${this.resourceUrl}`,role).pipe(retry(1),catchError(handleError))
  }

  delete(id:number):Observable<any>{
    return this.http.delete(`${this.resourceUrl}/${id}`).pipe(retry(1),catchError(handleError))
  }

  show(id:number):Observable<any>{
    return this.http.get(`${this.resourceUrl}/${id}`).pipe(retry(1),catchError(handleError))
  }

}
