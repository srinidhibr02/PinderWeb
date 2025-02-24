import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import {IonTitle, IonText, IonAvatar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NgClass, IonText, IonAvatar, RouterLinkActive]
})
export class HeaderComponent  implements OnInit {
  collapsed = true;
  constructor() { }

  ngOnInit() {}

}
