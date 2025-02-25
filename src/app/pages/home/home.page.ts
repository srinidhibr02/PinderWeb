import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Typed from 'typed.js';
import { TypedDirective } from 'src/app/directives/type-effect.directive';
import { IonGrid, IonRow, IonCol, IonImg, IonContent } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonImg, IonCol, IonRow, IonGrid, CommonModule, FormsModule, HeaderComponent]
})
export class HomePage implements OnInit {
  strings:Array<string>
  constructor() {
    this.strings = ['Pet-Community.', 'Consult Veterinary.', 'Locate Grooming Center.', 'Shopping Pet Accessories.', 'Pet Health Tracker.', 'Events & Meetups.'];
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
