import { TestBed } from '@angular/core/testing';

import { UserRightsGuardService } from './user-rights-guard.service';

describe('UserRightsGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRightsGuardService = TestBed.get(UserRightsGuardService);
    expect(service).toBeTruthy();
  });
});
