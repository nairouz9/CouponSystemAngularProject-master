

import { Component, OnInit, OnChanges, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { ICompany } from 'src/app/components/company/ICompany';
import { IStatus } from 'src/app/models/IStatus';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit, OnDestroy {


  @ViewChild ('f') addCompanyForm : NgForm;

  company: ICompany = {} as any;
  companyId: number;
  companyName : string;
  companyPassword : string;
  companyEmail: string;
  obsSubscription : Subscription = null;
  addCompanyStatus : IStatus;
  responseString: string;
  

  constructor(private srvAdmin: AdminService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.companyId = this.addCompanyForm.value.companyId;
    this.companyName = this.addCompanyForm.value.companyName;
    this.companyPassword = this.addCompanyForm.value.companyPassword;
    this.companyEmail = this.addCompanyForm.value.companyEmail;
    console.log(this.companyId + " " + this.companyName + " " + this.companyPassword + " " + this.companyEmail);
   
    this.company.companyId = this.companyId;
    this.company.companyName = this.companyName;
    this.company.companyPassword = this.companyPassword;
    this.company.companyEmail = this.companyEmail;


    console.log(this.company);
    
    this.obsSubscription = this.srvAdmin.addCompany(this.company).subscribe(
      (data) => {console.log(data); this.addCompanyStatus = data; this.onResponse();},
      (err) => {console.log(err); this.responseString = err}
    );
  }
  
  onResponse(){
    this.responseString = this.addCompanyStatus.message;
  }
  
  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }



}
