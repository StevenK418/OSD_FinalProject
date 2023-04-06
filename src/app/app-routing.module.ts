import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular'
import { CarComponent } from './car/car.component';
import { HomeComponent } from './home/home.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { ProfileComponent } from './profile/profile.component';
import { employeeComponent} from './employee/employee.component';
import { employeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = 
[
  {path: '', component: HomeComponent},
  {path: 'cars',component: CarListComponent, canActivate: [AuthGuard],},
  {path: 'profile', component: ProfileComponent,canActivate: [AuthGuard],},
  {path: 'employees', component: employeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
