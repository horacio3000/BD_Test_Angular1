import { TestBed } from '@angular/core/testing';

import { FIllDataService } from './fill-data.service';

describe('FIllDataService', () => {
  let service: FIllDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FIllDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
