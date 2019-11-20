import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserExemple } from './model/user-exemple';

@Injectable({
  providedIn: 'root'
})
export class ExempleService {

    simulateError = false;

    constructor(public http: HttpClient) { }

    public list(): Observable<UserExemple[]> {
        return this.http.get('assets/demo/data/users-exemple.json') as Observable<UserExemple[]>;
    }

    public save() {
        // Normalement :
        // return this.http.post...
        return this.simulateSave();
    }

    private simulateSave() {
        // On simule un save qui plantera une fois sur deux avec un temps d'attente de 3 secondes
        return new Observable(observer => {
            setTimeout(() => {
                if ( this.simulateError ) {
                    observer.next();
                } else {
                    observer.error();
                }
                this.simulateError = !this.simulateError;
                observer.complete();
            }, 3000);
        });
    }


}
