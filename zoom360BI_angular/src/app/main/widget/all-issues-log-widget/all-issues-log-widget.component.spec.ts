import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIssuesLogWidgetComponent } from './all-issues-log-widget.component';

describe('AllIssuesLogWidgetComponent', () => {
  let component: AllIssuesLogWidgetComponent;
  let fixture: ComponentFixture<AllIssuesLogWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllIssuesLogWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIssuesLogWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
