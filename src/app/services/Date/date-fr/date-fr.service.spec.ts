import { TestBed } from '@angular/core/testing';

import { DateFrService } from './date-fr.service';

describe('DateFrService', () => {
  let service: DateFrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateFrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
