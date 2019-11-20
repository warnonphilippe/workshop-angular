import { Injectable } from '@angular/core';
import { Pays } from '../../shared/models/pays';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  path = 'api/pays';

  constructor(public http: HttpClient) { }

  findAll(): Observable<Pays[]> {
    return this.http.get(this.path) as Observable<Pays[]>;
  }
}
