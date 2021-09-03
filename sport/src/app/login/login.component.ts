import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../class/Login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login : Login = new Login();
    submitted : boolean = false;
    username: string="";
    password: string="";
    retUrl:string="editProduct";
    retUserUrl: string = "viewProduct";
    iserror : boolean = false;
     
    constructor(private loginService: LoginService, private authService : AuthService,private router: Router,  private activatedRoute :ActivatedRoute) { }
    ngOnInit(): void {
      }

    onSubmit() {
      if(this.login.userName == 'admin' && this.login.password == 'admin'){
      this.authService.login(this.login.userName, this.login.password).subscribe(data => {
          console.log( 'return to '+ this.retUrl);
          if (this.retUrl!=null) {
                this.router.navigate( [this.retUrl]);
          } else {
                this.router.navigate( ['viewProduct']);
          }
      });
      }
      else{
        this.loginService.login(this.login).subscribe(
          data=> {
              console.log(data);
              this.authService.userLogin(this.login.userName).subscribe(data => {
                console.log( 'return to '+ this.retUserUrl);
                if (this.retUserUrl!=null) {
                     this.router.navigate( [this.retUserUrl]);
                } else {
                     this.router.navigate( ['login']);
                }
            });
          },
          error=> {
             console.log(error);
              this.iserror = true;
            }
          )
       }
    }
      gotoList() {
        this.router.navigate(['/viewProduct']);
      }
      goto(){
          this.router.navigate(['/registration']);
      }
}