import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authServ: AuthenticationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let token: string = this.authServ.getToken();
    if (token) {
      console.log('Guard status: active');
      return true;
    }
    console.log('Guard token '+token);
    this.router.navigate(['/login'], { queryParams: { targetUrl: state.url }});
    return false;
  }
}
