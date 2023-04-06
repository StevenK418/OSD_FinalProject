import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, retry, catchError } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})

export class CarAPIService {

  constructor(private http: HttpClient) { }
  private dataUri = `${environment.apiUri}/cars`;
  
  getCars(): Observable<Car[]>
  {
    console.log("get Cars called" );

    return this.http.get<Car[]>(`${this.dataUri}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
    // console.log('Dummy getCars called');
    // return of(this.dummyBooksData);
  }

   //taken from: https://angular.io/guide/http

   private handleError(error: HttpErrorResponse) {
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
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // CRUD Operations
  //CREATE
  addNewCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.dataUri, car)
      .pipe(
        catchError(this.handleError)
      )
  }

  //UPDATE
  updateCar(id: string, car: Car): Observable<Car> {
    console.log('subscribing to update' + id);
    let carURI: string = this.dataUri + '/' + id;
    return this.http.put<Car>(carURI, car)
      .pipe(
        catchError(this.handleError)
      )
  }

  //DELETE
  deleteCar(id: string): Observable<unknown> {
    const url = `${this.dataUri}/${id}`; 
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  



}
