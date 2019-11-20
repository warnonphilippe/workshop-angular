import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysPageComponent } from './pays-page.component';
import { PaysFormComponent } from './pays-form/pays-form.component';
import { PaysListComponent } from './pays-list/pays-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaysPageComponent, PaysFormComponent, PaysListComponent]
})
export class PaysPageModule { }
