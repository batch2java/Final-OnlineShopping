import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/admin.service';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';



@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

admin :Admin=new Admin();
admins:any;
userId!:string;
name:string='';
products!: Product[];
product : Product = new Product()
pid!:number;
category = ['','Electronics','Grocery','HomeNeeds','Large Appliances','Stationary']; 
color=['Blue','Black','Red','White','Yellow','Green'];
cat!:string;
pname!:string;
addProduct!:FormGroup;
Submitted!:boolean;




  constructor(private route:Router,private service1:ProductService,private aservice:AdminService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.reloadData();
    this.addProduct = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      dimension: ['', Validators.required],
      manufacturer: ['', Validators.required],
      specification: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required],
      image:  ['', Validators.required]
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
      this.route.navigate(['/adminlogin']);
 
    }
  }

  reloadData() {
   
    this.service1.getAllProducts()
      .subscribe(
        data => { console.log(data); 
         
          this.products = data ;
          console.log(this.products);
        },
        error => { console.log(error);  alert(error);}
      );
  }
  remove(pid:number):void{
    this.service1.removeProductById(pid)
      .subscribe(
        data => { console.log(data); 
          this.products = data ;
          console.log(this.products);
          alert("Product deleted")
          this.reloadData();
        },
        error => { console.log(error);  alert(error);}
      );
     
  
     
  }
  detail(pid:number):void{
    this.service1.getproductById(pid)
      .subscribe(
        data => { console.log(data); this.product=data;this.reloadData();  },
        error => { console.log(error);  alert(error);}
      );
     
  }
  editproduct(productId:number):void{
    this.Submitted=true;
    if (this.addProduct.invalid) {
      return; 
    }
    else{
    this.service1.editProduct(this.product)
      .subscribe(
        data => { console.log(data);  this.product=data; this.reloadData();},
        error => { console.log(error);  }
      );
    }

  }

  
  searchById():void{
    if(this.pid===null ){
      this.service1.getAllProducts().subscribe(mydata =>{
        this.products=mydata;
  });
    }
    else{
    this.service1.getproductById(this.pid).subscribe(mydata =>{
      this.product=mydata; alert("Search Found")
      this.products=[]; this.products.push(this.product);
    },     
    error => {console.log(error); alert('Search not found');}  );
    }
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
       
       
  


