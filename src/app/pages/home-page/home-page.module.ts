import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page.component';




@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    CardModule,
      
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent]
})
export class HomePageModule { }
