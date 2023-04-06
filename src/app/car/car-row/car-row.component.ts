import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-row',
  templateUrl: './car-row.component.html',
  styleUrls: ['./car-row.component.css']
})
export class CarRowComponent implements OnInit 
{
  
  @Input() car!: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
