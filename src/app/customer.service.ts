import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl:string='http://localhost:8080/shop';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  getCustomer():Observable<any>{
    let myParams = new HttpParams();
    myParams.set("customerNumber",101);
    myParams.set("city","Chennai");

    return this.http.get<Customer>(this.baseUrl+'/find-customer',{params:myParams})
    .pipe(
      catchError(this.handleError)
    );
  }

  getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:8080/shop/rep-customers/1166');
    //.pipe(
      //map(this.extractData),
      catchError(this.handleError)
    //);
  }


  addCustomer(customer:Customer){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };

    this.http.post('http://localhost:8080/shop/add-customer', customer, httpOptions);
  }

  getProducts():Observable<string[]>{
    let baseUrl = 'http://localhost:8080/';
    return this.http.get<string[]>(baseUrl+'products/all');
  }
}
