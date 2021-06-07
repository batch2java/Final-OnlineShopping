import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/admin.service';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  product : Product = new Product();
  products!: Observable<Product[]>;
  userId!:string;
  admin :Admin=new Admin();
  category = ['Electronics','Grocery','HomeNeeds','Large Appliances','Stationary']; 
  color=['Blue','Black','Red','White','Yellow','Green'];
  addProduct!:FormGroup;
  Submitted!:boolean;

  constructor(private service :ProductService,private router:Router, private formBuilder:FormBuilder,private aservice:AdminService) { }
 
  ngOnInit(): void {
    this.addProduct = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      dimension: ['', Validators.required],
      manufacturer: ['', Validators.required],
      specification: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required]
  })
  if(sessionStorage.getItem('userId')!=null)
  {
  this.userId=sessionStorage.getItem('userId') as string;
 
  console.log(this.userId);
  
   
   this.aservice.getAdmin(this.userId)
   .subscribe(
    data => { console.log(data); 
    this.admin=data;
  
    
    },
    error => { console.log(error);  alert('adminhome');}
    );
  }
  else{
    this.router.navigate(['/adminlogin']);

  }

}
  saveproduct(){
    this.Submitted=true;
    if (this.addProduct.invalid) {
      return; 
    }
    else{
    this.service.createProduct(this.product)
    .subscribe(
      data => { console.log(data);
        this.product=data; 
        alert('Product is added');
      this.router.navigate(['adminhome'])
    },
      error => { console.log(error);  alert(error);}
    );
  }
  
}
}
