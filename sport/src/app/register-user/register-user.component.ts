import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/User';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: User = new User();
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  constructor(private userService: RegisterUserService,private router: Router) { }

  ngOnInit() {
  }
  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data)
      this.gotoList();
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  
  gotoList() {
    this.router.navigate(['/login']);
  }

}
