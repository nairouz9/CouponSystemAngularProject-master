// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-coupon',
//   templateUrl: './coupon.component.html',
//   styleUrls: ['./coupon.component.css']
// })
// export class CouponComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {Component, ViewEncapsulation, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { ICoupon } from './ICoupon';
import { CouponService } from './coupon.service';
import { Subscription } from 'rxjs';

@Component ({
    selector: 'app-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.css'],
    encapsulation:ViewEncapsulation.Emulated
})

export class CouponComponent implements OnInit,DoCheck, OnDestroy{

    pageTitle:string = "Coupon List";
    imageWidth : number = 100;
    imageMargin : number = 2;
    showImage: boolean = false;
    listFilter : string = "";
    obsSubscription: Subscription = null;

    coupons:ICoupon[];

        constructor(private srvCoupon: CouponService){
            console.log("in CTOR");
        }

        ngOnInit(){
            console.log("in onInit");
            this.obsSubscription = this.srvCoupon.getCoupons().subscribe(
                (data) => {this.coupons = data},
                (err) => console.log(err));
        
        }

        ngDoCheck(){
    //        console.log("in DoCheck");
        }

        toggleImage(){
            this.showImage = !this.showImage;
        }

        ngOnDestroy(): void {
            if(this.obsSubscription != null){
              this.obsSubscription.unsubscribe();
            }
          }


}
