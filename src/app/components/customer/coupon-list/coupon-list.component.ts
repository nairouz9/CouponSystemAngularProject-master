import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICoupon } from 'src/app/components/coupon/ICoupon';
import { CustomerService } from 'src/app/services/customer.service';
import { IStatus } from 'src/app/models/IStatus';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit, OnDestroy
{

  
  pageTitle:string = "Coupon List";
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  obsSubscription: Subscription = null;
  coupons: ICoupon[];
  responseString: string;
  listFilter: string = "";
  couponId:number;
  purchaseCouponStatus : IStatus;

  constructor(private srvCustomer: CustomerService) { }

  ngOnInit() {
    this.responseString = " ";
      this.obsSubscription = this.srvCustomer.viewCouponsList().subscribe(
        (data) => {
          console.log(data); this.coupons = data;
          if (this.coupons === null) {
            this.onResponse();
          }
        },
        (err) => { console.log(err); this.responseString = err; }
      );
  }

  purchaseCoupon(id: number){
    this.responseString = " ";
    this.couponId = id;
      this.obsSubscription = this.srvCustomer.purchaseCoupon(this.couponId).subscribe(
        (data) => {console.log(data); this.purchaseCouponStatus = data; this.onPurchaseResponse();},
      (err) => {console.log(err); this.responseString = err}
      );
    
 }

  toggleImage() {
    this.showImage = !this.showImage;
  }


  onResponse() {
    this.responseString = "Failed, No Results";
  }

  onPurchaseResponse() {
    this.responseString = this.purchaseCouponStatus.message;
  }
  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }

}

