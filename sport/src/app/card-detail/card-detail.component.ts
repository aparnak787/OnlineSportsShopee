import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../card.service';
import { Card } from '../class/Card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  id: number =0;
  card!: Card;
 
  constructor(private route: ActivatedRoute,private router: Router,
    private cardService: CardService) { }
 
  ngOnInit() {
    this.card = new Card();
 
    this.id = this.route.snapshot.params['id'];
    
    this.cardService.getCard(this.id)
      .subscribe(data => {
        console.log(data)
        this.card = data;
      }, error => console.log(error));
  }
 
  list(){
    this.router.navigate(['cardList']);
  }

}
