import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../class/Cart';
import { Login } from '../class/Login';
import { Product } from '../class/Product';
import { LoginService } from '../login.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

 
  id: number = 0;
  userId : number = 0;
  product: Product = new Product();
  cart : Cart = new Cart();
  proid : number | string = 0;
  isStock : boolean = false;
  login: Login = new Login;
  constructor(private route: ActivatedRoute,private router: Router, private loginService : LoginService,
    private productService: ProductService, private cartService : CartService) { }

  ngOnInit() {
    this.product = new Product();
    this.id = this.route.snapshot.params['id'];
    
    this.productService.getProductById(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
        this.proid = this.product.productId;
        if(!this.product.inStock){
           this.isStock = true;
        }
      }, error => console.log(error));
  }
  view(){
    this.router.navigate(['viewProduct']);
  }

  addCart(id: number) {
    this.loginService.getLoginUser(true).subscribe(data => {
      console.log(data);
      this.login = data;
   });
   this.router.navigate(['createCart', this.login.userId, this.proid]);
  }

  order(price: number | string ){
    this.router.navigate(['createorder', price]);
  }
}
