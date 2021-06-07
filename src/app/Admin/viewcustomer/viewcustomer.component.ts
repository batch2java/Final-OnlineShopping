import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/admin.service';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';


@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

customer :Customer=new Customer();
customers!:any;
location!:string;
id!:number;
userId!:string;
admin :Admin=new Admin();

  constructor(private cservice:CustomerService,private aservice:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
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

  reloadData() {
  
  this.cservice.getAllCustomer()
  .subscribe(
    data => { console.log(data); 
      this.customers = data ;
      console.log(this.customers);
    },
    error => { console.log(error);  alert(error);}
  );
  }

  detail(cid:number):void{
    this.cservice.getCustomerById(cid)
      .subscribe(
        data => { console.log(data); this.customer=data; this.reloadData(); },
        error => { console.log(error);  alert(error);}
      );
     
  }


  searchById():void{
    if(this.id==null ){
      this.cservice.getAllCustomer().subscribe(mydata =>{
        this.customers=mydata;
  });
    }
    else{
    this.cservice.getCustomerById(this.id).subscribe(data =>{
    this.customer=data; console.log(this.customer); alert('Search found');
    this.customers=[]; this.customers.push(this.customer);
    },
    error => { console.log(error);  alert('Search not found');});
  }
  }

  

  searchByLocation():void{
    if(this.location===null){
      this.reloadData();
  }
    else{
      this.cservice.getAllCustomer()
      .subscribe(
      data => { console.log(data); this.customers=data;
      this.cservice.getCustomerByLocation(this.location)
      .subscribe(mydata =>{
      this.customers=mydata;alert('Search found');},
      error => { console.log(error); });
      },
      error => { console.log(error);  alert('Search not found');});
      
   }
}
}


