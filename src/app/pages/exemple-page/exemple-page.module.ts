import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExempleFormComponent } from './exemple-form/exemple-form.component';
import { ExempleListComponent } from './exemple-list/exemple-list.component';
import { CivadisPrimengLibModule } from '@civadis/primeng-lib';
import { AdLibraryModule } from 'ad-library';
import { ExempleFormAnnexesComponent } from './exemple-form/exemple-form-annexes/exemple-form-annexes.component';
import { ExempleFormAutresComponent } from './exemple-form/exemple-form-autres/exemple-form-autres.component';
import { ExempleFormInfosgeneralesComponent } from './exemple-form/exemple-form-infosgenerales/exemple-form-infosgenerales.component';
import { LayoutDependenciesModule, CivadisPrimengLayoutModule } from '@civadis/primeng-layout';

@NgModule({
  declarations: [
      ExempleFormComponent,
      ExempleListComponent,
      ExempleFormAnnexesComponent,
      ExempleFormAutresComponent,
      ExempleFormInfosgeneralesComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CivadisPrimengLibModule,
    CivadisPrimengLayoutModule,
    AdLibraryModule,
    LayoutDependenciesModule
  ],
  exports: [ExempleFormComponent, ExempleListComponent]
})
export class ExemplePageModule { }
