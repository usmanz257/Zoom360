import { TestBed } from '@angular/core/testing';

import { RiskBasedAuthenticationService } from './risk-based-authentication.service';

describe('RiskBasedAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiskBasedAuthenticationService = TestBed.get(RiskBasedAuthenticationService);
    expect(service).toBeTruthy();
  });
});
