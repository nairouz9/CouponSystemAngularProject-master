// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-coupon',
//   templateUrl: './add-coupon.component.html',
//   styleUrls: ['./add-coupon.component.css']
// })
// export class AddCouponComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICoupon, IEndDate, IStartDate } from 'src/app/components/coupon/ICoupon';
import { Subscription } from 'rxjs';
import { IStatus } from 'src/app/models/IStatus';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') addCouponForm : NgForm;

  now = new Date();
  coupon: ICoupon = {} as any;
  couponId: number;
  title : string;
  stringStartDate : string;
  stringEndDate: string;
  splitedEndDate: string[] = {} as any;
  numSplitedEndDate : number[] = {} as any;
  startDate: IStartDate = {} as any;
  endDate: IEndDate = {} as any;
  amount:number;
  type: string;
  couponMessage: string;
  price: number;
  image: string;
  active:boolean; 
  obsSubscription : Subscription = null;
  addCouponStatus : IStatus;
  responseString: string;
  checkNumber : number;
  finalEndDate : string;
  dateObject: Date;

  

  constructor(private srvCompany: CompanyService) { }


  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.couponId = this.addCouponForm.value.couponId;
    this.title = this.addCouponForm.value.title;
    this.startDate.day = this.now.getDate();
    this.startDate.month = this.now.getMonth()+1;
    this.startDate.year = this.now.getFullYear();
    this.stringEndDate = this.addCouponForm.value.endDate;
    this.splitedEndDate = this.stringEndDate.split("/", 3);
    this.finalEndDate = this.splitedEndDate[1]+"/"+this.splitedEndDate[0]+"/"+this.splitedEndDate[2];
    this.dateObject = new Date(this.finalEndDate);
    this.endDate.day = this.dateObject.getDate();
    this.endDate.month = this.dateObject.getMonth()+1;
    this.endDate.year = this.dateObject.getFullYear();
    this.amount = this.addCouponForm.value.amount;
    this.type = this.addCouponForm.value.type;
    this.couponMessage = this.addCouponForm.value.couponMessage;
    this.price = this.addCouponForm.value.price;
    this.image = this.addCouponForm.value.image;
    this.active = true;


  
    this.coupon.couponId = this.couponId;
    this.coupon.title = this.title;
    this.coupon.startDate = this.startDate;
    this.coupon.endDate = this.endDate;
    this.coupon.amount = this.amount;
    this.coupon.type = this.type;
    this.coupon.couponMessage = this.couponMessage;
    this.coupon.price = this.price;
    this.coupon.image = this.image;
    this.coupon.active = this.active;

    console.log(this.coupon);
    
    this.obsSubscription = this.srvCompany.addCoupon(this.coupon).subscribe(
      (data) => {console.log(data); this.addCouponStatus = data; this.onResponse();},
      (err) => {console.log(err); this.responseString = err}
    );
  }
  
  onResponse(){
    this.responseString = this.addCouponStatus.message;
   }
   ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }

}

