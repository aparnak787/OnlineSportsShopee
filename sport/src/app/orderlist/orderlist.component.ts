import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../class/Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orders!: Observable<Order[]>;
 userId : number = 0;
  constructor(private orderService: OrderService,  private route: ActivatedRoute, private router: Router) {}
 
  ngOnInit() {
    this.userId = this.route.snapshot.params['userId']
    this.reloadData();
  }
 
  reloadData() {
    this.orders = this.orderService.getOrderList();
  }
 
  deleteOrder(id: number) {
    this.orderService.deleteOrder(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
 
  orderDetails(id: number){
    this.router.navigate(['orderdetails', id]);
  }

}
