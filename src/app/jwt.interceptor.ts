import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token: string = this.authService.getToken();
    if (token) {
      console.log('JWT interceptor active');
      request = request.clone({
        setHeaders: {
          Authorization: `${token}`,
        },
      });
    }
    console.log('JWT interceptor token '+token);
    return next.handle(request);
  }
}
