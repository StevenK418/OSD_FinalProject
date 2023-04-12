import { TestBed } from '@angular/core/testing';

import { EmployeeAPIService } from './employee-apiservice.service';

describe('EmployeeAPIServiceService', () => {
  let service: EmployeeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


    //TODO: TEST 1
   //Test to see if we have employees in the db
   it('should return more than one', () => {
    expect(service.getEmployees()).toBeGreaterThan(0);
  });
});
