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
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { employeeComponent } from './employee/employee.component';
import { EmployeeRowComponent } from './employee/employee-row/employee-row.component';
import { employeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { FormsModule } from '@angular/forms';
import { ChatWindowComponent } from './chat-window/chat-window.component';

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
    EmployeeProfileComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ChatWindowComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    [NgxMasonryModule],
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
