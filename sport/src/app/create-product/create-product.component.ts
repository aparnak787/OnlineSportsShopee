import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../class/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product : Product = new Product();
  submitted  = false;

  constructor(private productService: ProductService,private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }


  save() {
    this.productService.create(this.product).subscribe(
      data => {
        console.log(data);
        this.gotoList();
      },
      error => {
        console.log(error)
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  
  gotoList() {
    this.router.navigate(['/editProduct']);
  }

}
