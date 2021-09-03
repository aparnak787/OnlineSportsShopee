import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = `http://localhost:8084/api/product`;
  constructor(private http: HttpClient) {
  }
  create(product: Object): Observable<Object> {
    const url = `${this.productUrl}/add`;
    return this.http.post(url, product);
  }
  getAllProduct(): Observable<any> {
    return this.http.get(`${this.productUrl}/all`);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.productUrl}/delete/${id}`, { responseType: 'text' });
  }
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.productUrl}/id/${id}`);
  }
  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.productUrl}/update/${id}`, value);
  }
  getProductByCategory(category : string) : Observable<any> {
    return this.http.get(`${this.productUrl}/category/${category}`);
  }
}
