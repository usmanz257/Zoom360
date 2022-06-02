import { TestBed } from '@angular/core/testing';

import { NewConnectionSetupService } from './new-connection-setup.service';

describe('NewConnectionSetupService', () => {
  let service: NewConnectionSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewConnectionSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
