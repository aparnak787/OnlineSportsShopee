import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../class/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {
  products!: Observable<Product[]>;

  value : string = '';
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getProductByCategory('Cricket');
  }

  details(id : number){
  this.router.navigate(['details', id]);
  }
  key: string = 'productId';
  reverse:boolean = false;
  sort(key : any){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
