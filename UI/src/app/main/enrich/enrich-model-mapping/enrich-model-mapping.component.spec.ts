import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichModelMappingComponent } from './enrich-model-mapping.component';

describe('EnrichModelMappingComponent', () => {
  let component: EnrichModelMappingComponent;
  let fixture: ComponentFixture<EnrichModelMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrichModelMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichModelMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
