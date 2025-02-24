import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Typed from 'typed.js';
import { TypedDirective } from 'src/app/directives/type-effect.directive';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, TypedDirective]
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
