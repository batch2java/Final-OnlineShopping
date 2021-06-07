import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartInfo } from '../cartinfo';


import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Order } from '../order';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {
  id!:number;
  cartInfo:CartInfo=new CartInfo();
  customer:Customer=new Customer();
  order:Order = new Order();
  productId!: number; 
  cartId!: number;
  totalCost: number=0;
  grandTotal: number=0;
  
  constructor(private service:CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.id=parseInt(sessionStorage.getItem('id') as string);

   //this.customer.id=sessionStorage.getItem('id')  ;
  //  this.service.getCartProductsById(this.id)
  //    .subscribe(
  //     data => { console.log(data.map)
  //     //this.cart=data;
  //     //.pipe(map((result: data) => this.cart = result.json()));
  //     let x:any =(this.cart);
  //     console.log(x);
  //     console.log(Object.keys(x));
  //     for (let key in Object.keys(x) ) {
  //       console.log(" key:", key, "value:", x[key]);
  //   }
    
      
  this.service.getCartProductsById(this.id).subscribe(
    (data) => {
      console.log(data);
      this.cartInfo = data;
      console.log(this.cartInfo);
      // this.allcart = data;
      // console.log(this.allcart);
      // this.list = data.product as Product[];
      // console.log(this.list);
      // console.log(data.products);
    },
    (error) => {
      console.log(error);
      alert(error);
    }
  );
}
remove(productId:number): void {
  
  
  this.id=parseInt(sessionStorage.getItem('id') as string);
  var cartid = parseInt(sessionStorage.getItem('cartid') as string);
  this.service.deleteProductByCartId(productId, cartid).subscribe(
    (data) => {
      console.log(data);
      this.cartInfo = data;
      console.log(this.cartInfo);
    },
    (error) => {
      console.log(error);
      alert(error);
    }
  );
}
calculateTotalCost(){
  for (let i=0;i<this.cartInfo.productList.length;i++){
    if(i<this.cartInfo.productList.length){
    this.totalCost = this.totalCost + (this.cartInfo.productList[i].price * this.cartInfo.productList[i].quantity );
  // console.log(this.allCarts[i].productCart.price);
  }
  this.grandTotal = 100 + this.totalCost;
  }
  console.log(this.totalCost);
  console.log(this.grandTotal);
  
}
makeOrder(){
  
  
 //var status = "your order is placed"
 this.id = parseInt(sessionStorage.getItem('id') as string);
 //var orderid = parseInt(sessionStorage.getItem('orderid') as string);
 var addressid = parseInt(sessionStorage.getItem('addressid') as string);
 console.log('address' + addressid);
 this.order.customerId= this.id;

 //this.order.orderId= orderid;
 this.order.addressId= addressid;
 //this.order.orderStatus= status;
 console.log(this.order.customerId);
 console.log(this.order.addressId);

 this.service.addOrder(this.order)
 .subscribe(
   data => { console.log(data);
     this.order=data; 
     alert('order is placed with orderid' + this.order.orderId)
  
   
 },
   error => { console.log(error);  alert(error);}
 );

}

}

