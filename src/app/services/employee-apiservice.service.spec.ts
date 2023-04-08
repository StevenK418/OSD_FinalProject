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
});
