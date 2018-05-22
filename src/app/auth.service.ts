import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  redirectUrl = '';

  login(username: string, password: string): Observable<boolean> {
    return of (true).pipe(delay(1000),
      tap(val => {
          if (username === 'admin' && password === 'admin') {
            this.isLoggedIn = true;
          }
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  }


