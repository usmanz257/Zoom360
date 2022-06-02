import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AIInsightDemo2Component } from './aiinsight-demo2.component';

describe('AIInsightDemo2Component', () => {
  let component: AIInsightDemo2Component;
  let fixture: ComponentFixture<AIInsightDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AIInsightDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AIInsightDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
