// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-update-coupon',
//   templateUrl: './update-coupon.component.html',
//   styleUrls: ['./update-coupon.component.css']
// })
// export class UpdateCouponComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEndDate } from 'src/app/components/coupon/ICoupon';
import { Subscription } from 'rxjs';
import { IStatus } from 'src/app/models/IStatus';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') updateCouponForm : NgForm;

  couponId: number;
  newTitle: string;
  newEndDate: string;
  newAmount: number;
  newDescription: string
  newPrice: number;
  newImageURL: string;
  obsSubscription : Subscription = null;
  updateCouponStatus : IStatus;
  responseString: string;

  

  constructor(private srvCompany: CompanyService) { }


  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.couponId = this.updateCouponForm.value.couponId;
    this.newTitle = this.updateCouponForm.value.newTitle;
    this.newEndDate = this.updateCouponForm.value.newEndDate;
    this.newAmount = this.updateCouponForm.value.newAmount;
    this.newDescription = this.updateCouponForm.value.newDescription;
    this.newPrice = this.updateCouponForm.value.newPrice;
    this.newImageURL = this.updateCouponForm.value.newImageURL;
    
    this.obsSubscription = this.srvCompany.updateCoupon(this.couponId, this.newTitle, this.newEndDate, 
      this.newAmount, this.newDescription, this.newPrice, this.newImageURL).subscribe(
      (data) => {console.log(data); this.updateCouponStatus = data; this.onResponse();},
      (err) => {console.log(err); this.responseString = err}
    );
  }
  
  onResponse(){
    this.responseString = this.updateCouponStatus.message;
   }
   ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
}
