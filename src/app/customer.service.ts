import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {  CartItem } from 'src/app/cartItem';
import { Customer } from './customer';
import { Order } from './order';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomers(id: number) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:8083/api/v1';
  //allCustomer: any=[];
  cartitem:CartItem= new CartItem();
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
     console.error('Client Side Error: ' , error.error.message);
     }else{
     console.error('Server Side Error: ', error);
     //alert("Server is Down");
     }
    return throwError('There is problem with Service');
    //alert("There is problem with Service");
     }

 //method to add customer
  addCustomer(customer: Customer){
    return this.http.post(`${this.baseUrl}/createcustomer`,customer).pipe(catchError(this.handleError));;
  }

  updateCustomer(customer: Customer) : Observable<any> {
    return this.http.put(`${this.baseUrl}/updatecustomer`,customer).pipe(catchError(this.handleError));;
  }

  removeCustomer(id:number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/deletecustomerById/`+id).pipe(catchError(this.handleError));;
  }
  
  userLogin(email:string,password:string) : Observable<any>{
    return this.http.get(`${this.baseUrl}/customervalidate/${email}/${password}`).pipe(catchError(this.handleError));;
    

  }

   getCustomerById(id:number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/getcustomerById/`+id).pipe(catchError(this.handleError));;
  }
  addCart(cartItem:CartItem): Observable<any> {
    
    return this.http.post(`${this.baseUrl}/addcart`,cartItem).pipe(catchError(this.handleError));;
  }
  getCartProductsById(id:number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/getcartproducts/`+id).pipe(catchError(this.handleError));;
  }
  addOrder(order : Order): Observable<any>{
    return this.http.post(`${this.baseUrl}/addorder`,order);
  }
  deleteProductByCartId(productId: number ,cartId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletecart/${productId}/${cartId}`).pipe(catchError(this.handleError));;
  }
  getOrderDetails(id:number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/orderbycustomerid/`+id).pipe(catchError(this.handleError));;
  }
  cancelOrder(orderId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/orderbyid/${orderId}`).pipe(catchError(this.handleError));;
}
getCustomerByLocation(location:string):Observable<any>{
  return this.http.get(`${this.baseUrl}/getallcustomer/${location}`).pipe(catchError(this.handleError));;
}

getAllCustomer():Observable<any>{
  return this.http.get(`${this.baseUrl}/allcustomers`).pipe(catchError(this.handleError));;
}

}