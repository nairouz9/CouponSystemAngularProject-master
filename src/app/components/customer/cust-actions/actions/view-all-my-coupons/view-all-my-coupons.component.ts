// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-all-my-coupons',
//   templateUrl: './view-all-my-coupons.component.html',
//   styleUrls: ['./view-all-my-coupons.component.css']
// })
// export class ViewAllMyCouponsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICoupon } from 'src/app/components/coupon/ICoupon';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-all-my-coupons',
  templateUrl: './view-all-my-coupons.component.html',
  styleUrls: ['./view-all-my-coupons.component.css']
})
export class ViewAllMyCouponsComponent implements OnInit, OnDestroy
{

  @ViewChild('f') viewAllMyCouponsForm: NgForm;

  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  obsSubscription: Subscription = null;
  coupons: ICoupon[];
  responseString: string;
  listFilter: string = "";

  constructor(private srvCustomer: CustomerService) { }

  ngOnInit() {
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onSubmit() {
    this.responseString = " ";
      this.obsSubscription = this.srvCustomer.viewAllMyCoupons().subscribe(
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

