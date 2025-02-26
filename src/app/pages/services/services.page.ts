import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonGrid, IonCol, IonRow, IonImg, IonAvatar, IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, pawOutline, logoGooglePlaystore, logoAppleAppstore } from 'ionicons/icons';
import { HeaderComponent } from "../../components/header/header.component";
import { OfferCardComponent } from "../../components/offer-card/offer-card.component";
import { ServiceCardComponent } from "../../components/service-card/service-card.component";


@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonIcon, IonAvatar, IonImg, IonRow, IonCol, IonGrid, CommonModule, FormsModule, HeaderComponent, ServiceCardComponent]
})
export class ServicesPage implements OnInit {

  constructor() {
    addIcons({heart,pawOutline,logoGooglePlaystore,logoAppleAppstore});
  }

  ngOnInit() {
  }

  scrollToContent(elementId:any){
    const element = document.getElementById(elementId);
    element?.scrollIntoView({behavior:'smooth'});
  }

}
