import { TestBed } from '@angular/core/testing';

import { UserAccessManagementService } from './user-access-management.service';

describe('UserAccessManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAccessManagementService = TestBed.get(UserAccessManagementService);
    expect(service).toBeTruthy();
  });
});
