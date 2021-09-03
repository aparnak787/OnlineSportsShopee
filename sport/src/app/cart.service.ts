import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8084/api/cart';

  constructor(private http: HttpClient) { 
    
  }
  getCart(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createCart(cart: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, cart);
  }

  updateCart(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteCart(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getCartList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
