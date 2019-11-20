import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLeftComponent } from './menu-left.component';
import { MenuRightComponent } from './menu-right.component';
import { MenuTopComponent } from './menu-top.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CivadisPrimengLayoutModule } from '@civadis/primeng-layout';
import { CivadisPrimengLibModule } from '@civadis/primeng-lib';
import { MENU_ROUTES } from './menus.routes';
import { MenuBottomComponent } from './menu-bottom.component';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild( MENU_ROUTES ), CivadisPrimengLibModule, CivadisPrimengLayoutModule, TranslateModule
  ],
  declarations: [ MenuLeftComponent, MenuRightComponent, MenuTopComponent, MenuBottomComponent ],
  exports: [ MenuLeftComponent, MenuRightComponent, MenuTopComponent, MenuBottomComponent]
})
export class MenusModule { }
