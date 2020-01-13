import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICoupon, IStartDate, IEndDate } from '../components/coupon/ICoupon';
import { IStatus } from '../models/IStatus';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICompany } from '../components/company/ICompany';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  private BASE_URL = 'http://localhost:8080/company';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  addCoupon(coupon: ICoupon): Observable<IStatus> {
    const url = `${this.BASE_URL}/addCoupon`
    var addCouponJson = {
        "couponId": coupon.couponId,
        "title": coupon.title,
        "startDate":  {
            "year": coupon.startDate.year,
            "month": coupon.startDate.month,
            "day": coupon.startDate.day,
          },
        "endDate": {
            "year": coupon.endDate.year,
            "month": coupon.endDate.month,
            "day": coupon.endDate.day
        },
        "amount": coupon.amount,
        "type": coupon.type,
        "couponMessage": coupon.couponMessage,
        "price": coupon.price,
        "image": coupon.image,
        "active": coupon.active
    }
    console.log(addCouponJson);
    return this.http.post<IStatus>(url, addCouponJson, this.httpOptions).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError('error in http addCoupon')
        }
      )
    )
  }

  removeCoupon(couponId: number): Observable<IStatus> {
    const url = `${this.BASE_URL}/removeCoupon/${couponId}`
    return this.http.delete<IStatus>(url, this.httpOptions).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError("error in http removeCoupon")
        }
      )
    )
  }

  updateCoupon(couponId:number, newTitle: string, newEndDate:string, newAmount: number, newDescription: string, 
    newPrice: number, newImageURL: string): Observable<IStatus> {
    const url = `${this.BASE_URL}/updateCoupon`
    var updateCouponJson = {
        "couponId": couponId,
        "newTitle": newTitle,
        "newEndDate": newEndDate,
        "newAmount": newAmount,
        "newDescription": newDescription,
        "newPrice": newPrice,
        "newImageURL": newImageURL
    }
    return this.http.post<IStatus>(url, updateCouponJson, this.httpOptions).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError('error in http updateCoupon')
        }
      )
    )
  }

  viewCompany(): Observable<ICompany> {
    const url = `${this.BASE_URL}/getCompany`
    return this.http.get<ICompany>(url).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError("error in http getCompany")
        }

      )
    )
  }

  viewCoupon(couponId: number): Observable<ICoupon> {
    const url = `${this.BASE_URL}/getCoupon/${couponId}`
    return this.http.get<ICoupon>(url).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError("error in http getCoupon")
        }

      )
    )
  }

  viewAllCoupons(): Observable<ICoupon[]> {
    const url = `${this.BASE_URL}/getAllCoupons`
      return this.http.get<ICoupon[]>(url).pipe(
        catchError(
          (err: HttpErrorResponse) => {
            console.log(err)
            return throwError("error in http getAllCoupons")
          }
  
        )
      )
    }

    viewAllCouponsByType(typeName: string): Observable<ICoupon[]> {
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

      viewAllCouponsByPrice(priceTop: number): Observable<ICoupon[]> {
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

        viewAllCouponsByDate(untilDate: string): Observable<ICoupon[]> {
          const url = `${this.BASE_URL}/getAllCouponsByDate`
          var getAllCouponsByDateJson = {
              "untilDate": untilDate
          }
          return this.http.post<ICoupon[]>(url, getAllCouponsByDateJson, this.httpOptions).pipe(
              catchError(
                (err: HttpErrorResponse) => {
                  console.log(err)
                  return throwError("error in http getAllCouponsByDate")
                }
        
              )
            )
          }

}