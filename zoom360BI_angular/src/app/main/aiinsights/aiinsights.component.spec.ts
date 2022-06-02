import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AIinsightsComponent } from './aiinsights.component';

describe('AIinsightsComponent', () => {
  let component: AIinsightsComponent;
  let fixture: ComponentFixture<AIinsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AIinsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AIinsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
