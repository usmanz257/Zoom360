import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiinsightsExpandWidgetComponent } from './aiinsights-expand-widget.component';

describe('AiinsightsExpandWidgetComponent', () => {
  let component: AiinsightsExpandWidgetComponent;
  let fixture: ComponentFixture<AiinsightsExpandWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiinsightsExpandWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiinsightsExpandWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
