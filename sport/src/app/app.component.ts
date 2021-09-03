import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sport';
  userName : string = '';
  disable : boolean = false;
  isadmin : boolean = true;
  isuser : boolean =  true;
  constructor (private authService: AuthService, private loginService : LoginService, private router:Router) {
  }
  ngOnInit(): void {
     
  }
   
  
  logout(){
    this.userName = this.authService.userName;
    if(this.userName == 'admin'){
      this.authService.logoutUser();
      this.isadmin = false;
      this.router.navigate(['home']);
      alert("Admin LogOut Successfully");
    }else if(this.userName){
      this.loginService.logout(this.userName).subscribe(
        data=> {
            console.log(data);
            this.authService.isLogoutUser();
            this.isuser = false;
            this.router.navigate(['home']);
            alert(this.userName + " LogOut Successfully");
        },
        error=> {
           console.log(error);
          }
        )
    }else{
      alert("Login Before Logout");
    }
  }
  cart(){
    this.router.navigate(['cartList']);
  }
}
