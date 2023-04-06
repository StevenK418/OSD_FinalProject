import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, retry, catchError } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeAPIService {

  constructor(private http: HttpClient) { }
  private dataUri = `${environment.apiUri}/employees`;
  
  getEmployees(): Observable<Employee[]>
  {
    console.log("get Employees called" );

    return this.http.get<Employee[]>(`${this.dataUri}`)
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
  addNewEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.dataUri, employee)
      .pipe(
        catchError(this.handleError)
      )
  }

  //UPDATE
  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    console.log('subscribing to update' + id);
    let employeeURI: string = this.dataUri + '/' + id;
    return this.http.put<Employee>(employeeURI, employee)
      .pipe(
        catchError(this.handleError)
      )
  }

  //DELETE
  deleteEmployee(id: string): Observable<unknown> {
    const url = `${this.dataUri}/${id}`; 
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }
}
