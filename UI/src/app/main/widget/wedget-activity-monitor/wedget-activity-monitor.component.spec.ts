import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedgetActivityMonitorComponent } from './wedget-activity-monitor.component';

describe('WedgetActivityMonitorComponent', () => {
  let component: WedgetActivityMonitorComponent;
  let fixture: ComponentFixture<WedgetActivityMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedgetActivityMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedgetActivityMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
