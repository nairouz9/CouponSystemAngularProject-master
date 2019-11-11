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

  public constructor(private httpClient: HttpClient) { }

  //The server must return one of the following jsons:
  //{ "isLoggedIn": true, "type": "admin"}
  //{ "isLoggedIn": true, "type": "company"}
  //{ "isLoggedIn": true, "type": "custumer"}
  //{ "isLoggedIn": false, "type": ""}

  // public isExist(credentials: Credentials): Observable<LoginResult> {//(Very impotent!)
    //Real Server:
    // return this.httpClient.post<LoginResult>("http://localhost:8080/webapi/CouponSystemSpringProj/login", credentials, {withCredentials: true});

    //Demo Server:
    // return this.httpClient.post<LoginResult>("/assets/json/server-demo.json", credentials, {withCredentials: true});
    // return this.httpClient.get<LoginResult>("/assets/json/server-demo.json");
    // return this.httpClient.get<LoginResult>("/assets/json/server-demo-admin.json");
    // return this.httpClient.get<LoginResult>("/assets/json/server-demo-company.json");
    // return this.httpClient.get<LoginResult>("/assets/json/server-demo-customer.json");
  // }

  public isExist(credentials: Credentials): Observable<LoginResult> {//public isExistDemo//boolean
    
    if(credentials.type === "ADMIN" && credentials.username === "admin" && credentials.password === "1234") {
      this.isLoggedIn = true;
      this.type = credentials.type;
      // return this.httpClient.get<LoginResult>("/assets/json/server-demo-admin.json");//return true;
      return this.httpClient.post<LoginResult>("http://localhost:8080/CouponSystemSpringProj/webapi/login", credentials, {withCredentials: true});//return true;
    }

    if(credentials.type === "COMPANY" && credentials.username === "adidas" && credentials.password === "123") {
      this.isLoggedIn = true;
      this.type = credentials.type;
      // return this.httpClient.get<LoginResult>("/assets/json/server-demo-company.json");//return true;
      return this.httpClient.post<LoginResult>("http://localhost:8080/CouponSystemSpringProj/webapi/login", credentials, {withCredentials: true});//return true;
    }

    if(credentials.type === "CUSTOMER" && credentials.username === "Kobi" && credentials.password === "kobi123") {
      this.isLoggedIn = true;
      this.type = credentials.type;
      // return this.httpClient.get<LoginResult>("/assets/json/server-demo-customer.json");//return true;
      return this.httpClient.post<LoginResult>("http://localhost:8080//CouponSystemSpringProj/webapi/login", credentials, {withCredentials: true});//return true;
    }
    alert("Wrong coordinates! Try again ");//return false;
    
  }

  public logout(): void {
    this.type = "";
    this.isLoggedIn = false;
  }

}
