import { Component, OnInit } from '@angular/core';
import { IonSearchbar, IonButton, IonIcon, IonFooter} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pawOutline } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonSearchbar, IonButton, IonIcon, IonFooter
  ]
})
export class FooterComponent  implements OnInit {

  constructor() {
    addIcons({pawOutline});
   }

  ngOnInit() {}

}
