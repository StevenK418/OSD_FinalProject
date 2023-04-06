import { Component, OnInit } from '@angular/core';
import { CarAPIService } from '../services/car-api.service';
import {Car} from '../models/car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit 
{

  cars: Car[] = [];
  message: String='';

  constructor(private service:CarAPIService) 
  { 

  }


  ngOnInit(): void 
  {
    this.service.getCars().subscribe(
    {
        next: (value: Car[]) => this.cars = value,
        complete: () => console.log('car service finished'),
        error: (message) => this.message = message
    })
  }

}
