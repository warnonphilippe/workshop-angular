import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusModule } from './layout/menus/menus.module';
import { CivadisPrimengLayoutModule } from '@civadis/primeng-layout';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PagesModule } from './pages/pages.module';
import { environment } from 'src/environments/environment';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AuthExpiredInterceptor } from './core/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './core/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './core/interceptor/notification.interceptor';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

declare var require: any;
environment.version = require('../../package.json').version;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    CivadisPrimengLayoutModule,
    MenusModule, PagesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthExpiredInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NotificationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
