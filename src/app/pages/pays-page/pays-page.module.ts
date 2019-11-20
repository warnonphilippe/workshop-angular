import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysPageComponent } from './pays-page.component';
import { PaysFormComponent } from './pays-form/pays-form.component';
import { PaysListComponent } from './pays-list/pays-list.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CivadisPrimengLibModule} from '@civadis/primeng-lib';
import {CivadisPrimengLayoutModule, LayoutDependenciesModule} from '@civadis/primeng-layout';
import {AdLibraryModule} from 'ad-library';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CivadisPrimengLibModule,
    CivadisPrimengLayoutModule,
    AdLibraryModule,
    LayoutDependenciesModule,
    HttpClientModule
  ],
  declarations: [PaysPageComponent, PaysFormComponent, PaysListComponent]
})
export class PaysPageModule { }
