import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../class/Cart';
import { Login } from '../class/Login';
import { Product } from '../class/Product';
import { LoginService } from '../login.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.component.html',
  styleUrls: ['./create-cart.component.css']
})
export class CreateCartComponent implements OnInit {
  cart: Cart = new Cart();
  submitted = false;
  login: Login = new Login;
  product : Product = new Product();
  productId : number = 0;
 userId : number = 0;
 disable : boolean = true;
  constructor(private cartService: CartService, private productService : ProductService, private route: ActivatedRoute, private loginService : LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.cart = new Cart();
    this.userId = this.route.snapshot.params['userId']
    this.productId = this.route.snapshot.params['productId'];
    
    this.productService.getProductById(this.productId)
      .subscribe(data => {
        console.log(data)
        this.product = data;
        this.cart.imageName = this.product.productImage;
        this.cart.price = this.product.priceAfterDiscount;
        this.cart.productName = this.product.productName;
      }, error => console.log(error));
  }
   newCart(): void {
    this.submitted = false;
    this.cart = new Cart();
  }

  save() {
    this.cartService.createCart(this.cart).subscribe(data => {
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
    this.router.navigate(['/cartList']);
  }
}
