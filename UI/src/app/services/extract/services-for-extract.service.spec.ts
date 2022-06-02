import { TestBed } from '@angular/core/testing';

import { ServicesForExtractService } from './services-for-extract.service';

describe('ServicesForExtractService', () => {
  let service: ServicesForExtractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesForExtractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
