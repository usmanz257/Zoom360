import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDashboardsCycleComponent } from './create-dashboards-cycle.component';

describe('CreateDashboardsCycleComponent', () => {
  let component: CreateDashboardsCycleComponent;
  let fixture: ComponentFixture<CreateDashboardsCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDashboardsCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDashboardsCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
