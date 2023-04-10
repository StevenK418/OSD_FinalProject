import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarAPIService } from 'src/app/services/car-api.service';
import { Car } from 'src/app/models/car';
import { CarStore } from 'src/app/stores/car-store';
import { CarState } from 'src/app/stores/car-store';
import { Observable, Subscription, switchMap, filter } from 'rxjs';
import { CarQuery } from 'src/app/stores/car.query';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit, OnDestroy {


  //Variables for state management
  carToBeUpdated: Car | any;
  isUpdateActivated = false;
  listCarsSub: Subscription;
  deleteCarSub: Subscription;
  updateCarSub: Subscription;
  cstate: CarState;

  cars$: Observable<Car[]> = this.carQuery.selectAll();

  carList: Car[] = [];
  message: string = "";

  currentCar: Car | undefined;

  showCarForm: boolean = false;

  constructor(private carService: CarAPIService, private carQuery:CarQuery) { }

  ngOnInit(): void 
  {
    //Uses Stores
    //  This is commented out as it appears to only bring back multiples 
    //  of the first entry in the db and is unusable. 
    // this.listCarsSub = this.carQuery.selectAreCarsLoaded$.pipe(
    //     filter(areCarsLoaded => !areCarsLoaded),
    //     switchMap(areCarsLoaded => {
    //       if(!areCarsLoaded)
    //       {
    //         return this.carService.getCars();
    //       }
    //       else return '';
    //     })
    //   ).subscribe(result => {});

    this.carService.getCars().subscribe(
    {
      next: (value: Car[] )=> this.carList = value,
      complete: () => console.log('car service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked(car: Car): void
  {
    this.loadCarDetails(car);
  }

  dismissAlert()
  {
    this.message = "";
  }

  // Used to manually load the car details after updates and onClickevents
  loadCarDetails(car:Car)
  {
    this.currentCar = car;
  }

  //CRUD actions
  //CREATE
  addNewCar(newCar: Car): void 
  {
    console.log('adding new car ' + JSON.stringify(newCar));
    this.carService.addNewCar({ ...newCar })
      .subscribe(
      {
        next: car => 
        {
          console.log(JSON.stringify(car) + ' has been added');
          this.message = "new car has been added";
        },
        error: (err) => this.message = err
      });

    // Call OnInit once more to display results from db
    this.ngOnInit();
  }

   //UPDATE
   updateCar(id: string, car: Car): void 
  {
    console.log('updating ');
    console.table (car);
    this.carService.updateCar(id, car)
      .subscribe({
        next: car=> {
          console.log(JSON.stringify(car) + ' has been updated');
          this.message = " car has been updated";
        },
        error: (err) => this.message = err
      });
    // Call onInit once more so list is retreived from the DB
    this.ngOnInit();
    this.loadCarDetails(car);
  }

  //DELETE
  deleteCar() 
  {
    console.log('Deleting car');
    if (this.currentCar) {
      this.carService.deleteCar(this.currentCar._id)
        .subscribe({
          next: car => {
            console.log(JSON.stringify(car) + ' has been deleted from the DB');
            this.message = "book has been deleted.";
          },
          error: (err) => this.message = err
        });
    }
    // Call onInit once more so list is retreived from the DB
    this.ngOnInit();
    this.currentCar=undefined;
    
  }

  //Display form
  openAddCar(): void 
  {
    this.currentCar = undefined;
    this.showCarForm = true;
  }

   //Display form
   openEditCar(): void 
   {
     this.showCarForm = true;
   }

  carFormClose(car?: Car): void 
  {
    this.showCarForm = false;
    console.table(car);
    if (car == null) 
    {
      this.message = "Form closed without saving";
      this.currentCar = undefined;
    }
    else if(this.currentCar == null)
    {
      this.addNewCar(car);
    }
    else 
    {
      this.updateCar(this.currentCar._id, car);
    }
  }

  // Highlight the selected item
  isSelected(car: Car): boolean 
  {
    if (!car || !this.currentCar) 
    {
      return false;
    }
    else 
    {
      return car._id === this.currentCar._id;
    }
  }

  //OnDestroy Method
  ngOnDestroy(): void 
  {
      if(this.listCarsSub)
      {
        this.listCarsSub.unsubscribe();
      }

      if(this.deleteCarSub)
      {
        this.deleteCarSub.unsubscribe();
      }

      if(this.updateCarSub)
      {
        this.updateCarSub.unsubscribe();
      }
  }

}
