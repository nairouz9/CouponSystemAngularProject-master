// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-all-coupons',
//   templateUrl: './view-all-coupons.component.html',
//   styleUrls: ['./view-all-coupons.component.css']
// })
// export class ViewAllCouponsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICoupon } from 'src/app/components/coupon/ICoupon';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-view-all-coupons',
  templateUrl: './view-all-coupons.component.html',
  styleUrls: ['./view-all-coupons.component.css']
})
export class ViewAllCouponsComponent implements OnInit, OnDestroy
{

  @ViewChild('f') viewAllCouponsForm: NgForm;

  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  obsSubscription: Subscription = null;
  coupons: ICoupon[];
  responseString: string;
  listFilter: string = "";

  constructor(private srvCompany: CompanyService) { }

  ngOnInit() {
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onSubmit() {
    this.responseString = " ";
      this.obsSubscription = this.srvCompany.viewAllCoupons().subscribe(
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
