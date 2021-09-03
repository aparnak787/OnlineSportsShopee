import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:8084/api/order';
 
  constructor(private http: HttpClient) { }
 
  getOrder(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }
 
  createOrder(order: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, order);
  }
 
  updateOrder(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }
 
  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/remove/${id}`, { responseType: 'text' });
  }
 
  getOrderList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }  
}
