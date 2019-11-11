import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICustomer } from '../ICustomer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy
{

  pageTitle: string = "Details";
  userName: string;;
  id: number;
  date: Date = new Date();
  obsSubscription: Subscription = null;
  customer: ICustomer;
  responseString: string;

  constructor(private srvCustomer: CustomerService) { }

  ngOnInit() {
    this.responseString = " ";

    if (sessionStorage.getItem('username') != null) {
      this.userName = sessionStorage.getItem('username');
      this.id = parseInt(sessionStorage.getItem('id'))
    }

    else {

      this.obsSubscription = this.srvCustomer.viewCustomer().subscribe(
        (data) => {
          console.log(data); this.customer = data;
          if (this.customer === null) {
            this.onResponse();
          }
          else {
            this.userName = this.customer.customerName;
            this.id = this.customer.customerId;
            sessionStorage.setItem('username', this.customer.customerName)
            sessionStorage.setItem('id', this.customer.customerId.toString())
          }
        },
        (err) => { console.log(err); this.responseString = err }
      );
    }
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
