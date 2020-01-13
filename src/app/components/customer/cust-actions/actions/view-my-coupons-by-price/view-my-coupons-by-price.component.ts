

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICoupon } from 'src/app/components/coupon/ICoupon';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-my-coupons-by-price',
  templateUrl: './view-my-coupons-by-price.component.html',
  styleUrls: ['./view-my-coupons-by-price.component.css']
})
export class ViewMyCouponsByPriceComponent implements OnInit, OnDestroy
{

  @ViewChild('f') viewAllMyCouponsByPriceForm: NgForm;

  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  obsSubscription: Subscription = null;
  coupons: ICoupon[];
  responseString: string;
  listFilter: string = "";
  priceTop: number;

  constructor(private srvCustomer: CustomerService) { }

  ngOnInit() {
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onSubmit() {
    this.responseString = " ";
    this.priceTop = this.viewAllMyCouponsByPriceForm.value.priceTop;

      this.obsSubscription = this.srvCustomer.viewAllMyCouponsByPrice(this.priceTop).subscribe(
        (data) => {
          console.log(data); this.coupons = data;
          if (this.coupons === null) {
            this.onResponse();
          }
        },
        (err) => { console.log(err); this.responseString = err; }
      );
  }

  onResponse() {
    this.responseString = "Failed, No Results";
  }
  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }

}

