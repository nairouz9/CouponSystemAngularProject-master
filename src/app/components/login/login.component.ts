import { Component } from '@angular/core';
import { Credentials } from 'src/app/models/credentials';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { IsetCookie } from 'src/app/models/IsetCookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public credentials:Credentials = new Credentials();

  public constructor(private loginService: LoginService, private router: Router) {
    this.credentials.type="ADMIN";
   }

  
  public login(): void {
    this.loginService.isExist(this.credentials).subscribe(loginResult => {
 
      
      if(!loginResult.isLoggedIn) {
        alert("Incorrect Username or password!");
       
      }
      else {
      
          this.loginService.isLoggedIn = true;
          this.loginService.type = loginResult.type;
          if(loginResult.type === "ADMIN") {
            this.router.navigate(["/admin"])
           
        }
          if(loginResult.type === "COMPANY") {
            this.router.navigate(["/company"])
           
        }
        if(loginResult.type === "CUSTOMER") {
            this.router.navigate(["/customer"])
           
        }
      }
      
    }, err=>{
      console.log("error: ", err.message);
      
    });
  }



 
}
