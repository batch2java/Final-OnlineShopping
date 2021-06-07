import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';


import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customer :Customer=new Customer();
country = ['Australia', 'India', 'Russia', 'United Kingdom(UK)','United States America(USA)'];
Submitted!: boolean;
addCust!:FormGroup
  constructor(private service:CustomerService, private router: Router,private formBuilder: FormBuilder ) { }

  
  ngOnInit(): void {
    this.addCust = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mobileNumber: ['', Validators.required],
      password: ['', Validators.required,Validators.minLength(6),Validators.maxLength(10)],
      buildingName: ['', Validators.required],
      streetNo: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required]
    });
  }
// to save customer
saveCustomer(){
  this.Submitted=true;
  if (this.addCust.invalid) {
    return;  }
    else {
  this.service.addCustomer(this.customer)
   .subscribe(
     data => { console.log(data); alert('Registration Successful');
     this.router.navigate(['customerlogin']);},
     error => { console.log(error);  alert(error);}
   );
 
}
}
}
