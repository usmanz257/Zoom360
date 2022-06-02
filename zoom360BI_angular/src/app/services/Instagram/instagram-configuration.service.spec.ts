import { TestBed } from '@angular/core/testing';

import { InstagramConfigurationService } from './instagram-configuration.service';

describe('InstagramConfigurationService', () => {
  let service: InstagramConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstagramConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
