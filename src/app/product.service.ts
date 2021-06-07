import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8083/api/v1';
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
     console.error('Client Side Error: ' , error.error.message);
     }
     else{
     console.error('Server Side Error: ', error);
     //alert("Server is Down");
     }
    return throwError('There is problem with Service');
    //alert("There is problem with Service");
     }
  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallproduct`).pipe(catchError(this.handleError));;
  }
  removeProductById(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteproductById/${id}`).pipe(catchError(this.handleError));;
  }
  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/createproduct`, product).pipe(catchError(this.handleError));;
  }
  editProduct(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateproduct`, product).pipe(catchError(this.handleError));;
  }
  getproductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getproductById/${id}`).pipe(catchError(this.handleError));;
  }
  
  getProductByName(pname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getproductByName/${pname}`).pipe(catchError(this.handleError));;
  }
  getProductsByCategory(category:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getproductByCategory/${category}`).pipe(catchError(this.handleError));;
  }
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallproduct`).pipe(catchError(this.handleError));;
  }
  
}