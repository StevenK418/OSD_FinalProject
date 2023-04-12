import { ComponentFixture, TestBed } from '@angular/core/testing';

import { employeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let component: employeeListComponent;
  let fixture: ComponentFixture<employeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ employeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(employeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
