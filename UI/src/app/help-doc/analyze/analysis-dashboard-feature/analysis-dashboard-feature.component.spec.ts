import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisDashboardFeatureComponent } from './analysis-dashboard-feature.component';

describe('AnalysisDashboardFeatureComponent', () => {
  let component: AnalysisDashboardFeatureComponent;
  let fixture: ComponentFixture<AnalysisDashboardFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisDashboardFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisDashboardFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
