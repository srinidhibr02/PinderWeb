import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonGrid, IonCol, IonRow, IonImg, IonAvatar, IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, pawOutline } from 'ionicons/icons';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonIcon, IonAvatar, IonImg, IonRow, IonCol, IonGrid, CommonModule, FormsModule, HeaderComponent]
})
export class ServicesPage implements OnInit {

  constructor() {
    addIcons({heart,pawOutline,});
  }

  ngOnInit() {
  }

}
