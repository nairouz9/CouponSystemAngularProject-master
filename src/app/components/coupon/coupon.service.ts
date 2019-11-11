import { ICoupon } from './ICoupon';

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class CouponService{

    private _couponURL = "https://ng-couponsystem-api.firebaseio.com/.json";

    constructor(private http: HttpClient){

    }

    getCoupons() : Observable<ICoupon[]> {

        return this.http.get<ICoupon[]>(this._couponURL).pipe(
            catchError(
                (err : HttpErrorResponse) => {
                    console.log(err)
                    return throwError ('error in http getCoupons')
                }
            )
        );

    }


}