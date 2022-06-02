import { TestBed } from '@angular/core/testing';

import { TreeTemplateServicesService } from './tree-template-services.service';

describe('TreeTemplateServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeTemplateServicesService = TestBed.get(TreeTemplateServicesService);
    expect(service).toBeTruthy();
  });
});
