import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AIinsightWidgetComponent } from './aiinsight-widget.component';

describe('AIinsightWidgetComponent', () => {
  let component: AIinsightWidgetComponent;
  let fixture: ComponentFixture<AIinsightWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AIinsightWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AIinsightWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
