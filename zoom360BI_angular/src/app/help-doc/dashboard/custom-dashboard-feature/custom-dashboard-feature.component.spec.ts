import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDashboardFeatureComponent } from './custom-dashboard-feature.component';

describe('CustomDashboardFeatureComponent', () => {
  let component: CustomDashboardFeatureComponent;
  let fixture: ComponentFixture<CustomDashboardFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDashboardFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDashboardFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
