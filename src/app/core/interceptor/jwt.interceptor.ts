import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=localStorage.getItem("token");
    let isGrantType=false;
    if(req.body){
        isGrantType=Object.keys(req.body).includes("grantType");
    }
    console.log(isGrantType);
    
    if(!isGrantType ){
     
      if(token){
        req=req.clone({
          setHeaders:{
            'Authorization':`Bearer ${token}`
          }
        });
    }
    
    }

    return next.handle(req).pipe(
      map((event:HttpEvent<any>)=>{
        return event;
      })
    );
  }
}
