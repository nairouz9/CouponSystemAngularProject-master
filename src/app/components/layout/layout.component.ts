import { Component } from '@angular/core';//, OnInit
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {//implements OnInit 

 public constructor(private loginService: LoginService, private router: Router) { }

  // ngOnInit() {
  // }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(["/home"]);
  }

}
