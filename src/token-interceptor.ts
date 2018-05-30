import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './app/auth/auth.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Adding token ' + this.auth.getToken() + 'to interceptor');
    if (this.auth.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.auth.getToken()}`
        }
      });
    }
    return next.handle(request);
  }

}
