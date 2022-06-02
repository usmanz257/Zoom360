import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZoneSetupComponent } from './time-zone-setup.component';

describe('TimeZoneSetupComponent', () => {
  let component: TimeZoneSetupComponent;
  let fixture: ComponentFixture<TimeZoneSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeZoneSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeZoneSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
