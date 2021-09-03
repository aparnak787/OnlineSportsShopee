import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isloggedIn: boolean;
  public isUserIn : boolean;
  public userName: string = '';
  constructor() {
    this.isloggedIn = false;
    this.isUserIn = false;
  }
  login(username: string, password: string): Observable<boolean>{

    if (username == "admin" && password == "admin") {
      this.isloggedIn = true;
      this.userName = username;
      return of(this.isloggedIn);
    }
    else {
      alert("Sorry, only admin has access to this view this");
      return of(false);
    }
  }

  userLogin(username : string) : Observable<boolean>{
    this.isUserIn = true;
    this.userName = username;
    return of(this.isUserIn);
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }

  isUserSignIn() : boolean{
     return this.isUserIn;
  }

  isLogoutUser() : void{
    this.isUserIn = false;
  }
}
