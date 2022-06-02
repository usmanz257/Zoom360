import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDashboardAComponent } from './demo-dashboard-a.component';

describe('DemoDashboardAComponent', () => {
  let component: DemoDashboardAComponent;
  let fixture: ComponentFixture<DemoDashboardAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDashboardAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDashboardAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
