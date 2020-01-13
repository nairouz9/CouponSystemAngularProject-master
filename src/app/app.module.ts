import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { HttpClientModule } from "@angular/common/http";
import { CouponComponent } from './components/coupon/coupon.component';
import { CompOperationsComponent } from './components/admin/comp-operations/comp-operations.component';
import { CustOperationsComponent } from './components/admin/cust-operations/cust-operations.component';
import { AddCompanyComponent } from './components/admin/comp-operations/operations/add-company/add-company.component';
import { RemoveCompanyComponent } from './components/admin/comp-operations/operations/remove-company/remove-company.component';
import { UpdateCompanyComponent } from './components/admin/comp-operations/operations/update-company/update-company.component';
import { ViewCompanyComponent } from './components/admin/comp-operations/operations/view-company/view-company.component';
import { ViewAllCompaniesComponent } from './components/admin/comp-operations/operations/view-all-companies/view-all-companies.component';
import { AddCustomerComponent } from './components/admin/cust-operations/operations/add-customer/add-customer.component';
import { RemoveCustomerComponent } from './components/admin/cust-operations/operations/remove-customer/remove-customer.component';
import { UpdateCustomerComponent } from './components/admin/cust-operations/operations/update-customer/update-customer.component';
import { ViewCustomerComponent } from './components/admin/cust-operations/operations/view-customer/view-customer.component';
import { ViewAllCustomersComponent } from './components/admin/cust-operations/operations/view-all-customers/view-all-customers.component';
import { CompActionsComponent } from './components/company/comp-actions/comp-actions.component';
import { AddCouponComponent } from './components/company/comp-actions/actions/add-coupon/add-coupon.component';
import { RemoveCouponComponent } from './components/company/comp-actions/actions/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './components/company/comp-actions/actions/update-coupon/update-coupon.component';
import { ViewCouponComponent } from './components/company/comp-actions/actions/view-coupon/view-coupon.component';
import { ViewAllCouponsComponent } from './components/company/comp-actions/actions/view-all-coupons/view-all-coupons.component';
import { ViewCouponByTypeComponent } from './components/company/comp-actions/actions/view-coupon-by-type/view-coupon-by-type.component';
import { CustActionsComponent } from './components/customer/cust-actions/cust-actions.component';

import { ViewAllMyCouponsComponent } from './components/customer/cust-actions/actions/view-all-my-coupons/view-all-my-coupons.component';
import { ViewMyCouponsByPriceComponent } from './components/customer/cust-actions/actions/view-my-coupons-by-price/view-my-coupons-by-price.component';
import { ViewMyCouponsByTypeComponent } from './components/customer/cust-actions/actions/view-my-coupons-by-type/view-my-coupons-by-type.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './components/admin/details/details.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { CouponListComponent } from './components/customer/coupon-list/coupon-list.component';
import { CompanyFilterPipe } from './pipes/company-filter.pipe';
import { CustomerFilterPipe } from './pipes/customer-filter.pipe';
import { CouponFilterPipe } from './pipes/coupon-filter.pipe';
import { couponFilterPipe } from './components/coupon/coupon-filter.pipe';


@NgModule({
  declarations: [LayoutComponent, AdminComponent, CompanyComponent, CustomerComponent, LoginComponent, 
                 HomeComponent, Page404Component, CouponComponent, CompOperationsComponent, 
                 CustOperationsComponent, AddCompanyComponent, RemoveCompanyComponent, UpdateCompanyComponent, 
                 ViewCompanyComponent, ViewAllCompaniesComponent, AddCustomerComponent, RemoveCustomerComponent, 
                 UpdateCustomerComponent, ViewCustomerComponent, ViewAllCustomersComponent, CompActionsComponent, 
                 AddCouponComponent, RemoveCouponComponent, UpdateCouponComponent, ViewCouponComponent, 
                 ViewAllCouponsComponent, ViewCouponByTypeComponent, CustActionsComponent,  
                 ViewAllMyCouponsComponent, ViewMyCouponsByPriceComponent, ViewMyCouponsByTypeComponent, 
                 FooterComponent, HeaderComponent, DetailsComponent, CompanyDetailsComponent, CompanyFilterPipe,
                 CustomerDetailsComponent, CouponListComponent, CustomerFilterPipe, CouponFilterPipe, couponFilterPipe],
  imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  bootstrap: [LayoutComponent]
})
export class AppModule { }
