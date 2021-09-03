import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { Card } from '../class/Card';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  card : Card = new Card();
  submitted = false;
 
  constructor(private cardService: CardService,
    private router: Router) { }
 
  ngOnInit() {
  }
 
  newPayment(): void {
    this.submitted = false;
    this.card = new Card();
  }
 
  save() {
    this.cardService.createCard(this.card).subscribe(data => {
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
    this.router.navigate(['/cardList']);
  }

}
