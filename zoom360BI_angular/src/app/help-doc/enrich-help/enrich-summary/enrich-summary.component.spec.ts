import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichSummaryComponent } from './enrich-summary.component';

describe('EnrichSummaryComponent', () => {
  let component: EnrichSummaryComponent;
  let fixture: ComponentFixture<EnrichSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrichSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
