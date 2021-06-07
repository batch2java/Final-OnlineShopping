import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Order } from 'src/app/order';
import { OrderInfo } from 'src/app/orderinfo';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  order:Order=new Order();
  id!:number;
  orderInfo!:OrderInfo[]
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.id=parseInt(sessionStorage.getItem('id') as string);

   
      
  this.service.getOrderDetails(this.id).subscribe(
    (data) => {
      console.log(data);
      this.orderInfo = data;
      console.log(this.orderInfo[0]);
      // console.log(this.orderInfo.orderStatus);
      // console.log(this.orderInfo.orderId);
      // console.log(this.orderInfo.orderDate);
      // console.log(this.orderInfo.productList);
      
    },
    (error) => {
      console.log(error);
      alert(error);
    }
  );
}
cancel(orderId:number): void{

// this.id=parseInt(sessionStorage.getItem('id') as string);
// var cartid = parseInt(sessionStorage.getItem('cartid') as string);
this.service.cancelOrder(orderId).subscribe(
  (data) => {
    console.log(data);
    this.orderInfo = data;
    console.log(this.orderInfo);
  },
  (error) => {
    console.log(error);
    alert(error);
  }
);
}
}