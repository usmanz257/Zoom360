import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionPlanComponent } from './execution-plan.component';

describe('ExecutionPlanComponent', () => {
  let component: ExecutionPlanComponent;
  let fixture: ComponentFixture<ExecutionPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
