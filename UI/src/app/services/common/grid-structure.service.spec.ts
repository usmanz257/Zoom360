import { TestBed } from '@angular/core/testing';

import { GridStructureService } from './grid-structure.service';

describe('GridStructureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridStructureService = TestBed.get(GridStructureService);
    expect(service).toBeTruthy();
  });
});
