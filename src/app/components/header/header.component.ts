import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import {IonTitle, IonText, IonAvatar, IonHeader} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NgClass, IonText, IonAvatar, RouterLinkActive, RouterLink, IonHeader]
})
export class HeaderComponent  implements OnInit {
  collapsed = true;
  constructor() { }

  ngOnInit() {}
  
  clicking(){
    console.log('I am being clicked')
  }
}
