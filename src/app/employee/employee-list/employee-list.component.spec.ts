import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { Observable, of, throwError, retry, catchError } from 'rxjs';
import { EmployeeAPIService } from 'src/app/services/employee-apiservice.service';

describe('EmployeeAPIService', () => {
  let service: EmployeeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports:[HttpClientTestingModule],
        providers: [EmployeeAPIService]
      });
    service = TestBed.inject(EmployeeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Create an Employee on Service method', () => {
    const service: EmployeeAPIService = TestBed.get(EmployeeAPIService);
    let employeeServiceMock = spyOn(service, 'addNewEmployee').withArgs({    "_id": "642ea8d18fc35cee372cf0d5",
    "firstName": "Jerrell",
    "lastName": "Reichert",
    "profilePicture": "https://loremflickr.com/640/480",
    "email": "Ben_Rodriguez@yahoo.com",
    "phoneNumber": "298.789.9748 x39346",
    "address": "900 Trace Trace",
    "status": true,
    })
      .and.returnValue(of({"_id": "642ea8d18fc35cee372cf0d5",
      "firstName": "Jerrell",
      "lastName": "Reichert",
      "profilePicture": "https://loremflickr.com/640/480",
      "email": "Ben_Rodriguez@yahoo.com",
      "phoneNumber": "298.789.9748 x39346",
      "address": "900 Trace Trace",
      "status": true,
      }))

    service.addNewEmployee({"_id": "642ea8d18fc35cee372cf0d5",
    "firstName": "Jerrell",
    "lastName": "Reichert",
    "profilePicture": "https://loremflickr.com/640/480",
    "email": "Ben_Rodriguez@yahoo.com",
    "phoneNumber": "298.789.9748 x39346",
    "address": "900 Trace Trace",
    "status": true}).subscribe((data) => {
      console.log("called")
      expect(data).toEqual(employeeServiceMock);
    }); 
    expect(service.addNewEmployee).toHaveBeenCalled();
  
  });
});
