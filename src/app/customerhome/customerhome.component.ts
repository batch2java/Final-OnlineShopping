import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { Cart } from '../cart';
import { CartItem } from '../cartItem';
import { Category } from '../category';

import { Customer } from '../customer';

import { CustomerService } from '../customer.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

  name:string='';
  pname:string='';
  customer:Customer=new Customer;
  customers:any;
  id!:number;
  products!: Product[];
  product : Product = new Product()
  cartitem:CartItem=new CartItem();
  cart:Cart= new Cart();
  cat:string='';
  category = ['','Electronics','Grocery','HomeNeeds','Large Appliances','stationary'];
  
  //customers!:Observable<Customer[]>;
  constructor(private service:CustomerService,private route:Router,private service1:ProductService) { }

  ngOnInit(): void {
    this.reloadData();
    if(sessionStorage.getItem('id')!=null)
    {
    this.name=sessionStorage.getItem('name') as string;
    
    this.id = parseInt(sessionStorage.getItem('id') as string);
   
    console.log(this.id);
    
     
     this.service.getCustomerById(this.id)
     .subscribe(
      data => { console.log(data); 
      this.customer=data;
    
      
      },
      error => { console.log(error);  alert(error);}
      );
    }
    else{
      this.route.navigate(['/login']);

    }
  }
    reloadData() {
      //this.products = this.service.getProductList();
      this.service1.getProductList()
        .subscribe(
          data => { console.log(data); 
           // this.products = data as Product[];
            this.products = data ;
            console.log(this.products);
          },
          error => { console.log(error);  alert(error);}
        );
    }
    
    addProductToCart(pid:number){
       var quantity:string = prompt("Enter product quantity")as string;
      
      
      this.id = parseInt(sessionStorage.getItem('id') as string);
      var cartid = parseInt(sessionStorage.getItem('cartid') as string);
      this.cartitem =new CartItem();
      this.cartitem.customerId= this.id;
      this.cartitem.cartId= cartid;
      this.cartitem.productId= pid;
      this.cartitem.quantity= + quantity;
      

      this.service.addCart(this.cartitem)
      .subscribe(
        data => { console.log(data);
          this.cart=data; 
          alert('Product is added')
       
        
      },
        error => { console.log(error);  alert(error);}
      );
    
  }
  searchByName():void{
    if(this.pname===null || this.pname===''){
      this.reloadData();
  }
    else{
      this.service1.getProductByName(this.pname)
      .subscribe(mydata =>{
        this.product=mydata;alert('Search found')
        this.products=[]; this.products.push(this.product);
      },
      error => {console.log(error); alert('Search not found');}  );
   }
  }

  searchByCategory():void{
    if(this.cat===null ){
    this.reloadData();
    }
    else{
      this.service1.getAllProducts()
      .subscribe(
      data=>{ console.log(data); this.products=data;
      this.service1.getProductsByCategory(this.cat)
      .subscribe(mydata =>{
        this.products=mydata;alert('Search found');
      },
        error => { console.log(error); });
      },
      error => { console.log(error);  alert('Search not found');});
   }
    }
 
}

