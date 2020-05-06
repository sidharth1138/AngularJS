import { TestBed } from '@angular/core/testing';

import { UsermockService } from './usermock.service';

describe('UsermockService', () => {
  let service: UsermockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
