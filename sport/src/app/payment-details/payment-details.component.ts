import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../class/Payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  id: number =0;
  payment!: Payment;
 
  constructor(private route: ActivatedRoute,private router: Router,
    private paymentService: PaymentService) { }
 
  ngOnInit() {
    this.payment = new Payment();
 
    this.id = this.route.snapshot.params['id'];
    
    this.paymentService.getPayment(this.id)
      .subscribe(data => {
        console.log(data)
        this.payment = data;
      }, error => console.log(error));
  }
 
  list(){
    this.router.navigate(['paymentList']);
  }
}
