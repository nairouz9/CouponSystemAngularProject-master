// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-all-customers',
//   templateUrl: './view-all-customers.component.html',
//   styleUrls: ['./view-all-customers.component.css']
// })
// export class ViewAllCustomersComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICustomer } from 'src/app/components/customer/ICustomer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') viewAllCustomersForm : NgForm;
  obsSubscription : Subscription = null;
  customers: ICustomer[];
  responseString: string;
  listFilter:string ="";
  
  constructor(private srvAdmin: AdminService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.obsSubscription = this.srvAdmin.viewAllCustomers().subscribe(
      (data) => {console.log(data); this.customers = data;
        if(this.customers === null) {
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
