import { TestBed } from '@angular/core/testing';

import { Employee1Service } from './employee1.service';

describe('Employee1Service', () => {
  let service: Employee1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Employee1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
