import { TestBed } from '@angular/core/testing';

import { MultiFectorAuthenticationService } from './multi-fector-authentication.service';

describe('MultiFectorAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiFectorAuthenticationService = TestBed.get(MultiFectorAuthenticationService);
    expect(service).toBeTruthy();
  });
});
