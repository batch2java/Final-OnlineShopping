import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdminlogoutComponent } from './Admin/adminlogout/adminlogout.component';
import { AdminorderComponent } from './Admin/adminorder/adminorder.component';
import { CreateproductComponent } from './Admin/createproduct/createproduct.component';
import { ViewcustomerComponent } from './Admin/viewcustomer/viewcustomer.component';


import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { CustomerOrderComponent } from './customer/customer-order/customer-order.component';

import { CustomerComponent } from './customer/customer.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CustomerlogoutComponent } from './customerlogout/customerlogout.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  
  {path:'product',component:ProductComponent},
  {path:'customer',component:CustomerComponent},
  {path:'address',component:AddressComponent},
  {path:'customerlogin',component:LoginComponent},
  {path:'customerlogout',component:CustomerlogoutComponent},
  {path:'customerhome',component:CustomerhomeComponent},
  {path:'customerprofile',component:CustomerprofileComponent},
 
  {path:'cart',component:CustomerCartComponent},
  {path:'order',component:CustomerOrderComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'adminlogout',component:AdminlogoutComponent},
  {path:'searchcustomer',component:ViewcustomerComponent},
  {path:'createproduct',component:CreateproductComponent},
  {path:'searchorder',component:AdminorderComponent},
  {path:'productdetails/:id',component:ProductdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
