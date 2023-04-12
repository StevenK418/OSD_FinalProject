import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { HomeComponent } from './home/home.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { ProfileComponent } from './profile/profile.component';
import { employeeComponent} from './employee/employee.component';
import { employeeListComponent } from './employee/employee-list/employee-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full',
//   },
//   {path: 'cars',component: CarListComponent},
//   {path: 'employees', component: employeeListComponent},
//   {
//     path: 'profile',
//     component: ProfileComponent,
//   },
//   {
//     path: 'signIn',
//     component: SignInComponent,
//   },
//   {
//     path: 'signUp',
//     component: SignUpComponent,
//   },
//   {
//     path: '**',
//     redirectTo: 'signIn',
//   },
// ];
const routes: Routes = 
[
  {path: '', component: HomeComponent},
  {path: 'cars',component: CarListComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'employees', component: employeeListComponent},
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  { path: 'employees/:id', component: EmployeeProfileComponent },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: '**',
    redirectTo: 'signIn',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
