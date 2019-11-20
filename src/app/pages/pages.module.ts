import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ExemplePageModule } from './exemple-page/exemple-page.module';
import { HomePageModule } from './home-page/home-page.module';
import { PaysPageModule } from './pays-page/pays-page.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageModule,
    ExemplePageModule,
    PaysPageModule
  ],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent]
})
export class PagesModule { }
