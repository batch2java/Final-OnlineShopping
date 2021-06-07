import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product:Product = new Product();
productId!:number;
productData:any;
  constructor(private route: ActivatedRoute,private router:Router,private service:ProductService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.getProductDetails(this.productId);
  }

  getProductDetails(productId:number){
    this.service.getproductById(productId).subscribe(
    data => { this.productData=data; console.log(this.productData);},
    error => { console.log(error);  alert("error");});
  }


  onBack():void{
    this.router.navigate(['/adminhome']);
  }

}

