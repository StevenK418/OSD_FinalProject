import { Injectable } from '@angular/core';
import { ID, EntityStore, StoreConfig, EntityState } from '@datorama/akita';
import { Car } from '../models/car';

export interface CarState extends EntityState<Car, string> {
  areCarsLoaded: boolean;
}

export function createInitialState(): CarState {
  return {
      areCarsLoaded: false
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'car' })
export class CarStore extends EntityStore<CarState> {

    constructor() {
        super(createInitialState());
    }

    loadCars(car: Car[], areCarsLoaded: boolean) {
      this.set(car);
      console.log(car)
      this.update(state => ({
        ...state, //typescript spread operator, returns all of the elements of the array
        areCarsLoaded
      }));
    }
}
