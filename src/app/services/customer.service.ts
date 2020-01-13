import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ICustomer } from '../components/customer/ICustomer';
import { catchError } from 'rxjs/operators';
import { ICoupon } from '../components/coupon/ICoupon';
import { IStatus } from '../models/IStatus';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {


    private BASE_URL = 'http://localhost:8080/customer';
    private assetURL = './assets/api/coupons.json';

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };

      constructor(private http: HttpClient) { }

      purchaseCoupon(couponId:number): Observable<IStatus> {
        const url = `${this.BASE_URL}/purchaseCoupon/${couponId}`
        return this.http.post<IStatus>(url, this.httpOptions).pipe(
          catchError(
            (err: HttpErrorResponse) => {
              console.log(err)
              return throwError("error in http purchaseCoupon")
            }
    
          )
        )
      }


      viewCustomer(): Observable<ICustomer> {
        const url = `${this.BASE_URL}/getCustomer`
        return this.http.get<ICustomer>(url).pipe(
          catchError(
            (err: HttpErrorResponse) => {
              console.log(err)
              return throwError("error in http getCustomer")
            }
    
          )
        )
      }

      viewAllMyCoupons(): Observable<ICoupon[]> {
        const url = `${this.BASE_URL}/getAllPurchases`
          return this.http.get<ICoupon[]>(url).pipe(
            catchError(
              (err: HttpErrorResponse) => {
                console.log(err)
                return throwError("error in http getAllPurchases")
              }
      
            )
          )
        }

        viewAllMyCouponsByType(typeName: string): Observable<ICoupon[]> {
          const url = `${this.BASE_URL}/getAllCouponsByType/${typeName}`
            return this.http.get<ICoupon[]>(url).pipe(
              catchError(
                (err: HttpErrorResponse) => {
                  console.log(err)
                  return throwError("error in http getAllCouponsByType")
                }
        
              )
            )
          }

          viewAllMyCouponsByPrice(priceTop: number): Observable<ICoupon[]> {
            const url = `${this.BASE_URL}/getAllCouponsByPrice/${priceTop}`
              return this.http.get<ICoupon[]>(url).pipe(
                catchError(
                  (err: HttpErrorResponse) => {
                    console.log(err)
                    return throwError("error in http getAllCouponsByPrice")
                  }
          
                )
              )
            }

            viewCouponsList(): Observable<ICoupon[]> {
              const url = `${this.BASE_URL}/getAllCouponsList`
             
                return this.http.get<ICoupon[]>(url).pipe(
                  catchError(
                    (err: HttpErrorResponse) => {
                      console.log(err)
                      return throwError("error in http getAllCouponsList")
                    }
            
                  )
                )
              }
}