import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent  implements OnInit {

  offerCards = [
    {
      title:'',
      articleLink:'',
      imageUrl:''
    }
  ]
  constructor() { }

  ngOnInit() {}

}
