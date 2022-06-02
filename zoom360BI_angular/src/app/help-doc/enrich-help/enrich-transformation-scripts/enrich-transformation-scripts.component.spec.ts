import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichTransformationScriptsComponent } from './enrich-transformation-scripts.component';

describe('EnrichTransformationScriptsComponent', () => {
  let component: EnrichTransformationScriptsComponent;
  let fixture: ComponentFixture<EnrichTransformationScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrichTransformationScriptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichTransformationScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
