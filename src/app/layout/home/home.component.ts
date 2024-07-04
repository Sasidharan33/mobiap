import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent ;
  slides = [
    {img: "../../../assets/images/banner.jpg"},
    {img: "../../../assets/images/banner1.png"},

  ];
  slideConfig = {slidesToShow: 1,
     slidesToScroll: 1,
    //  autoplay:true,
     autoplaySpeed:3000,arrows:false,dots:true};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

  removeSlide() {
    this.slides.length = this.slides.length - 2;
  }

  slickInit(e:any) {
    console.log('slick initialized');
  }

  breakpoint(e:any) {
    console.log('breakpoint');
  }

  afterChange(e:any) {
    console.log('afterChange');
  }

  beforeChange(e:any) {
    console.log('beforeChange');
  }

}
