import { TestBed } from '@angular/core/testing';

import { DatastreamServiceService } from './datastream-service.service';

describe('DatastreamServiceService', () => {
  let service: DatastreamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatastreamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
