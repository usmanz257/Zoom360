import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AIInsightDemo1Component } from './aiinsight-demo1.component';

describe('AIInsightDemo1Component', () => {
  let component: AIInsightDemo1Component;
  let fixture: ComponentFixture<AIInsightDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AIInsightDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AIInsightDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
