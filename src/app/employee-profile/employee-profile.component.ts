import { Component, OnInit } from '@angular/core';
import { EmployeeAPIService } from '../services/employee-apiservice.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  employee?: Employee;
  message: String='';

  constructor(private service:EmployeeAPIService) 
  { 

  }


  ngOnInit(): void 
  {
    //TODO: This needs more work. 
    // this.service.getEmployee(this.employee._id).subscribe(
    // {
    //     next: (value: Employee) => this.employee = value,
    //     complete: () => console.log('employee service finished'),
    //     error: (message) => this.message = message
    // })
  }

}
