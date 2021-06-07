import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';

import { CustomerService } from './customer.service';
import { AddressComponent } from './address/address.component';
import { AddressService } from './address.service';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CustomerlogoutComponent } from './customerlogout/customerlogout.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';



import { CustomerComponent } from './customer/customer.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';


import { NavFooterComponent } from './navbar/nav-footer/nav-footer.component';
import { NavHeaderComponent } from './navbar/nav-header/nav-header.component';
import { CustomerOrderComponent } from './customer/customer-order/customer-order.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { AdminlogoutComponent } from './Admin/adminlogout/adminlogout.component';
import { ViewcustomerComponent } from './Admin/viewcustomer/viewcustomer.component';
import { AdminService } from './admin.service';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { CreateproductComponent } from './Admin/createproduct/createproduct.component';
import { OrderService } from './order.service';
import { AdminorderComponent } from './Admin/adminorder/adminorder.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    AddressComponent,
    HomeComponent,
    CreateproductComponent,
    
    LoginComponent,
    CustomerhomeComponent,
    CustomerlogoutComponent,
    CustomerprofileComponent,
    
    CustomerNavbarComponent,
    CustomerCartComponent,
    
    NavHeaderComponent,
    NavFooterComponent,
    CustomerOrderComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdminlogoutComponent,
    ViewcustomerComponent,
    AdminNavbarComponent,
    AdminorderComponent,
    ProductdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService,CustomerService,AddressService,FormBuilder, AdminService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
