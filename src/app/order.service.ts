import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private baseUrl = 'http://localhost:8083/api/v1';
  constructor (private http: HttpClient){}
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
  getOrdersByCustomerId(customerId:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/orderbycustomerid/${customerId}`).pipe(catchError(this.handleError));;
  }
 
  getOrdersByDate(date:Date):Observable<any>{
    return this.http.get(`${this.baseUrl}/orderbydate/${date}`).pipe(catchError(this.handleError));;
  }

  getOrdersByLocation(location:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/orderbylocation/${location}`).pipe(catchError(this.handleError));;
  }
  getAllOrders():Observable<any>{
    return this.http.get(`${this.baseUrl}/allorders`).pipe(catchError(this.handleError));;
  }

}


