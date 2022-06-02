import { TestBed } from '@angular/core/testing';

import { CSVFileReadingService } from './csvfile-reading.service';

describe('CSVFileReadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CSVFileReadingService = TestBed.get(CSVFileReadingService);
    expect(service).toBeTruthy();
  });
});
