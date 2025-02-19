import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {IonTitle, IonText, IonAvatar} from '@ionic/angular/standalone';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NgClass, IonText, IonAvatar]
})
export class HeaderComponent  implements OnInit {
  collapsed = true;
  constructor() { }

  ngOnInit() {}

}
