// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-update-company',
//   templateUrl: './update-company.component.html',
//   styleUrls: ['./update-company.component.css']
// })
// export class UpdateCompanyComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IStatus } from 'src/app/models/IStatus';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') updateCompanyForm : NgForm;

  companyId: number;
  newCompanyName: string;
  newCompanyPassword : string;
  newCompanyEmail: string;
  obsSubscription : Subscription = null;
  updateCompanyStatus : IStatus;
  responseString: string;
  
  constructor(private srvAdmin: AdminService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.companyId = this.updateCompanyForm.value.companyId;
    this.newCompanyName = this.updateCompanyForm.value.newCompanyName;
    this.newCompanyPassword = this.updateCompanyForm.value.newCompanyPassword;
    this.newCompanyEmail = this.updateCompanyForm.value.newCompanyEmail;

    this.obsSubscription = this.srvAdmin.updateCompany(this.companyId, this.newCompanyName, this.newCompanyPassword, this.newCompanyEmail).subscribe(
      (data) => {console.log(data); this.updateCompanyStatus = data; this.onResponse();},
      (err) => {console.log(err); this.responseString = err}
    );
  }

  onResponse(){
    this.responseString = this.updateCompanyStatus.message;
  }

  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
}