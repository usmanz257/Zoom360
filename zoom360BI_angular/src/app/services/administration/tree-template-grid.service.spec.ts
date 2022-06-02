import { TestBed } from '@angular/core/testing';

import { TreeTemplateGridService } from './tree-template-grid.service';

describe('TreeTemplateGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeTemplateGridService = TestBed.get(TreeTemplateGridService);
    expect(service).toBeTruthy();
  });
});
