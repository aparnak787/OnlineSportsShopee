import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../class/Order';
import { LoginService } from '../login.service';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  order: Order = new Order();
  submitted = false;
  disable : boolean = true;
  userId: any;
  price: number = 0;
 
  constructor(private orderService: OrderService, private productService : ProductService, private route: ActivatedRoute, private loginService : LoginService,
    private router: Router) { }
 
  ngOnInit() {
    this.order = new Order();
    this.price = this.route.snapshot.params['price'];
    this.order.amount = this.price;
    this.order.billingDate = new Date();
  }
 
  newOrder(): void {
    this.submitted = false;
    this.order = new Order();
  }
 
  save() {
    this.orderService.createOrder(this.order).subscribe(data => {
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
    this.router.navigate(['/createpayment',this.order.paymentMethod]);
  }

}
