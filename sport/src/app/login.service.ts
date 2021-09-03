import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Login } from './class/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public isloggedIn: boolean ;
  private userName: string = '';
  log : Login = new Login(); 
  private loginUrl = `http://localhost:8084/api`;
  constructor(private http: HttpClient) {
    this.isloggedIn = false;
  }
  login(login: Object): Observable<Object> {
    const url = `${this.loginUrl}/signin`;
    return this.http.post(url, login, { responseType: 'text' });
  }
 
  logout(id: string): Observable<any> {
    return this.http.get(`${this.loginUrl}/signout/${id}`, { responseType: 'text' });
  }

  getLoginUser(login : boolean): Observable<any>{
    return this.http.get(`${this.loginUrl}/login/${login}`);
  }
}
