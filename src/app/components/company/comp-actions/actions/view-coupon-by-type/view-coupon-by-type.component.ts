// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-coupon-by-type',
//   templateUrl: './view-coupon-by-type.component.html',
//   styleUrls: ['./view-coupon-by-type.component.css']
// })
// export class ViewCouponByTypeComponent implements OnInit {

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
  selector: 'app-view-coupon-by-type',
  templateUrl: './view-coupon-by-type.component.html',
  styleUrls: ['./view-coupon-by-type.component.css']
})
export class ViewCouponByTypeComponent implements OnInit, OnDestroy
{

  @ViewChild('f') viewAllCouponsByTypeForm: NgForm;

  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  obsSubscription: Subscription = null;
  coupons: ICoupon[];
  responseString: string;
  listFilter: string = "";
  typeName:string;

  constructor(private srvCompany: CompanyService) { }

  ngOnInit() {
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onSubmit() {
    this.responseString = " ";
    this.typeName = this.viewAllCouponsByTypeForm.value.typeName;

      this.obsSubscription = this.srvCompany.viewAllCouponsByType(this.typeName).subscribe(
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
