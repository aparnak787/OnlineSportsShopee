import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../class/User';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

    users!: Observable<User[]>;
    constructor(private userService: RegisterUserService, private router: Router) {}
  
    ngOnInit() {
      this.reloadData();
    } reloadData() {
      this.users = this.userService.getUsersList();
    }
    userDetails(id: number){
      this.router.navigate(['detail', id]);
    }  
}
