import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   
  products!: Product[];
  product : Product = new Product()
  constructor(private service:ProductService) { }
 
  ngOnInit(): void {
    this.reloadData();
  }
 
  reloadData() {
    //this.products = this.service.getProductList();
    this.service.getProductList()
      .subscribe(
        data => { console.log(data); 
         // this.products = data as Product[];
          this.products = data ;
          console.log(this.products);
        },
        error => { console.log(error);  alert(error);}
      );
  }
  remove(pid:number):void{
    //this.products = this.service.removeProductById(pid);
    this.service.removeProductById(pid)
      .subscribe(
        data => { console.log(data); 
         // this.products = data as Product[];
          this.products = data ;
          console.log(this.products);
        },
        error => { console.log(error);  alert(error);}
      );
     
  
     
  }
  
  editproduct():void{
    this.service.editProduct(this.product)
      .subscribe(
        data => { console.log(data);  this.products=data; this.reloadData();},
        error => { console.log(error);  }
      );
  }
 
}