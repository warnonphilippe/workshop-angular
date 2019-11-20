import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StateStorageService } from '../auth/state-storage.service';
import { LoginMultitenantService } from '../login/login-multitenant.service';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(private stateStorageService: StateStorageService, private loginService: LoginMultitenantService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401 && err.url && !err.url.includes('api/account')) {
              const destination = this.stateStorageService.getDestinationState();
              if (destination !== null) {
                const to = destination.destination;
                const toParams = destination.params;
                if (to.name === 'accessdenied') {
                  this.stateStorageService.storePreviousState(to.name, toParams);
                }
              } else {
                this.stateStorageService.storeUrl('/');
              }

              this.loginService.login();
            }
          }
        }
      )
    );
  }
}
