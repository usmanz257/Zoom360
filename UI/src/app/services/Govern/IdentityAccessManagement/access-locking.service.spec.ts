import { TestBed } from '@angular/core/testing';

import { AccessLockingService } from './access-locking.service';

describe('AccessLockingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessLockingService = TestBed.get(AccessLockingService);
    expect(service).toBeTruthy();
  });
});
