import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIInsightsComponent } from './ai-insights.component';

describe('AIInsightsComponent', () => {
  let component: AIInsightsComponent;
  let fixture: ComponentFixture<AIInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AIInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
