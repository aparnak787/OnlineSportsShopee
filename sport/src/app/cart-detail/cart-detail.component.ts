import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../class/Cart';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  id: number =0;
  cart!: Cart ;

  constructor(private route: ActivatedRoute,private router: Router,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = new Cart();

    this.id = this.route.snapshot.params['id'];
    
    this.cartService.getCart(this.id)
      .subscribe(data => {
        console.log(data)
        this.cart = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['cartList']);
  }

}
