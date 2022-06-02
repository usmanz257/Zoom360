import { TestBed } from '@angular/core/testing';

import { UserRightsService } from './user-rights.service';

describe('UserRightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRightsService = TestBed.get(UserRightsService);
    expect(service).toBeTruthy();
  });
});
