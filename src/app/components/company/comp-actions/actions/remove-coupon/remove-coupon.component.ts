// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-remove-coupon',
//   templateUrl: './remove-coupon.component.html',
//   styleUrls: ['./remove-coupon.component.css']
// })
// export class RemoveCouponComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IStatus } from 'src/app/models/IStatus';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-remove-coupon',
  templateUrl: './remove-coupon.component.html',
  styleUrls: ['./remove-coupon.component.css']
})
export class RemoveCouponComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') removeCouponForm : NgForm;

  couponId: number;
  obsSubscription : Subscription = null;
  removeCouponStatus : IStatus;
  responseString: string;

  constructor(private srvCompany: CompanyService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.couponId = this.removeCouponForm.value.couponId;
    
    console.log(this.couponId);
    
    this.obsSubscription = this.srvCompany.removeCoupon(this.couponId).subscribe(
      (data) => {console.log(data); this.removeCouponStatus = data; this.onResponse();},
      (err) => {console.log(err); this.responseString = err}
    );
  }

  onResponse(){
    this.responseString = this.removeCouponStatus.message;
  }
  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
}
