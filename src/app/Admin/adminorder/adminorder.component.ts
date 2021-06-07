import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/admin.service';
import { Order } from 'src/app/order';
import { OrderService } from 'src/app/order.service';



@Component({
  selector: 'app-adminorder',
  templateUrl: './adminorder.component.html',
  styleUrls: ['./adminorder.component.css']
})
export class AdminorderComponent implements OnInit {

  
  order :Order=new Order();
  orders:any;
  oid!:number;
  location!:string;
  date= new Date;
  userId!:string;
admin :Admin=new Admin();
   
    constructor(private oservice:OrderService,private aservice:AdminService,private router:Router) { }
   
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
    
    this.oservice.getAllOrders()
    .subscribe(
      data => { console.log(data); this.orders=data; },
      error => { console.log(error);  alert(error);}
    );
  }
   
  searchById():void{
    if(this.oid===null ){
      this.oservice.getAllOrders().subscribe(mydata =>{
        this.orders=mydata;
  });
    }
    else{
      this.oservice.getAllOrders()
      .subscribe(


        
      data => { console.log(data); this.orders=data;
        this.oservice.getOrdersByCustomerId(this.oid)
        .subscribe(mydata =>{
        this.orders=mydata;alert('Search found');},
        error => { console.log(error); });
        },
        error => { console.log(error);  alert('Search not found');});
      }
      }
   
  searchByLocation():void{
    if(this.location===null){
      this.reloadData();
    }
    else{
      this.oservice.getAllOrders()
        .subscribe(
        data => { console.log(data); this.orders=data;
        this.oservice.getOrdersByLocation(this.location)
        .subscribe(mydata =>{
        this.orders=mydata;alert('Search found');},
        error => { console.log(error); });
        },
        error => { console.log(error);  alert('Search not found');});
        
     }
  }
   
  searchByDate():void{
    if(this.date===null ){
      this.reloadData();
    }
    else{
      this.oservice.getAllOrders()
        .subscribe(
        data => { console.log(data); this.orders=data;
        this.oservice.getOrdersByDate(this.date)
        .subscribe(mydata =>{
        this.orders=mydata;alert('Search found');},
        error => { console.log(error); });
        },
        error => { console.log(error);  alert('Search not found');});
        
     }
  }
  }