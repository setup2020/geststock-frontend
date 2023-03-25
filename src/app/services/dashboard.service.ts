import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private resourceUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  count():Observable<{customer:number,supplier:number}>{

    return this.http.get<number>(`${this.resourceUrl}/customers/count`).pipe(
      switchMap(customer=>{
        return this.http.get<number>(`${this.resourceUrl}/suppliers/count`).pipe(
          map(supplier=>{
            return {customer,supplier}
          })
        )
      })
    );
  }


}
