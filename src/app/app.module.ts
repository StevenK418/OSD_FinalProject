import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarRowComponent } from './car/car-row/car-row.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { CarFormComponent } from './car/car-form/car-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthHttpInterceptor,AuthModule } from '@auth0/auth0-angular';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { employeeComponent } from './employee/employee.component';
import { EmployeeRowComponent } from './employee/employee-row/employee-row.component';
import { employeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarListComponent,
    CarRowComponent,
    CarDetailsComponent,
    CarFormComponent,
    HomeComponent,
    ProfileComponent,
    employeeComponent,
    EmployeeRowComponent,
    employeeListComponent,
    EmployeeDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule.forRoot({...environment.auth0,
      httpInterceptor: {
        allowedList: [`${environment.apiUri}/cars`],
      },})
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
