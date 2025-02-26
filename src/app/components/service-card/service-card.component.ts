import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import {IonCard, IonCardHeader, IonCardTitle} from '@ionic/angular/standalone'
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
  imports:[CommonModule, IonCard]
})
export class ServiceCardComponent  implements OnInit {
  @ViewChild('swiperContainer') swiperContainer: any;

  whatWeProvide = [
    {
      title:'Pet-Care',
      summary:'Your furry friends are in safe hands',
      imageUrl:'../../../assets/petreal/boxer.jpg',
    },
    {
      title:'Pet-Mate',
      summary:'Reach out to other Pet parents',
      imageUrl:'../../../assets/petreal/cute-pet-collage-isolated.jpg'
    },
    {
      title:'Consult-Vet',
      summary:'On spot Veterinary consultation',
      imageUrl:'../../../assets/petreal/medicine-5003631_1280.jpg'
    },
    {
      title:'Grooming',
      summary:'Locate nearby Centers',
      imageUrl:'../../../assets/petreal/grooming-6877254_1280.jpg'
    },
    {
      title:'Shop',
      summary:'Shop reliable pet accessories',
      imageUrl:'../../../assets/petreal/basket.jpg'
    },
  ]
  constructor() {}
  

  ngOnInit() {}
  ngAfterViewInit() {
    this.initializeSwiper();
  }

  swiper: any;
  
  initializeSwiper() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 2,  
      spaceBetween: 15,  
      loop: false,   
      centeredSlides:false,
      breakpoints: {
        320: {  
          slidesPerView: 3, 
        },
        768: { 
          slidesPerView: 3, 
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
