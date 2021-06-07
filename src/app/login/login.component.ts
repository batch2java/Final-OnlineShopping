import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddressComponent } from '../address/address.component';
import { Customer } from '../customer';

import { CustomerService } from '../customer.service';
import { Order } from '../order';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customers!: Observable<Customer[]>;
  customer:Customer=new Customer();
  order:Order= new Order();
  
  addlogin!: FormGroup;
  Submitted!: boolean;
 constructor(private service:CustomerService, private router:Router, private formBuilder: FormBuilder) { }

 ngOnInit(): void {
  this.addlogin = this.formBuilder.group({
    email: ['', Validators.required],
     password: ['', Validators.required],
     
    });
  }
 
 login(){
  
  this.service.userLogin(this.customer.email,this.customer.password)
  .subscribe(
    data => { console.log(data); alert('Login succesfull !!');
    this.customer=data;
    sessionStorage.setItem('id',this.customer.customerId+'');
    sessionStorage.setItem('cartid',this.customer.cartId+'');
    
    sessionStorage.setItem('addressid',this.customer.addressId+'');
    
    sessionStorage.setItem('name',this.customer.firstName + ' ' + this.customer.lastName);
    this.router.navigate(['customerhome']);
 
  },
    error => { console.log(error);  
      alert("Failed to Log In !!");}
  );
 }
}


