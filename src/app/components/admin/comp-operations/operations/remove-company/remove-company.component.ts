// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-remove-company',
//   templateUrl: './remove-company.component.html',
//   styleUrls: ['./remove-company.component.css']
// })
// export class RemoveCompanyComponent implements OnInit {

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
  selector: 'app-remove-company',
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css']
})
export class RemoveCompanyComponent implements OnInit, OnDestroy {

  @ViewChild ('f') removeCompanyForm : NgForm;

  companyId: number;
  obsSubscription : Subscription = null;
  removeCompanyStatus : IStatus;
  responseString: string;

  constructor(private srvAdmin: AdminService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.companyId = this.removeCompanyForm.value.companyId;
    
    console.log(this.companyId);
    
    this.obsSubscription = this.srvAdmin.removeCompany(this.companyId).subscribe(
      (data) => {console.log(data); this.removeCompanyStatus = data; this.onResponse();},
      (err) => {console.log(err); this.responseString = err}
    );
  }

  onResponse(){
    this.responseString = this.removeCompanyStatus.message;
  }

  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
}
