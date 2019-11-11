// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-all-companies',
//   templateUrl: './view-all-companies.component.html',
//   styleUrls: ['./view-all-companies.component.css']
// })
// export class ViewAllCompaniesComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICompany } from 'src/app/components/company/ICompany';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-all-companies',
  templateUrl: './view-all-companies.component.html',
  styleUrls: ['./view-all-companies.component.css']
})
export class ViewAllCompaniesComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') viewAllCompaniesForm : NgForm;
  obsSubscription : Subscription = null;
  companies: ICompany[];
  responseString: string;
  listFilter: string = "";

  constructor(private srvAdmin: AdminService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.obsSubscription = this.srvAdmin.viewAllCompanies().subscribe(
      (data) => {console.log(data); this.companies = data; 
        if(this.companies === null) {
          this.onResponse();
        }
      },
      (err) => {console.log(err); this.responseString = err;} 
    );
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
 
