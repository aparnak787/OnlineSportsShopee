import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../class/Payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {
  payment : Payment = new Payment();
  submitted = false;
  disable : boolean = true;
  constructor(private paymentService: PaymentService, private route: ActivatedRoute,
    private router: Router) { }
 
  ngOnInit() {
    this.payment = new Payment();
    this.payment.type = this.route.snapshot.params['method'];
  }
 
  newPayment(): void {
    this.submitted = false;
    this.payment = new Payment();
  }
 
  save() {
    this.paymentService.createPayment(this.payment).subscribe(data => {
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
    this.router.navigate(['/createcard']);
  }

}
