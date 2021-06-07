import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  private baseUrl = 'http://localhost:8083/api/v1';
  constructor(private http: HttpClient) { }

  adminLogin(userId:string,password:string) : Observable<any>{
  return this.http.get(`${this.baseUrl}/userlogin/${userId}/${password}`);
  }

  getAdmin(userId:string):Observable<any>{
  return this.http.get(`${this.baseUrl}/getuser/${userId}`);
  }

 
  isLoggedAdmin(){
    let userId = sessionStorage.getItem('aid');
    if(userId==null || userId=='')
        return false;
        else
        return true;
  }

  
}
