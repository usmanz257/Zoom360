import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSalesAnalysisComponent } from './digital-sales-analysis.component';

describe('DigitalSalesAnalysisComponent', () => {
  let component: DigitalSalesAnalysisComponent;
  let fixture: ComponentFixture<DigitalSalesAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSalesAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSalesAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
