import { MenuLeftComponent } from './menu-left.component';
import { MenuTopComponent } from './menu-top.component';
import { MenuRightComponent } from './menu-right.component';
import { Routes } from '@angular/router';
import { MenuBottomComponent } from './menu-bottom.component';

export const MENU_ROUTES: Routes = [
  { path: '', component: MenuLeftComponent, outlet: 'menu-left'},
  { path: '', component: MenuRightComponent, outlet: 'menu-right'},
  { path: '', component: MenuTopComponent, outlet: 'menu-top' },
  { path: '', component: MenuBottomComponent, outlet: 'menu-bottom' }
];
