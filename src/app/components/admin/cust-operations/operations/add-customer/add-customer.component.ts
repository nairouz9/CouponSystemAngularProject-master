// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-customer',
//   templateUrl: './add-customer.component.html',
//   styleUrls: ['./add-customer.component.css']
// })
// export class AddCustomerComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICustomer } from 'src/app/components/customer/ICustomer';
import { Subscription } from 'rxjs';
import { IStatus } from 'src/app/models/IStatus';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') addCustomerForm : NgForm;

  customer: ICustomer = {} as any;
  customerId: number;
  customerName : string;
  customerPassword : string;
  obsSubscription : Subscription = null;
  addCustomerStatus : IStatus;
  responseString: string;

  constructor(private srvAdmin: AdminService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.customerId = this.addCustomerForm.value.customerId;
    this.customerName = this.addCustomerForm.value.customerName;
    this.customerPassword = this.addCustomerForm.value.customerPassword;
    
    this.customer.customerId = this.customerId;
    this.customer.customerName = this.customerName;
    this.customer.customerPassword = this.customerPassword;
  
    console.log(this.customer);
    
    this.obsSubscription = this.srvAdmin.addCustomer(this.customer).subscribe(
      (data) => {console.log(data); this.addCustomerStatus = data; this.onResponse();},
      (err) => {console.log(err); this.responseString = err}
    );
  }
  
  onResponse(){
    this.responseString = this.addCustomerStatus.message;
  }
  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
}
