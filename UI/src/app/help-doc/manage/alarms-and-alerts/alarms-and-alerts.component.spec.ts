import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsAndAlertsComponent } from './alarms-and-alerts.component';

describe('AlarmsAndAlertsComponent', () => {
  let component: AlarmsAndAlertsComponent;
  let fixture: ComponentFixture<AlarmsAndAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmsAndAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsAndAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
