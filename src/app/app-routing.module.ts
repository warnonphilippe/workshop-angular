import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { exemplePageRoutes } from './pages/exemple-page/exemple-page.routes';
import {paysPageRoutes} from './pages/pays-page/pays-page.routes';


const routes: Routes = [
  ...exemplePageRoutes,
  ...paysPageRoutes,
  { path: 'home', component: HomePageComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
