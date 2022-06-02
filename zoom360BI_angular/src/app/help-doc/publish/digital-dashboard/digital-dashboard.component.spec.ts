import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalDashboardComponent } from './digital-dashboard.component';

describe('DigitalDashboardComponent', () => {
  let component: DigitalDashboardComponent;
  let fixture: ComponentFixture<DigitalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
