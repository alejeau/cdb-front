import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './app/auth.service';
import {Observable} from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `X-AUTH-TOKEN ${this.auth.getToken()}`
        }
      });
    }
    return next.handle(request);
  }

}
