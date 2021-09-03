import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../class/User';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: number = 0;
  user: User = new User();
  constructor(private route: ActivatedRoute,private router: Router, private userService: RegisterUserService) { }

 

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['module/userlist']);
  }

}
