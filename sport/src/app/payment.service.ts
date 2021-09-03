import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:8084/api/payment';
 
  constructor(private http: HttpClient) { }
 
  getPayment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }
 
  createPayment(payment: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, payment);
  }
 
  updatePayment(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }
 
  deletePayment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
 
  getPaymentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
