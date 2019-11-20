import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const arr = event.headers.keys();
            let alert = null;
            let alertParams = null;
            arr.forEach(entry => {
              if (entry.toLowerCase().endsWith('app-alert')) {
                alert = event.headers.get(entry);
              } else if (entry.toLowerCase().endsWith('app-params')) {
                alertParams = event.headers.get(entry);
              }
            });
            if (alert) {
              if (typeof alert === 'string') {
                console.log(alert, { param: alertParams }, null);
                console.log('TODO : create snackbar here');
              }
            }
          }
        },
        (err: any) => {}
      )
    );
  }
}
