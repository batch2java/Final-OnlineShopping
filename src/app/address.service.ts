import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  
    

  constructor(private http:HttpClient) {​​​​​​​​ }​​​​​​​​
      getAddress(): Observable<any> {​​​​​​​​
  return this.http.get('http://localhost:8083/api/v1/getalladdress');
  }​​​​​​​​
  }​​​​​​​​
  
  
