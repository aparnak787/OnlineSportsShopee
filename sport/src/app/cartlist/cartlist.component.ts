import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Cart } from '../class/Cart';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  cart!: Observable<Cart[]>;
  total : number = 0;
  userId : number = 0;
  constructor(private cartService: CartService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.cart = this.cartService.getCartList();
    this.total = 0;
    this.cart.forEach( (e) => {
      e.forEach( (key) => {
          this.total = this.total + key.total;
      })
    })
  }
  deleteCart(id: number) {
    this.cartService.deleteCart(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateCart(id: number) {
    this.router.navigate(['updateCart', id]);
  }

  cartDetails(id: number){
    this.router.navigate(['cartDetails', id]);
  }

  order(price: number | string){
    this.router.navigate(['createorder', price]);
  }

}
