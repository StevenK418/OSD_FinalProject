import { Component, Input, OnInit } from '@angular/core';
import { EmployeeAPIService } from '../services/employee-apiservice.service';
import { Employee } from '../models/employee';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  //employee?: Employee;
  message: String='';
  id: String | any;

  employee: Employee | any;

  constructor(private service:EmployeeAPIService, private _Activatedroute:ActivatedRoute) 
  { 
    this.id = this._Activatedroute.snapshot.paramMap.get("id"); 
  }

  ngOnInit()
  {
    //Load in the employee and subscribe to the observable
    this.service.GetEmployee(this.id).subscribe(
    {
      next: (value: Employee )=> this.employee = value,
      complete: () => console.log('employee service finished'),
      error: (mess) => this.message = mess
    })
  }

}
