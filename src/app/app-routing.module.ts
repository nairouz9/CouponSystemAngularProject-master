import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerGuardService } from './services/customer-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { CompanyGuardService } from './services/company-guard.service';
import { Page404Component } from './components/page404/page404.component';
import { CompOperationsComponent } from './components/admin/comp-operations/comp-operations.component';
import { AddCompanyComponent } from './components/admin/comp-operations/operations/add-company/add-company.component';
import { RemoveCompanyComponent } from './components/admin/comp-operations/operations/remove-company/remove-company.component';
import { UpdateCompanyComponent } from './components/admin/comp-operations/operations/update-company/update-company.component';
import { ViewAllCompaniesComponent } from './components/admin/comp-operations/operations/view-all-companies/view-all-companies.component';
import { ViewCompanyComponent } from './components/admin/comp-operations/operations/view-company/view-company.component';
import { CustOperationsComponent } from './components/admin/cust-operations/cust-operations.component';
import { AddCustomerComponent } from './components/admin/cust-operations/operations/add-customer/add-customer.component';
import { RemoveCustomerComponent } from './components/admin/cust-operations/operations/remove-customer/remove-customer.component';
import { UpdateCustomerComponent } from './components/admin/cust-operations/operations/update-customer/update-customer.component';
import { ViewAllCustomersComponent } from './components/admin/cust-operations/operations/view-all-customers/view-all-customers.component';
import { ViewCustomerComponent } from './components/admin/cust-operations/operations/view-customer/view-customer.component';
import { CompActionsComponent } from './components/company/comp-actions/comp-actions.component';
import { AddCouponComponent } from './components/company/comp-actions/actions/add-coupon/add-coupon.component';
import { RemoveCouponComponent } from './components/company/comp-actions/actions/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './components/company/comp-actions/actions/update-coupon/update-coupon.component';
import { ViewAllCouponsComponent } from './components/company/comp-actions/actions/view-all-coupons/view-all-coupons.component';
import { ViewCouponComponent } from './components/company/comp-actions/actions/view-coupon/view-coupon.component';
import { ViewCouponByTypeComponent } from './components/company/comp-actions/actions/view-coupon-by-type/view-coupon-by-type.component';
import { CustActionsComponent } from './components/customer/cust-actions/cust-actions.component';

import { ViewAllMyCouponsComponent } from './components/customer/cust-actions/actions/view-all-my-coupons/view-all-my-coupons.component';
import { ViewMyCouponsByPriceComponent } from './components/customer/cust-actions/actions/view-my-coupons-by-price/view-my-coupons-by-price.component';
import { ViewMyCouponsByTypeComponent } from './components/customer/cust-actions/actions/view-my-coupons-by-type/view-my-coupons-by-type.component';
import { DetailsComponent } from './components/admin/details/details.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { CouponListComponent } from './components/customer/coupon-list/coupon-list.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "admin", canActivate: [AdminGuardService], component: AdminComponent, children: [
    { path: "details", component: DetailsComponent },
    { path: "compOperations", component: CompOperationsComponent, children: [
      { path: 'addCompany', component: AddCompanyComponent },
      { path: 'removeCompany', component: RemoveCompanyComponent },
      { path: 'updateCompany', component: UpdateCompanyComponent },
      { path: 'viewAllCompanies', component: ViewAllCompaniesComponent },
      { path: 'viewCompany', component: ViewCompanyComponent },
    ]},
    { path: "custOperations", component: CustOperationsComponent, children: [
      { path: 'addCustomer', component: AddCustomerComponent },
      { path: 'removeCustomer', component: RemoveCustomerComponent },
      { path: 'updateCustomer', component: UpdateCustomerComponent },
      { path: 'viewAllCustomers', component: ViewAllCustomersComponent },
      { path: 'viewCustomer', component: ViewCustomerComponent },
    ]}
  ]},
  {path: "company", canActivate: [CompanyGuardService], component: CompanyComponent, children: [
    { path: "compDetails", component: CompanyDetailsComponent },
    { path: "compActions", component: CompActionsComponent, children: [
      { path: 'addCoupon', component: AddCouponComponent },
      { path: 'removeCoupon', component: RemoveCouponComponent },
      { path: 'updateCoupon', component: UpdateCouponComponent },
      { path: 'viewAllCoupons', component: ViewAllCouponsComponent },
      { path: 'viewCoupon', component: ViewCouponComponent },
      { path: 'viewCouponByType', component: ViewCouponByTypeComponent },
    ]}
  ]},
  {path: "customer", canActivate: [CustomerGuardService], component: CustomerComponent, children: [
    { path: "custDetails", component: CustomerDetailsComponent },
    { path: 'couponList', component: CouponListComponent },
    { path: "custActions", component: CustActionsComponent, children: [
     
      { path: 'viewAllMyCoupons', component: ViewAllMyCouponsComponent },
      { path: 'viewMyCouponsByPrice', component: ViewMyCouponsByPriceComponent },
      { path: 'viewMyCouponsByType', component: ViewMyCouponsByTypeComponent },
    ]}
  ]},
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: Page404Component}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
