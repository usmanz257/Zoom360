import { TestBed } from '@angular/core/testing';

import { PredictServicesService } from './predict-services.service';

describe('PredictServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredictServicesService = TestBed.get(PredictServicesService);
    expect(service).toBeTruthy();
  });
});
