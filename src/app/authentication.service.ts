import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080/';
  public token:string;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.token='';
  }

  login(username:string, password:string):Observable<string>{
    let myParams = new HttpParams().set('username',username).set('password',password);

    return this.http.post(this.baseUrl+'authenticate',{},{observe:'body',params:myParams,responseType:'text'}).pipe(
      map(
        (token)=>{
          sessionStorage.setItem('user',username);
          sessionStorage.setItem('token',token);
          this.token = token;
          return token;
        }
      )
    );
  }

  logout(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.token ='';
    this.router.navigateByUrl('/');
  }

  isUserSignedIn(){
    return sessionStorage.getItem('token') !== null;
  }

  getSignedInUser():string{
    return sessionStorage.getItem('user') as string;
  }

  getToken():string {
    return sessionStorage.getItem('token') as string;
  }

}
