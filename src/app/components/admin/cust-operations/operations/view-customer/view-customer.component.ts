// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-customer',
//   templateUrl: './view-customer.component.html',
//   styleUrls: ['./view-customer.component.css']
// })
// export class ViewCustomerComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { ICustomer } from 'src/app/components/customer/ICustomer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') viewCustomerForm : NgForm;
  customerId: number;
  obsSubscription : Subscription = null;
  customer: ICustomer;
  responseString: string;

  constructor(private srvAdmin: AdminService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.customerId = this.viewCustomerForm.value.customerId;
    console.log(this.customerId);

    this.obsSubscription = this.srvAdmin.viewCustomer(this.customerId).subscribe(
      (data) => {console.log(data); this.customer = data;
        if(this.customer === null) {
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
