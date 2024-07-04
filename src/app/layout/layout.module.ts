import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [

    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SlickCarouselModule
  ]
})
export class LayoutModule { }
