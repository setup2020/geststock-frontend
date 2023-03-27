import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, shareReplay } from 'rxjs';
import { Auth } from 'src/app/models/auth.model';
import { environment } from 'src/environments/environment';
import { Account, UserType } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userIdentity:Account | null=null;

  private authenticationState=new BehaviorSubject<Account | null>(null);
  private sourceUrl=`${environment.apiUrl}`;

  private accountCache$?:Observable<Account | null>;

  constructor(
    private http:HttpClient,
    private router:Router

  ) { }

  authenticate(identity:Account | null):void{
    this.userIdentity=identity;
    this.authenticationState.next(identity);
  }

    /**
   * Vefirier si le l'utilisateur a l'authorisation ou pas
   * @param authorities
   * @returns
   */
    hasAnyAuthority(authorities: string[] | string): boolean {
      if (!this.userIdentity || !this.userIdentity.authorities) {
        return false;
      }
      if (!Array.isArray(authorities)) {
        authorities = [authorities];
      }
      if (this.userIdentity.authorities.find((a) => a === UserType.ADMIN))
        return true;
      return this.userIdentity.authorities.some((authority: string) =>
        authorities.includes(authority)
      );
    }

     /**
   * Retourn les informations de l'utilisateur connecter
   * @returns
   */
  getUserIdentity(): Account | null {
    return this.userIdentity;
  }
  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  private fetch(): Observable<Account> {
   
    return this.http.post<Account>(
      this.sourceUrl + '/infos',
      {}
    );
  }


  identity(force?:boolean):Observable<Account | null>{
    console.log(localStorage.getItem("token"));
    
    if(!localStorage.getItem("token")){
      this.authenticate(null);
      return (this.accountCache$=of(null))
    }
    if(!this.accountCache$ || force || !this.isAuthenticated()){

      this.accountCache$=this.fetch().pipe(shareReplay())
    }

    return this.accountCache$;

  }

  getAuthenticationState(): Observable<Account | null> {
    return this.authenticationState.asObservable();
  }



   /**
   * Permet de se logger
   * @param credentials
   * @returns
   */
   login(credentials: Auth): Observable<any> {
    return this.http.post(`${this.sourceUrl}/token`, credentials);
  }

}
