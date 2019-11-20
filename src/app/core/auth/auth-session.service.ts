import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  constructor(private http: HttpClient) {}

  logout(): Observable<any> {
    // logout from the server
    return this.http.post('api/logout', {}, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        // to get a new csrf token call the api
        this.http.get('api/account').subscribe(() => {}, () => {});
        return response;
      })
    );
  }
}
