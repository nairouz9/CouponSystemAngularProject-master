// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-remove-customer',
//   templateUrl: './remove-customer.component.html',
//   styleUrls: ['./remove-customer.component.css']
// })
// export class RemoveCustomerComponent implements OnInit {

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
  selector: 'app-remove-customer',
  templateUrl: './remove-customer.component.html',
  styleUrls: ['./remove-customer.component.css']
})
export class RemoveCustomerComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') removeCustomerForm : NgForm;

  customerId: number;
  obsSubscription : Subscription = null;
  removeCustomerStatus : IStatus;
  responseString: string;

  constructor(private srvAdmin: AdminService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.customerId = this.removeCustomerForm.value.customerId;
    
    console.log(this.customerId);
    
    this.obsSubscription = this.srvAdmin.removeCustomer(this.customerId).subscribe(
      (data) => {console.log(data); this.removeCustomerStatus = data; this.onResponse();},
      (err) => {console.log(err); this.responseString = err}
    );
  }
  onResponse(){
    this.responseString = this.removeCustomerStatus.message;
  }
  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
}
