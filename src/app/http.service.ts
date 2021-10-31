import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/Operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }
  getRequest(url: string): Observable<any> {
   return  this.http.get(url)
   .pipe(
    catchError(this.handleError)
  )

  }
  postRquest(url: string,data:any,options?:any): Observable<any> {
    return  this.http.post(url,options)
    .pipe(
      catchError(this.handleError)
    )
   }
   updateRquest(url: string,data:any,options?:any): Observable<any> {
    return  this.http.put(url,options)
    .pipe(
      catchError(this.handleError)
    )
   }
   handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
