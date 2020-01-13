import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResult } from '../models/login-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoggedIn: boolean;
  public type: string;

  public constructor(private httpClient: HttpClient) {

   }

 
    

  public isExist(credentials: Credentials): Observable<LoginResult> {
    credentials.username='admin';
    credentials.password='1234';
    if(credentials.type === "ADMIN" && credentials.username === "admin" && credentials.password === "1234") {
      this.isLoggedIn = true;
      this.type = credentials.type;

      return this.httpClient.post<LoginResult>("http://localhost:8080/CouponSystemSpring2/webapi/login", credentials, {withCredentials: true});//return true;
    }

    if(credentials.type === "COMPANY" && credentials.username === "adidas" && credentials.password === "123") {
      this.isLoggedIn = true;
      this.type = credentials.type;
     
      return this.httpClient.post<LoginResult>("http://localhost:8080/CouponSystemSpring2/webapi/login", credentials, {withCredentials: true});//return true;
    }

    if(credentials.type === "CUSTOMER" && credentials.username === "Kobi" && credentials.password === "kobi123") {
      this.isLoggedIn = true;
      this.type = credentials.type;

      return this.httpClient.post<LoginResult>("http://localhost:8080//CouponSystemSpring2/webapi/login", credentials, {withCredentials: true});//return true;
    }
    alert("Wrong coordinates! Try again ");
    
  }

  public logout(): void {
    this.type = "";
    this.isLoggedIn = false;
  }

}
