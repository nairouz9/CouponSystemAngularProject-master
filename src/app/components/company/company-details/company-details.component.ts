import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICompany } from '../ICompany';
import { Subscription } from 'rxjs';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit, OnDestroy
{

  pageTitle: string = "Details";
  userName: string;;
  id: number;
  email: string;
  date : Date = new Date ();
  obsSubscription : Subscription = null;
  company: ICompany;
  responseString: string;

  constructor(private srvCompany: CompanyService) { }

  ngOnInit() {
    this.responseString = " ";

    if(sessionStorage.getItem('username') != null){
      this.userName = sessionStorage.getItem('username');
      this.id = parseInt(sessionStorage.getItem('id'))
      this.email = sessionStorage.getItem('email')
    }

    else{ 

    this.obsSubscription = this.srvCompany.viewCompany().subscribe(
      (data) => {console.log(data); this.company = data;
        if(this.company === null) {
          this.onResponse();
        }
        else{
          this.userName = this.company.companyName;
          this.id = this.company.companyId;
          this.email = this.company.companyEmail;
          sessionStorage.setItem('username', this.company.companyName)
          sessionStorage.setItem('id', this.company.companyId.toString())
          sessionStorage.setItem('email', this.company.companyEmail)
        }
      },
      (err) => {console.log(err);this.responseString = err}
    );
    }
  }

  onResponse(){
    this.responseString = "Failed, No Results";
  }
  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
  
}
