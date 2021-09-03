import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Payment } from '../class/Payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {
  payment!: Observable<Payment[]>;
 
  constructor(private paymentService: PaymentService,
    private router: Router) {}
 
  ngOnInit() {
    this.reloadData();
  }
 
  reloadData() {
    this.payment = this.paymentService.getPaymentList();
  }
 
  deletePayment(id: number) {
    this.paymentService.deletePayment(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
 
  updatePayment(id: number) {
    this.router.navigate(['update', id]);
  }
 
  paymentDetails(id: number){
    this.router.navigate(['paymentdetails', id]);
  }

}
