import { TestBed } from '@angular/core/testing';

import { DeleteRowService } from './delete-row.service';

describe('DeleteRowService', () => {
  let service: DeleteRowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteRowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
