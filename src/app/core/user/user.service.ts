import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from './user.model';
import { createRequestOption } from '../shared/util/request-util';

@Injectable({ providedIn: 'root' })
export class UserService {
  public resourceUrl = 'api/users';

  constructor(private http: HttpClient) {}

  query(req?: any): Observable<HttpResponse<IUser[]>> {
    const options = createRequestOption(req);
    return this.http.get<IUser[]>(this.resourceUrl, { params: options, observe: 'response' });
  }
}
