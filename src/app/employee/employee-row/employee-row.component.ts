import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-row',
  templateUrl: './employee-row.component.html',
  styleUrls: ['./employee-row.component.css']
})
export class EmployeeRowComponent implements OnInit {

  @Input() employee!: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
