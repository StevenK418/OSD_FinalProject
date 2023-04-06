import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input() car?: Car;
  @Output() carFormClose = new EventEmitter<Car>();
  carForm : FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void 
  {
    this.carForm = new FormGroup({
      car_model: new FormControl (this.car?.car_model, [Validators.required, Validators.minLength(3)]),
      driver: new FormGroup
      ({
          name: new FormControl(this.car?.driver.name),
          age: new FormControl(this.car?.driver.age),
          address: new FormControl(this.car?.driver.address)
      }),
      location: new FormControl (this.car?.location, [Validators.required]),
      plate_id: new FormControl(this.car?.plate_id),
      status: new FormControl(this.car?.status),
      url: new FormControl(this.car?.url)
    })
  }

  //Event handler for the onClick submit event. 
  onSubmit()
  {
    console.log('forms submitted with ');
    console.table(this.carForm.value);
    //Send off the car object built via the form
    this.carFormClose.emit(this.carForm?.value);
  }

  //Close the form
  closeForm() 
  {
    this.carFormClose.emit(undefined)
  }


  //Error code
  get car_model() {
    return this.carForm.get('car_model');
  }
  get plate_id() {
    return this.carForm.get('plate_id');
  }
  get driver() {
    return this.carForm.get('driver');
  }
  get name() {
    return this.carForm.get('name');
  }
  get age() {
    return this.carForm.get('age');
  }
  get address() {
    return this.carForm.get('address');
  }
  get location() {
    return this.carForm.get('location');
  }
  get status() {
    return this.carForm.get('status');
  }
  get url() {
    return this.carForm.get('url');
  }

}
