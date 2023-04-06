import { Component, OnInit } from '@angular/core';
import { EmployeeAPIService } from 'src/app/services/employee-apiservice.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class employeeListComponent implements OnInit {

  employeeList: Employee[] = [];
  message: string = "";

  currentEmployee: Employee| undefined;

  constructor(private employeeService: EmployeeAPIService) { }

  ngOnInit(): void 
  {
    this.employeeService.getEmployees().subscribe(
      {
        next: (value: Employee[] )=> this.employeeList = value,
        complete: () => console.log('employee service finished'),
        error: (mess) => this.message = mess
      })
  }

  clicked(employee: Employee): void
  {
    this.loadEmployeeDetails(employee);
  }

  dismissAlert()
  {
    this.message = "";
  }

  // Used to manually load the employee details after updates and onClickevents
  loadEmployeeDetails(employee:Employee)
  {
    this.currentEmployee = employee;
  }

    // Highlight the selected item
    isSelected(employee: Employee): boolean 
    {
      if (!employee || !this.currentEmployee) 
      {
        return false;
      }
      else 
      {
        return employee._id === this.currentEmployee._id;
      }
    }

}
