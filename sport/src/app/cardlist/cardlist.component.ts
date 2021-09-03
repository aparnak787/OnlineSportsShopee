import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CardService } from '../card.service';
import { Card } from '../class/Card';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  card!: Observable<Card[]>;
 
  constructor(private cardService: CardService,
    private router: Router) {}
 
  ngOnInit() {
    this.reloadData();
  }
 
  reloadData() {
    this.card = this.cardService.getCardList();
  }
 
  deleteCard(id: number) {
    this.cardService.deleteCard(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
 
  cardDetails(id: number){
    this.router.navigate(['/carddetails', id]);
  }

}
