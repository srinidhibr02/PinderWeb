import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonContent, IonHeader, IonFooter } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonHeader, IonFooter, HeaderComponent, FooterComponent, IonContent],
})
export class AppComponent {
  constructor() {}
}
