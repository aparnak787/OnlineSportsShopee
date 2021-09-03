import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  
    private baseUrl = 'http://localhost:8084/api';
    constructor(private http: HttpClient) { }
    getUser(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/user/userid/${id}`);
    }
    createUser(user: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}/user/save`, user);
    }
    getUsersList(): Observable<any> {
      return this.http.get(`${this.baseUrl}/user/findallusers`);
    }
}
