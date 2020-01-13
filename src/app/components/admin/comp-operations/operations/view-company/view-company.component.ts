

import { Component, OnInit, ViewChild, OnChanges, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Subscription } from 'rxjs';
import { ICompany } from 'src/app/components/company/ICompany';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') viewCompanyForm : NgForm;
  companyId: number;
  obsSubscription : Subscription = null;
  company: ICompany;
  responseString: string;

  constructor(private srvAdmin: AdminService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.companyId = this.viewCompanyForm.value.companyId;
    console.log(this.companyId);

    this.obsSubscription = this.srvAdmin.viewCompany(this.companyId).subscribe(
      (data) => {console.log(data); this.company = data;
        if(this.company === null) {
          this.onResponse();
        }
      },
      (err) => {console.log(err);this.responseString = err}
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
