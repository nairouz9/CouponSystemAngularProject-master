import { Component } from '@angular/core';//,OnInit
import { Credentials } from 'src/app/models/credentials';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { IsetCookie } from 'src/app/models/IsetCookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {//implements OnInit

  public credentials = new Credentials();

  public constructor(private loginService: LoginService, private router: Router) { }

  // public result: IsetCookie;

  // ngOnInit() {
  // }

  //Real Server:
  public login(): void {
    this.loginService.isExist(this.credentials).subscribe(loginResult => {
      // alert(loginResult.isLoggedIn + " " + loginResult.type);
      
      if(!loginResult.isLoggedIn) {
        alert("Incorrect Username or password!");
      }
      else {
        // sessionStorage.setItem('Cookie', this.result.value as string)
          this.loginService.isLoggedIn = true;
          this.loginService.type = loginResult.type;
          if(loginResult.type === "ADMIN") {
            this.router.navigate(["/admin"])
            // sessionStorage.setItem('clientType', this.result.comment)
        }
          if(loginResult.type === "COMPANY") {
            this.router.navigate(["/company"])
            // sessionStorage.setItem('clientType', this.result.comment)
        }
        if(loginResult.type === "CUSTOMER") {
            this.router.navigate(["/customer"])
            // sessionStorage.setItem('clientType', this.result.comment)
        }
      }
      
    });
  }



  //Demo Server:
  // public loginDemo(): void {

  //   if(this.loginService.isExistDemo(this.credentials)) {
      
  //     if(this.credentials.type === "admin") {
  //       this.router.navigate(["/admin"])
  //     }
  //     else if(this.credentials.type === "company") {
  //       this.router.navigate(["/company"])
  //     }
  //     else if(this.credentials.type === "customer") {
  //       this.router.navigate(["/customer"])
  //     }
  //   //alert(this.credentials.username + " " + this.credentials.username + " " + this.credentials.type);
  //   }
  //   else {
  //     alert("Incorrect Username or password!");
  //   }
  // }
}
