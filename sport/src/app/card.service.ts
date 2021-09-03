import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cartbaseUrl = 'http://localhost:8084/api/card';
 
  constructor(private http: HttpClient) { }
 
  getCard(id: number): Observable<any> {
    return this.http.get(`${this.cartbaseUrl}/id/${id}`);
  }
 
  createCard(card: Object): Observable<Object> {
    return this.http.post(`${this.cartbaseUrl}/add`, card);
  }
 
  updateCard(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.cartbaseUrl}/update/${id}`, value);
  }
 
  deleteCard(id: number): Observable<any> {
    return this.http.delete(`${this.cartbaseUrl}/delete/${id}`, { responseType: 'text' });
  }
 
  getCardList(): Observable<any> {
    return this.http.get(`${this.cartbaseUrl}/all`);
  }
}
