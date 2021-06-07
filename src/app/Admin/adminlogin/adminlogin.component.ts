import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/admin.service';



@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admins!: Observable<Admin[]>;
  admin:Admin=new Admin();
  constructor(private service:AdminService,private router :Router) { }
  
  ngOnInit(): void {
  }

  adminLogin(){
    this.service.adminLogin(this.admin.userId,this.admin.password)
    .subscribe(
      data => { console.log(data); alert('Welcome User !!');
      this.admin=data;
      sessionStorage.setItem('userId',this.admin.userId+'');
      sessionStorage.setItem('userId',this.admin.userId);
      //alert(this.customer.email);
      //alert(this.customer.password);
  
      this.router.navigate(['adminhome']);
   
    },
      error => { console.log(error);  alert("Failed to Log In !!");}
    );
   }
  }
