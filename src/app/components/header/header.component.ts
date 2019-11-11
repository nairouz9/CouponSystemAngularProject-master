import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public constructor(private loginService: LoginService, private router: Router) { }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
  }

}
