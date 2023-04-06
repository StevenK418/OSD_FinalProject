import { TestBed } from '@angular/core/testing';

import { EmployeeAPIServiceService } from './employee-apiservice.service';

describe('EmployeeAPIServiceService', () => {
  let service: EmployeeAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
