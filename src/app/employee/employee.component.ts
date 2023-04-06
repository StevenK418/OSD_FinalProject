import { Component, OnInit } from '@angular/core';
import { EmployeeAPIService } from '../services/employee-apiservice.service';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class employeeComponent implements OnInit 
{

  employees: Employee[] = [];
  message: String='';

  constructor(private service:EmployeeAPIService) 
  { 

  }


  ngOnInit(): void 
  {
    this.service.getEmployees().subscribe(
    {
        next: (value: Employee[]) => this.employees = value,
        complete: () => console.log('employee service finished'),
        error: (message) => this.message = message
    })
  }

}