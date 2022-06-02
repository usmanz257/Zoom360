import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichLookupValuesComponent } from './enrich-lookup-values.component';

describe('EnrichLookupValuesComponent', () => {
  let component: EnrichLookupValuesComponent;
  let fixture: ComponentFixture<EnrichLookupValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrichLookupValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichLookupValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
